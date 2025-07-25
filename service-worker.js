const CACHE_NAME = 'blackjack-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Füge hier ggf. weitere Ressourcen wie CSS/Icons hinzu
];

// Install Service Worker und Cache alle Dateien
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch - liefere aus Cache, sonst aus Netzwerk
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});