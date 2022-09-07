'use strict';

// const nav = document.querySelector('.nav')
// fetch('../homeComponents/nav.html')
//   .then(res => res.text())
//   .then(data => {
//     nav.innerHTML = data;
//     const parser = new DOMParser();
//     const doca = parser.parseFromString(data, 'text/html')
//     eval(doca.querySelector('script').textContent);
//     // document.documentElement.scrollTop = 0;
//   });

function clickFun(key){
  const character = document.querySelector(".character");
  const block = document.querySelector(".block");
  
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

  let s =  0;

  let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    if(key === "ArrowRight" && characterLeft<480 ){
        let b = 10;
        characterLeft = characterLeft + b;
        character.style.left = characterLeft + "px";
    console.log(characterLeft);
    }
    else if(key === "ArrowLeft" && characterLeft>0 ){
      let b = 10;
      characterLeft = characterLeft  - b;
      character.style.left = characterLeft + "px";
      console.log(characterLeft);
    }
    else if(key === "ArrowDown" && characterTop<470){
      let b = 10;
      characterTop = characterTop  + b;
      character.style.top = characterTop + "px";
    }
    else if(key === "ArrowUp" && characterTop>0){
      let b = 10;
      characterTop = characterTop  - b;
      character.style.top = characterTop + "px";
    }
    console.log(key);

}
let keyname = window.addEventListener('keydown',(event) => {
  
  clickFun(event.key);
})