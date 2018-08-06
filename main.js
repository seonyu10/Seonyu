let animation = function() {
  let d = 0;

  for (let index = 0; index < $(".card").length; index++) {
    let item = $(".card").eq(index);
    let image = item.find(".card-image");
    TweenMax.from(item, 0.7, {
      y: -150,
      opacity: 0,
      delay: d,
      ease: Expo.easeOut
    });
    TweenMax.from(image, 0.7, {
      y: item.width(),
      delay: d,
      ease: Expo.easeOut
    });
    d = d + 0.1;
  }
};

let attachEvent = function() {
  $(".card").on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.05,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $(".card").on("mouseleave", function() {
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
  success: function(data) {
    attachEvent(data);
    animation();
  },
  error: function(error) {
    console.log(error);
  }
});
