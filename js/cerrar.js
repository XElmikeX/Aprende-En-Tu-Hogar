// Registrar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./js/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registrado con éxito:', registration.scope);
        
        // Verificar si ya está controlando la página
        if (navigator.serviceWorker.controller) {
          console.log('Esta página está controlada por ServiceWorker');
        }
      })
      .catch(function(err) {
        console.log('Error al registrar ServiceWorker:', err);
      });
  });
}

// Detectar si estamos offline
window.addEventListener('offline', function() {
  console.log('Estás offline - La app seguirá funcionando');
});

window.addEventListener('online', function() {
  console.log('Estás online');
});

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
