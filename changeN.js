(function () {
    /*
    * Registering Service Worker & listening to it's update.
    */
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register('sw.js', { scope: "./" })
      .then(function(registration) {
        console.info('Service worker registered');
        checkForUpdate(registration);
      })
      .catch(function(error) {
        console.error('Service worker registration failed ', error);
      });
    }
    function checkForUpdate(registration) {          
      registration.addEventListener("updatefound", function() {        
        if (navigator.serviceWorker.controller) {
          var installingWorker = registration.installing;
          installingWorker.onstatechange = function() {
            console.info("Service Worker State :", installingWorker.state);
            switch(installingWorker.state) {
              case 'installed':
              navigator.serviceWorker.ready
              .then(function (registration) {
                  /*
                  * Notify user to refresh the webpage.
                  */
                registration.showNotification('Site Content Updated\n Please Refresh.')
              });
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
            }
          }
        }
      });
    }
  })();

(function (window) {
  var messaging = firebase.messaging();
  navigator.serviceWorker.ready
    .then(function (registration) {
      messaging.useServiceWorker(registration)
    });
  messaging
    .requestPermission()
    .then(function () {
      console.log("Notification permission granted.");
      return messaging.getToken();
    })
    .then(function (token) {
      /**
       * Once token is recieved for the session, 
       * we are good to recieve the push notifications from firebase
       */
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });

  messaging.onMessage(function (payload) {
    navigator.serviceWorker.ready
      .then(function (registration) {
        registration.showNotification(payload.data.body)
      });
  });
})(window);


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
