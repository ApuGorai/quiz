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
         registration.showNotification('You are back online', {
          body: 'Page is ready to view',
          icon: '/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'You are back online',
          url: 'https://ask.3schools.in'
             
        }); 
        });        
      }
      else {
        navigator.serviceWorker.ready
        .then(function (registration) {
          registration.showNotification('No Internet', {
          body: 'Ask 3schools will let you know when this page is ready',
          icon: '/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'No Internet'
        }); 
        });
      }
    }
  })();
