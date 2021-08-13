window.addEventListener('load', function() {
  var status = document.getElementById("status");
  window.addEventListener('online',  function(){
  
  alert("you are online");
  });
  function offlinea(){
  alert("you are offline");
  }
  window.addEventListener('offline', offlinea);
});
