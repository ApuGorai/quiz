(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
               
                registration.showNotification('Ask 3schools', {
          body: 'Welcome back to Ask 3schools',
          icon: '/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'Ask 3schools'
        }); 
            
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                 registration.showNotification('Ask 3schools', {
          body: 'Welcome back to Ask 3schools',
          icon: '/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'Ask 3schools'
        }); 
                    });
            }
        });
    }
})();
