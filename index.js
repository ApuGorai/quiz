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

var loadFile = function(event) {
 var reader = new FileReader();
 reader.onload = function(){
 var output = document.getElementById('uImg');
 output.value = reader.result;
 };
 reader.readAsDataURL(event.target.files[0]);
 
 };

function addUser(){
 var uN = document.getElementById("uN").value;
 var uImg= document.getElementById("uImg").value;
 
 localStorage.setItem("userName", uN);
 localStorage.setItem("userPic", uImg);
 
 document.getElementById("uC").style.display="none";
 userPic();
 }
 
 function userPic(){
  var userName = localStorage.getItem("userName");
  var userImg = localStorage.getItem("userPic");
  if(userName != null){
  document.getElementById("userN").innerHTML= userName;
  document.getElementById("userImg").src= userImg;
  document.getElementById("uC").style.display="none";
  }
  
  }
  
 userPic();
