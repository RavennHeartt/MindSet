const CACHE_NAME = 'mindset-v1';
const assets = [
  './',
  './index.html',
  './css/main.css',
  './js/main.js',
  './assets/patriarca.jpg' // Adicione aqui os caminhos das suas imagens
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
