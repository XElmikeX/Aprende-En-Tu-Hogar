// Registrar Service Worker - CORREGIDO
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Registrar desde la raíz
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('✅ ServiceWorker registrado con éxito:', registration.scope);
        
        // Verificar estado
        if (registration.active) {
          console.log('✅ Service Worker activo');
        }
        if (registration.waiting) {
          console.log('⚠️ Service Worker esperando');
        }
        if (registration.installing) {
          console.log('🔄 Service Worker instalándose');
        }
        
        // Verificar si ya está controlando la página
        if (navigator.serviceWorker.controller) {
          console.log('✅ Esta página está controlada por ServiceWorker');
        }
      })
      .catch(function(err) {
        console.log('❌ Error al registrar ServiceWorker:', err);
      });
  });
}

// Detectar si estamos offline
window.addEventListener('offline', function() {
  console.log('📶 Estás offline - La app seguirá funcionando');
  // Mostrar notificación visual opcional
  showOfflineNotification();
});

window.addEventListener('online', function() {
  console.log('📶 Estás online');
  hideOfflineNotification();
});

// Detectar si ya está instalada
if (window.matchMedia('(display-mode: standalone)').matches || 
    window.navigator.standalone === true) {
    console.log("📱 App ejecutándose en modo standalone (instalada)");
    
    // Ocultar botón de instalación si ya está instalada
    document.addEventListener('DOMContentLoaded', function() {
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    });
}

// Funciones para mostrar/ocultar notificación offline
function showOfflineNotification() {
  let offlineBar = document.getElementById('offline-notification');
  if (!offlineBar) {
    offlineBar = document.createElement('div');
    offlineBar.id = 'offline-notification';
    offlineBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #e74c3c;
      color: white;
      text-align: center;
      padding: 10px;
      z-index: 1000;
      font-weight: bold;
    `;
    offlineBar.textContent = 'Modo offline - Trabajando con datos locales';
    document.body.appendChild(offlineBar);
  }
}

function hideOfflineNotification() {
  const offlineBar = document.getElementById('offline-notification');
  if (offlineBar) {
    offlineBar.remove();
  }
}

// Verificar estado de conexión al cargar
if (!navigator.onLine) {
  showOfflineNotification();
}

// Script adicional para mejorar experiencia en móviles
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir comportamiento por defecto en toques
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('option') || 
            e.target.classList.contains('nav-btn') ||
            e.target.classList.contains('start-btn')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Detectar si es móvil y agregar clase al body
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile-device');
    }
    
    // Asegurar que las opciones sean seleccionables
    setTimeout(function() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.cursor = 'pointer';
            option.style.userSelect = 'none';
            option.style.webkitUserSelect = 'none';
            option.style.msUserSelect = 'none';
        });
    }, 100);
});

// Detectar móvil y ajustar comportamiento
function initMobileOptimizations() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log("Dispositivo móvil detectado, aplicando optimizaciones");
        
        // Agregar clase específica para CSS
        document.body.classList.add('mobile-device');
        
        // Mejorar botones de navegación
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.style.userSelect = 'none';
            btn.style.webkitUserSelect = 'none';
            btn.style.msUserSelect = 'none';
            
            // Prevenir comportamiento por defecto del navegador en toques largos
            btn.addEventListener('contextmenu', function(e) {
                if (isMobile) {
                    e.preventDefault();
                    return false;
                }
            });
        });
        
        // Asegurar que los botones sean visibles y accesibles
        setTimeout(() => {
            const footer = document.querySelector('.quiz-footer');
            if (footer) {
                footer.style.position = 'relative';
                footer.style.zIndex = '100';
                footer.style.padding = '20px 0';
                footer.style.marginTop = '30px';
            }
        }, 500);
    }
}

// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initMobileOptimizations();
    
    // ... resto del código existente ...
});
