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