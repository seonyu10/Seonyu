document.addEventListener("DOMContentLoaded", function () {
  window.sr = ScrollReveal();
  sr.reveal('.reveal');
});


var num = 1;

function gallery(num) {
  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "../imgs/bee_img_" + num + ".png");
}



