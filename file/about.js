document.addEventListener("DOMContentLoaded", function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.intro');

});

let $sun = $(".sun");



let sunRise = function () {



}


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


TweenMax.set($('.circle'), { opacity: 0 });
TweenMax.staggerTo($('.circle'), 5, { opacity: 1 }, 0.1);

$('.circle').click(function () {

    TweenMax.staggerTo($('.circle'), 1, { y: -700 }, 0.1);
});



