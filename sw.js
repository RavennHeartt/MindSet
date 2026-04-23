/**
 * MINDSET - SERVICE WORKER (LIGHT VERSION)
 * Focado em performance sem quebrar OneSignal/Firebase
 */
// No seu arquivo sw.js (Service Worker do PWA)

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 🛡️ FILTRO DE EXCLUSÃO CRÍTICO:
  // Impede que o Service Worker tente cachear ou processar streams persistentes
  // do Firebase, Google APIs e OneSignal. 
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('onesignal.com')
  ) {
    // bypass total: não chama event.respondWith, deixa a rede lidar
    return; 
  }

});

const CACHE_NAME = 'mindset-v2';
const ASSETS = [
    './',
    './index.html',
    './app.html',
    './css/main.css',
    './css/app.css',
    './js/main.js',
    './js/app.js',
    './js/notifications.js',
    './manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )));
    self.clients.claim();
});

// REMOVEMOS A INTERCEPÇÃO DE FETCH COMPLEXA
// Isso evita o erro de "Content-Length header exceeds response Body"
self.addEventListener('fetch', event => {
    // Não interfere em requisições de API ou CDN externo
    if (!event.request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        caches.match(event.request).then(res => res || fetch(event.request))
    );
});
