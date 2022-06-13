const Acandle = document.querySelector('.Acandle');
const Bcandle = document.querySelector('.Bcandle');
const Aclick = document.querySelector('.Aclick');
const A = document.querySelector('.a');

// const PlayerClick = Aclick.addEventListener('click', function () {
//   Acandle.style.height = '50px';
// });

// function AcandleAuto() {

// }

// AcandleAuto();

let a = 10;
setInterval(function () {
  a = a + Math.floor((Math.random() * 3) + -5);
  if (a >= 0) {
    Acandle.style.height = a + 'px';
  } else {
    Bcandle.style.height = Math.abs(a) + 'px';
  }
  A.innerHTML = a;
}, 1000);
