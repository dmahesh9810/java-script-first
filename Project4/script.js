'use strict';

let a = document.querySelector('.a');

var para = document.createElement('h1');
var node = document.createTextNode('Tutorix is the best e-learning platform');
para.appendChild(node);
var element = document.getElementById('new');
para.style.color = 'red';
element.appendChild(para);
