document.addEventListener("DOMContentLoaded", function () {
  window.sr = ScrollReveal();
  sr.reveal('.card');
  sr.reveal('.card-02');
});



let $sun = $(".sun");

let sunRise = function () {

  TweenMax.fromTo($sun, 1,
    { autoAlpha: 0 }, { autoAlpha: 1, delay: 0 });
};


sunRise();






let tapeAnim = function ($el) {
  // $el 매개변수에는 $('.tape')이 담겨져 왔음.
  // $el = $('.tape')

  // 모든 .tape 요소에 cover라는 div를 추가함.
  $el.append("<div class='cover'></div>");


  let $tape01 = $("#tape01");
  let $tape02 = $("#tape02");
  let $tape03 = $("#tape03");
  let $tape04 = $("#tape04");


  let _delay = 0;
  // 반복문 모든 .tape요소를 반복시킴
  for (let index = 0; index < $el.length; index++) {
    // 해당 요소만 선택
    let $currentElement = $el.eq(index);
    // 앞에서 append했던 .cover를 찾아둠
    let $cover = $currentElement.find('.cover');

    // 1. 테잎 들어오는 애니메이션
    // color를 투명으로 만드는 이유는 테잎이 덮이기 전에는 보이지 않기 위해서
    TweenMax.set($tape01, { color: '#FFD342', delay: _delay + 0.5 });
    TweenMax.set($tape02, { color: '#FFBA65', delay: _delay + 0.5 });
    TweenMax.set($tape03, { color: '#FF8966', delay: _delay + 0.5 });
    TweenMax.set($tape04, { color: '#E85C65', delay: _delay + 0.5 });

    TweenMax.from($cover, 1, {
      // cover의 width만큼 왼쪽에서 시작
      x: -$cover.width() - 1,
      // 순차적으로 애니메이션하기 위해 딜레이 주기 : 아래쪽에서 0.12씩 더해주고 있음.
      delay: _delay,
      ease: Expo.easeOut,
    });

    // 2. 테잎 빠지는 애니메이션
    // 1의 애니메이션 속도만큼 딜레이와 더해야 테잎이 들어온 후 color가 검정으로 바뀜.

    TweenMax.to($cover, 1, {
      // cover의 width만큼 오른쪽으로 이동
      x: $cover.width() + 1,
      // 마찬가지로 1의 애니메이션 속도와 딜레이를 더해준다
      delay: _delay + 0.5,
      ease: Power4.easeOut,
    });

    _delay += 0.18;
  }
};

tapeAnim($('.tape'));
