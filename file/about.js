document.addEventListener("DOMContentLoaded", function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.intro');

});


let $sun = $(".sun");
let $sun02 = $(".sun-02");

let sunRise = function () {
    TweenMax.fromTo($sun, 1, { autoAlpha: 0 }, { autoAlpha: 1 });
    new TweenMax($sun, 2, { y: -140 });
    new TweenMax($sun, 2, {
        ease: Elastic.easeOut.config(1, 0.7)
    }).delay(4);
    TweenMax.fromTo($sun02, 10, { autoAlpha: 0 }, { autoAlpha: 0.6 });
}

sunRise();



let sunAnimation = function () {
    $sun.on("mouseenter", function () {
        TweenMax.to($(this), 0.6, {
            scale: 1.2,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.7)
        }
        );
    });


    $sun.on("mouseleave", function () {
        TweenMax.to($(this), 0.6, {
            scale: 1,
            opacity: 0.8,
            ease: Power2.easeOut
        });
    });
};

sunAnimation();
