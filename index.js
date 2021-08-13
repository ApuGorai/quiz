if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  addBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User Download Quiz Generator');
      } else {
        console.log('User will download Quiz Generator');
      }
      deferredPrompt = null;
    });
  });
}); 
