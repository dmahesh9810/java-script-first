'use strict';

const nav = document.querySelector('.nav')
fetch('./components/homeComponents/nav.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
    const parser = new DOMParser();
    const doca = parser.parseFromString(data, 'text/html')
    eval(doca.querySelector('script').textContent);
    // document.documentElement.scrollTop = 0;
  });

const carosalTest = document.querySelector('.carosalPage')
fetch('./components/homeComponents/carosal.html')
  .then(res => res.text())
  .then(data => {
    carosalTest.innerHTML = data;
    const parser = new DOMParser();
    const docb = parser.parseFromString(data, 'text/html')
    eval(docb.querySelector('script').textContent);
  });
const footSS = document.querySelector('.footer')
fetch('./components/homeComponents/footer.html')
  .then(res => res.text())
  .then(data => {
    footSS.innerHTML = data; 
  });
const midContents = document.querySelector('.midcontent')
fetch('./components/homeComponents/homeContent.html')
  .then(res => res.text())
  .then(data => { 
    midContents.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    eval(doc.querySelector('script').textContent);

  });


