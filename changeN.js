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

(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
                /**
                 * Notifying the user with a sample notification
                 * Can be a greeting :)
                 */
                registration.showNotification("Sample Push Notification.")
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                        /**
                        * Notifying the user with a sample notification
                        * Can be a greeting :)
                        */
                        registration.showNotification("Sample Push Notification.")
                    });
            }
        });
    }
})();
