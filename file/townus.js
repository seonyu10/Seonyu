let $room01a = $("#room01-component-a");
let $room01b = $("#room01-component-b");
let $room01c = $("#room01-component-c");

let $room02a = $("#room02-component-a");
let $room02b = $("#room02-component-b");
let $room02c = $("#room02-component-c");

let $room03a = $("#room03-component-a");
let $room03b = $("#room03-component-b");
let $room03c = $("#room03-component-c");

let $layoutImg = $(".layout-img");

let animation01 = function() {
  $room01a.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room01a.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation01();

let animation02 = function() {
  $room02a.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room02a.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation02();

let animation03 = function() {
  $room03a.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02a, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room03a.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02a, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation03();

///

let animation04 = function() {
  $room01b.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room01b.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation04();

///

let animation05 = function() {
  $room02b.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room02b.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation05();

///

let animation06 = function() {
  $room03b.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02b, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room03b.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02b, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation06();

///

let animation07 = function() {
  $room01c.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room01c.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation07();

let animation08 = function() {
  $room02c.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room03c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room02c.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room03c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation08();

let animation09 = function() {
  $room03c.on("mouseenter", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room01c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
    TweenMax.to($room02c, 0.6, {
      scale: 1.1,
      opacity: 1,
      ease: Elastic.easeOut.config(1, 0.7)
    });
  });

  $room03c.on("mouseleave", function() {
    TweenMax.to($(this), 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room01c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
    TweenMax.to($room02c, 0.6, {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut
    });
  });
};

animation09();
