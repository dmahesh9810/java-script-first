'use strict';

const nav = document.querySelector('.nav')
fetch('../homeComponents/nav.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
    const parser = new DOMParser();
    const doca = parser.parseFromString(data, 'text/html')
    eval(doca.querySelector('script').textContent);
    // document.documentElement.scrollTop = 0;
  });

var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
        block.style.animation = "block 2s infinite linear";
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

let keyname = window.addEventListener('keydown',(event) => {
    if(event.key === "ArrowUp"){
        jump();
    }
})

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<50 && blockLeft > 0 && characterTop>= 130){
        block.style.animation = "none";
        alert("Game over ☹");
        
    }
},10)


