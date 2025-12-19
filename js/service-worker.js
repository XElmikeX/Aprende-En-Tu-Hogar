// service-worker.js - VERSIÓN MEJORADA
const CACHE_NAME = 'aprende-hogar-v3';
const urlsToCache = [
  './',
  './index.html',
  './css/decoracion.css',
  './js/cursos.js',
  './js/idiomas.js',
  './manifest.json',
  './icons/icon-72x72.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando recursos offline');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // NO cachear requests a otras páginas (solo nuestra app)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(response => {
            // Solo cachear respuestas exitosas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Si es una página, devolver index.html
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            // Si es otro recurso, devolver null
            return new Response('Contenido no disponible offline', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});