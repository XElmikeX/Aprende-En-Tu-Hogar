const CACHE_NAME = 'aprende-hogar-v2';
const urlsToCache = [
    '/',
    'index.html',
    'css/decoracion.css',
    'js/cursos.js',
    'js/idiomas.js',
    'manifest.json'
];

// Instalar
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Activar
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Fetch - versión simple
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si está en cache, devolverlo
                if (response) {
                    return response;
                }
                
                // Si no está, hacer fetch y guardar en cache
                return fetch(event.request)
                    .then(response => {
                        // Verificar si es válida
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        
                        // Clonar respuesta
                        const responseClone = response.clone();
                        
                        // Guardar en cache para futuro
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseClone);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Si hay error y es una página, mostrar index.html
                        if (event.request.mode === 'navigate') {
                            return caches.match('index.html');
                        }
                        return new Response('Error: Sin conexión');
                    });
            })
    );
});