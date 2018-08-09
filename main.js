document.addEventListener("DOMContentLoaded", function () {
  window.sr = ScrollReveal();
  sr.reveal('.card');

});

let attachEvent = function () {
  $(".card").on("mouseenter", function () {
    TweenMax.to($(this), 0.6, {
      scale: 1.05,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $(".card").on("mouseleave", function () {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

$.ajax({
  type: "GET",
  dataType: "jsonp",
  url:
    "https://api.behance.net/v2/users/seonyu10/projects?client_id=ADC7ff9sfVnDp8uUxdQdK50eLgYyxSZp",
  success: function (data) {
    attachEvent(data);
    animation();
  },
  error: function (error) {
    console.log(error);
  }
});


