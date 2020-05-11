/* =====================Items maken
=====================Toggle menu
=====================Kleurenlijst maken
=====================Browser events programmeren
Bonus:
=====================Naam kleur
=====================Achtergrondkleur knoppen
Radio knoppen
Event.target
Menu scroll */



//Menu openen
const menu = document.querySelector('.menu-list');

function openMenu() {
    menu.classList.toggle("menu-list-Open");
}

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', openMenu);


//Kleuren veranderen
let colors = ["white", "firebrick", "orange", "purple", "green"];

const body = document.querySelector("body");

//Vanaf hier heb ik het idee dat dit een beetje ingekort zou moeten (kunnen?) worden, omdat hier best veel dubbele code staat...

const home = document.querySelector(".home");
home.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[0];
    menu.classList.replace("menu-list-Open", 'menu-list');
    document.querySelector(".text").innerHTML = "Pick a color and see what happens...";
})

const red = document.querySelector(".red");
red.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[1];
    menu.classList.replace("menu-list-Open", 'menu-list');
    document.querySelector(".text").innerHTML = "Red! A good choice, comrad!";
    //console.log("You did it!");
})

const orange = document.querySelector(".orange");
orange.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[2];
    menu.classList.replace("menu-list-Open", 'menu-list');
    document.querySelector(".text").innerHTML = "Orange! A very royalist color... No good!";
})

const purple = document.querySelector(".purple");
purple.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[3];
    menu.classList.replace("menu-list-Open", 'menu-list');
    document.querySelector(".text").innerHTML = "Purple! I guess we can work with that.";
})

const green = document.querySelector(".green");
green.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[4];
    menu.classList.replace("menu-list-Open", 'menu-list');
    document.querySelector(".text").innerHTML = "Green! Perfect.";
})
