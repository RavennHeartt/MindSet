/**
 * MINDSET - SERVICE WORKER (LIGHT VERSION)
 * Focado em performance sem quebrar OneSignal/Firebase
 */

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
