// 1. IMPORTAÇÃO DO ONESIGNAL (Sempre no topo)
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

const CACHE_NAME = 'mindset-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './app.html',
    './css/main.css',
    './css/app.css',
    './js/main.js',
    './js/app.js',
    './js/notifications.js',
    './manifest.json',
    './assets/icone-ios.png',
    './assets/icone-192.png',
    './assets/icone-512.png'
];

let dailyConfig = null;

// INSTALAÇÃO: Cache de arquivos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// ATIVAÇÃO: Limpeza de caches antigos
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

// ESTRATÉGIA FETCH: Stale-While-Revalidate
self.addEventListener('fetch', event => {
    if (event.request.url.includes('onesignal') || event.request.url.includes('firebase')) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200) {
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            });
            return cachedResponse || fetchPromise;
        })
    );
});

// COMUNICAÇÃO E SINCRONIZAÇÃO LOCAL
self.addEventListener('message', event => {
    if (event.data.type === 'SET_DAILY_CONFIG') dailyConfig = event.data.config;
});

self.addEventListener('periodicsync', event => {
    if (event.tag === 'check-tasks') event.waitUntil(checkAndSend());
});

async function checkAndSend() {
    if (!dailyConfig) return;
    const agora = new Date();
    const h = agora.getHours();
    if (h < 8 || h > 22) return;

    // Notificação local simples se o app estiver aberto/background
    await self.registration.showNotification("MINDSET", {
        body: "Verifique suas missões de hoje.",
        icon: 'assets/icone-192.png',
        tag: 'mindset-local'
    });
}
