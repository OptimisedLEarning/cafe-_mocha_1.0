// index.js
import "./style.css"


import {home} from "./home.js";

console.log(home);

console.log('webpack is Running');





import loadHome from './home.js';
import loadMenu from "./menu.js";
import  loadContact   from  "./conatact.js"  

function switchTab(event) {
    const btnId = event.target.id;
    if (btnId === 'home-btn') loadHome();
    else if (btnId === 'menu-btn') loadMenu();
    else if (btnId === 'about-btn') loadContact();
  }
  


document.addEventListener('DOMContentLoaded', () => {
  loadHome();
  document.getElementById('home-btn').addEventListener('click' ,switchTab);
  document.getElementById('menu-btn').addEventListener('click', switchTab);
  document.getElementById('about-btn').addEventListener('click', switchTab);



});






