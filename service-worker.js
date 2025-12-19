// service-worker.js - VERSIÓN MÁS ROBUSTA
const CACHE_NAME = 'aprende-hogar-v4';
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

// INSTALACIÓN - Cachear todo inmediatamente
self.addEventListener('install', event => {
  console.log('🔄 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Cacheando recursos iniciales');
        return cache.addAll(urlsToCache)
          .then(() => {
            console.log('✅ Todos los recursos cacheados');
            return self.skipWaiting();
          })
          .catch(err => {
            console.log('❌ Error cacheando:', err);
            // Aún así continuamos aunque falle alguno
            return self.skipWaiting();
          });
      })
  );
});

// ACTIVACIÓN - Limpiar caches viejos
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker: Activando...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activado y listo');
      return self.clients.claim();
    })
  );
});

// INTERCEPTAR PETICIONES
self.addEventListener('fetch', event => {
  // Solo manejar GET
  if (event.request.method !== 'GET') return;
  
  // DEBUG: Ver qué se está pidiendo
  console.log('🌐 Fetch:', event.request.url);
  
  event.respondWith(
    // PRIMERO buscar en caché
    caches.match(event.request)
      .then(cachedResponse => {
        // Si encontramos en caché, ¡usarlo inmediatamente!
        if (cachedResponse) {
          console.log('💾 Sirviendo desde caché:', event.request.url);
          return cachedResponse;
        }
        
        // Si NO está en caché, intentar red
        console.log('🌐 No en caché, buscando en red:', event.request.url);
        return fetch(event.request)
          .then(networkResponse => {
            // Solo cachear si es exitosa y es de nuestro dominio
            if (networkResponse.ok && 
                event.request.url.startsWith(self.location.origin)) {
              console.log('Cacheando nuevo recurso:', event.request.url);
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          })
          .catch(error => {
            console.log('Error de red, intentando fallback:', error);
            
            // FALLBACKS ESPECÍFICOS:
            
            // 1. Si es la página principal
            if (event.request.mode === 'navigate') {
              console.log('🏠 Redirigiendo a index.html');
              return caches.match('/index.html');
            }
            
            // 2. Si es CSS
            if (event.request.url.includes('.css')) {
              return new Response('body { color: black; }', {
                headers: { 'Content-Type': 'text/css' }
              });
            }
            
            // 3. Si es JavaScript
            if (event.request.url.includes('.js')) {
              return new Response('console.log("Offline mode");', {
                headers: { 'Content-Type': 'application/javascript' }
              });
            }
            
            // 4. Si es una imagen
            if (event.request.url.includes('.png') || 
                event.request.url.includes('.jpg') ||
                event.request.url.includes('.ico')) {
              return caches.match('/icons/icon-192x192.png');
            }
            
            // 5. Fallback genérico
            return new Response(`
              <html>
                <head><title>Modo Offline</title></head>
                <body style="padding:20px;text-align:center;">
                  <h1>📶 Sin conexión</h1>
                  <p>Esta aplicación funciona sin internet, pero necesitas cargarla al menos una vez con conexión.</p>
                  <p>Por favor, conecta a internet y recarga la página.</p>
                </body>
              </html>
            `, {
              headers: { 'Content-Type': 'text/html' }
            });
          });
      })
  );
});

// MENSAJE PARA FORZAR ACTUALIZACIÓN
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});