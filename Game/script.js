'use strict';
const toggleBtn = document.querySelector('.toggele_btn');
const navItemContent = document.querySelector('.nav_item_content');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');

const sec = document.querySelector('.watch_sec');
const min = document.querySelector('.watch_min');
const hr = document.querySelector('.watch_hr');
let clickToggle = false;
const toggleCLick = toggleBtn.addEventListener('click', function () {
  if (clickToggle === false) {
    navItemContent.style.display = 'block';
    clickToggle = true;
  } else {
    navItemContent.style.display = 'none';
    clickToggle = false;
  }
});

function reportWindowSize() {
  if (window.innerWidth >= 600) {
    navItemContent.style.display = 'inline';
    clickToggle = false;
  } else {
    navItemContent.style.display = 'none';
    clickToggle = false;
  }
}
let zindex = true;
setInterval(function () {
  if (zindex === true) {
    image1.style.zIndex = 1;
    image1.style.opacity = 0;
    image2.style.opacity = 1;
    image1.style.transition = 'opacity 5s';
    image2.style.transition = 'opacity 5s';
    zindex = false;
  } else {
    image1.style.zIndex = 2;
    image1.style.opacity = 1;
    image2.style.opacity = 0;
    image1.style.transition = 'opacity 5s';
    image2.style.transition = 'opacity 5s';
    zindex = true;
  }
}, 5500);

setInterval(function () {
  let today = new Date();
  let timeSec = today.getSeconds();
  let timeMin = today.getMinutes();
  let timeHr = today.getHours();

  sec.style.transform = 'rotate(' + timeSec * 6 + 'deg)';
  min.style.transform = 'rotate(' + timeMin * 6 + 'deg)';
  let getHrTime = null;
  switch (timeHr) {
    case 1:
      getHrTime = 30;
      break;
    case 2:
      getHrTime = 60;
      break;
    case 3:
      getHrTime = 90;
      break;
    case 4:
      getHrTime = 120;
      break;
    case 5:
      getHrTime = 150;
      break;
    case 6:
      getHrTime = 180;
      break;
    case 7:
      getHrTime = 210;
      break;
    case 8:
      getHrTime = 240;
      break;
    case 9:
      getHrTime = 270;
      break;
    case 10:
      getHrTime = 300;
      break;
    case 11:
      getHrTime = 330;
      break;
    case 12:
      getHrTime = 0;
      break;
    case 0:
      getHrTime = 0;
      break;
    default:
      getHrTime = 0;
      break;
  }
  hr.style.transform = 'rotate(' + getHrTime + 'deg)';
  console.log(timeHr);
}, 1000);

window.addEventListener('resize', reportWindowSize);
