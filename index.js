if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('serviceWorker.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
var addBtn = document.querySelector(".addbtn");
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.addEventListener('click', school);
  var intervalId = window.setInterval(school, 5000);
  function school() {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User Download WB 3schools');
      } else {
        console.log('User will download WB 3schools');
      }
      deferredPrompt = null;
    });
    }
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
