//Camera
$(document).on("click", "#camera", function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality:50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
  });

  function onSuccess(imageURI) {
    var image = document.getElementById("image");
    image.src = imageURI;
  }

  function onFail(message) {
    navigator.notification.alert("Failed because: " + message);
  }
});
$(document).on("change", "#opacidade", function(){
  var vlo = window.document.getElementById('opacidade');
  var vl1 = Number(vlo.value);
var a = window.document.getElementById('image'); 
  a.style.filter = `opacity(${vl1}%)`; 
});
$(document).on("change", "#saturacao", function(){
  var valor = window.document.getElementById('saturacao');
  var vl2 = Number(valor.value);
var b = window.document.getElementById('image'); 
  b.style.filter = `saturate(${vl2}%)`;

});
$(document).on("change", "#escala", function(){
  var vlr = window.document.getElementById('escala');
  var vl3 = Number(vlr.value);
var c = window.document.getElementById('image'); 
  c.style.filter = `grayscale(${vl3}%)`;

});
$(document).on("change", "#desfoque", function(){
  var a = window.document.getElementById('desfoque');
  var vl4 = Number(a.value);
var d = window.document.getElementById('image'); 
  d.style.filter = `blur(${vl4}px)`;
});