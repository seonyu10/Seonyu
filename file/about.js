document.addEventListener("DOMContentLoaded", function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.intro');

});


let $sun = $(".sun");

let sunRise = function () {
    TweenMax.fromTo($sun, 3, { autoAlpha: 0 }, { autoAlpha: 1 });
    new TweenMax($sun, 2, { y: -140 });
    new TweenMax($sun, 2, {}).delay(2);
}

sunRise();



let sunAnimation = function () {
    $sun.on("mouseenter", function () {
        TweenMax.to($(this), 0.6, {
            scale: 1.2,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.7)
        });
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