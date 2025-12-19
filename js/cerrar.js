// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('js/service-worker.js')
            .then(function(registration) {
                console.log('ServiceWorker registrado: ', registration.scope);
            })
            .catch(function(err) {
                console.log('Error: ', err);
            });
    });
}

// Detectar si ya está instalada
if (window.matchMedia('(display-mode: standalone)').matches || 
    window.navigator.standalone === true) {
    console.log("App ejecutándose en modo standalone (instalada)");
    
    // Ocultar botón de instalación si ya está instalada
    document.addEventListener('DOMContentLoaded', function() {
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    });
}
