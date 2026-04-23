/**
 * MINDSET - SERVICE WORKER v3
 * Unificado, focado em performance e bypass de streams
 */

const CACHE_NAME = 'mindset-v3';

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
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 🛡️ BYPASS ABSOLUTO: Firestore, Google APIs e OneSignal
  // Se for um desses domínios, retornamos imediatamente para deixar a rede nativa agir
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('onesignal.com')
  ) {
    return; 
  }

  // Só intercepta arquivos do seu próprio domínio para cache offline
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request).catch(() => {
          // Fallback se estiver offline e o arquivo não estiver no cache
          return caches.match('./index.html');
      });
    })
  );
});
