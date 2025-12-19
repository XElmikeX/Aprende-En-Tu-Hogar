// service-worker.js - CORREGIDO
const CACHE_NAME = 'aprende-hogar-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/decoracion.css',
  '/js/cursos.js',
  '/js/idiomas.js',
  '/js/cerrar.js',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando recursos offline');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Todos los recursos han sido cacheados');
        return self.skipWaiting();
      })
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
    }).then(() => {
      console.log('Service Worker activado');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Para desarrollo, puedes comentar esta línea para ver todas las peticiones
  // console.log('Fetching:', event.request.url);
  
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, devolverlo
        if (response) {
          return response;
        }
        
        // Si no está en caché, hacer la petición
        return fetch(event.request)
          .then(response => {
            // Solo cachear respuestas exitosas y del mismo origen
            if (!response || response.status !== 200 || 
                response.type !== 'basic' ||
                !event.request.url.startsWith(self.location.origin)) {
              return response;
            }
            
            // Clonar la respuesta para cachearla
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(error => {
            console.log('Error en fetch:', error);
            
            // Si es una página, devolver index.html
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            // Para otros recursos, puedes devolver una respuesta por defecto
            return new Response('Contenido no disponible offline', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});