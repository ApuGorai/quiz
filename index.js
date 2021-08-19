if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  var intervalId = window.setInterval(function() {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User Download WB 3schools');
      } else {
        console.log('User will download WB 3schools');
      }
      deferredPrompt = null;
    });
  }, 5000);   
}); 


function darkMode() {
   var elementD = document.body;
   elementD.classList.toggle("dark-mode");
} 

function search(string){
 window.find(string);
 }

function share() {
    var text = 'Ask 3schools';
    if ('share' in navigator) {
        navigator.share({
            title: document.title,
            text: text,
            url: location.href,
        })
    } else {
        location.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text + ' - ') + location.href
    }
}   
