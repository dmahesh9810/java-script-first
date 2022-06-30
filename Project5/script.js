const man = document.querySelector('.man');

document.onkeydown = function (event) {
  if (event.keyCode === 38) {
    console.log('Up');
    var style = man.currentStyle || window.getComputedStyle(man);
    let a = style.marginBottom;
    let b = a + 1;
    man.style.marginBottom = b + 'px';
  } else if (event.keyCode === 39) {
    console.log('right');
    var style = man.currentStyle || window.getComputedStyle(man);
    let a = style.marginLeft;
    let b = a + 1;
    man.style.marginLeft = b + 'px';
  } else if (event.keyCode === 37) {
    console.log('left');
    console.log('Up');
    var style = man.currentStyle || window.getComputedStyle(man);
    let a = 100;
    let b = a + 50;
    man.style.marginRight = b + 'px';
  } else if (event.keyCode === 40) {
    console.log('down');
  }
};
