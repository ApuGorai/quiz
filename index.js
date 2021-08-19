if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
const addBtn = document.querySelector('.addbtn');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  addBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User Download WB 3schools');
      } else {
        console.log('User will download WB 3schools');
      }
      deferredPrompt = null;
    });
  });
}); 

function darkMode() {
   var elementD = document.body;
   elementD.classList.toggle("dark-mode");
} 

function search(string){
 window.find(string);
 }
