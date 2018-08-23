


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//----------------------//

let $sun = $(".sun");


let sunRise = function () {
    TweenMax.fromTo($sun, 3,
        { css: { bottom: "-100" } },
        {
            css: {
                bottom: "-2",
                ease: Elastic.easeOut.config(1, 0.7)
            }
        });
}

sunRise();


let $sun02 = $(".sun-02");
let $sun03 = $(".sun-03");
let $sun04 = $(".sun-04");

let sunRise02 = function () {
    TweenMax.fromTo($sun02, 2,
        { autoAlpha: 0 }, { autoAlpha: 0.8, delay: 3 });
    TweenMax.fromTo($sun03, 2,
        { autoAlpha: 0 }, { autoAlpha: 0.8, delay: 4 });
    TweenMax.fromTo($sun04, 2,
        { autoAlpha: 0 }, { autoAlpha: 0.8, delay: 5 });
}

sunRise02();


//---------------sunAnimation

let sunAnimation = function () {
    $sun.on("mouseenter", function () {
        TweenMax.to($(this), 1, {
            scale: 1.2,
            ease: Elastic.easeOut.config(1, 0.7)
        }
        );
    });


    $sun.on("mouseleave", function () {
        TweenMax.to($(this), 1, {
            scale: 1,
        });
    });
};

sunAnimation();


