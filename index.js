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


displayClock();
displayDates();
function displayClock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var wel;
if (hour < 12)
        wel = 'Good Morning';
    else if (hour >= 12 && hour <= 17)
        wel = 'Good Afternoon';
    else if (hour >= 17 && hour <= 19)
        wel = 'Good Evening';
    else if (hour >= 19 && hour <= 24)
        wel = 'Good Night';
    document.getElementById('welcome').innerHTML = wel ;
	
   
    if(hour < 10){ 
      document.getElementById('h').innerHTML = "0" + hour;
    }else{
     document.getElementById('h').innerHTML = hour;  
    }

    if(minute < 10){ 
      document.getElementById('m').innerHTML = "0" + minute;
    }else{
     document.getElementById('m').innerHTML = minute;  
    }

    if(second < 10){ 
      document.getElementById('s').innerHTML = "0" + second;
    }else{
     document.getElementById('s').innerHTML = second;  
    }
  window.setInterval(displayClock, 1000);
}

function displayDates(){

  var dateObj = new Date();
  var date = dateObj.getDate()
  var month = dateObj.getUTCMonth();
  var day = dateObj.getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = ["রবিবার", "সোমবার","মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

 document.getElementById('day').innerHTML = date;
 document.getElementById('month').innerHTML = monthNames[month];
 document.getElementById('dayname').innerHTML = dayName[day];
}
