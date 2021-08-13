(function () {
    document.addEventListener('DOMContentLoaded', function(event) {      
      if (!navigator.onLine) {
        checkConnectivity();
      }
      window.addEventListener('online', checkConnectivity, false);
      window.addEventListener('offline', checkConnectivity, false);
    });    
    function checkConnectivity() {
      
      if (navigator.onLine) {
        navigator.serviceWorker.ready
        .then(function (registration) {
          registration.showNotification('You are back online.')
        });        
      }
      else {
        navigator.serviceWorker.ready
        .then(function (registration) {
          registration.showNotification('Network connection lost.')
        });
      }
    }
  })();
