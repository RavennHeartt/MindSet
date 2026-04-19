const CACHE_NAME = 'mindset-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/main.css',
    './js/main.js',
    './manifest.json',
    './assets/icone-192.png',
    './assets/icone-512.png',
    './assets/icone-maskable.png'
];

let dailyConfig = null;

// 1. INSTALAÇÃO: Salva os arquivos essenciais offline
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("MindSet: Arquivos cacheados com sucesso.");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. ATIVAÇÃO: Limpa caches antigos se você atualizar a versão
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// 3. ESTRATÉGIA DE REDE: "Stale While Revalidate" (Rápido e sempre atualizado)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            });
            return cachedResponse || fetchPromise;
        })
    );
});

// 4. MENSAGENS: Recebe configurações do front-end
self.addEventListener('message', event => {
    if (event.data.type === 'SET_DAILY_CONFIG') {
        dailyConfig = event.data.config;
        console.log("MindSet: Configuração de notificações atualizada.");
    }
});

// 5. SINCRONIZAÇÃO PERIÓDICA: Roda sua lógica de notificações
self.addEventListener('periodicsync', event => {
    if (event.tag === 'check-tasks') {
        event.waitUntil(checkAndSend());
    }
});

// 6. LÓGICA DE NOTIFICAÇÕES (Sua lógica original preservada)
async function checkAndSend() {
    if (!dailyConfig) return;

    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();

    if (hora < dailyConfig.startHour || hora > dailyConfig.endHour) return;

    let title = "";
    let body = "";
    let shouldNotify = false;

    // Lógica Original de Sorteio (20% de chance)
    if (Math.random() < 0.2) {
        title = "MINDSET";
        body = dailyConfig.style.pendente;
        shouldNotify = true;
    }

    // Eventos Específicos
    if (hora === 7 && minutos < 30) {
        title = "ORDEM DO DIA";
        body = dailyConfig.style.quote + dailyConfig.quote;
        shouldNotify = true;
    }
    
    if (hora > 12 && hora < 18 && Math.random() < 0.3) {
        title = "CONSISTÊNCIA";
        body = `🔥 ${dailyConfig.nome}, você está com ${dailyConfig.streak} dias de sequência!`;
        shouldNotify = true;
    }

    if (dailyConfig.showDonate && hora === 20) {
        title = "APOIE O PROJETO";
        body = "Gostando da sua evolução? Apoie o desenvolvedor.";
        shouldNotify = true;
    }

    if (hora === 21 && minutos > 30) {
        title = "RELATÓRIO FINAL";
        body = dailyConfig.tasksDone >= 3 ? dailyConfig.style.vitoria : dailyConfig.style.derrota;
        shouldNotify = true;
    }

    if (shouldNotify) {
        await self.registration.showNotification(title, {
            body: body,
            icon: 'assets/icone-192.png', // Usando o ícone do manifest
            badge: 'assets/icone-192.png', // Ícone que aparece na barra de status
            vibrate: [200, 100, 200],
            tag: 'mindset-alert', // Evita empilhar 10 notificações iguais
            renotify: true
        });
    }
}
