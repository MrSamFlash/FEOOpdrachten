/*
    DE EERSTE VERSIE WERKT GOED, MAAR ZIT TE VEEL CODE IN (VEEL DUBBELE CODE ETC.). VANDAAR DEZE POGING OM ER IETS BEKNOPTERS VAN TE MAKEN...
*/

//Menu openen

const menu = document.querySelector('.menu-list');

function openMenu() {
    menu.classList.toggle("menu-list-open");
}

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('mouseover', openMenu);
menuButton.addEventListener('mouseout', let = () => {
    menu.classList.replace('menu-list-open', 'menu-list');
})

/*
    Aangezien deze functie in alle const voor de kleuren voorkwam, heb ik hem hier los gezet. Lijkt het echter niet te doen...
*/

// function closeMenu() {
//     menu.classList.replace('menu-list-open', 'menu-list');
// }


//Kleuren veranderen
let colors = ["white", "firebrick", "orange", "purple", "green"];

const body = document.querySelector("body");

//Ik weet dat van de code-berg hieronder een loop van eventListeners gemaakt kan worden, maar ik weet nog niet helemaal hoe.

const home = document.querySelector(".home");
home.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[0];
    document.querySelector(".text").innerHTML = "Pick a color and see what happens...";
    menu.classList.replace("menu-list-open", 'menu-list');
    //closeMenu;
})

const red = document.querySelector(".red");
red.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[1];
    document.querySelector(".text").innerHTML = "Red! A good choice, comrad!";
    menu.classList.replace("menu-list-open", 'menu-list');
    //closeMenu;
})

const orange = document.querySelector(".orange");
orange.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[2];
    document.querySelector(".text").innerHTML = "Orange! A very royalist color... No good!";
    menu.classList.replace("menu-list-open", 'menu-list');
    //closeMenu;
})

const purple = document.querySelector(".purple");
purple.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[3];
    document.querySelector(".text").innerHTML = "Purple! I guess we can work with that.";
    menu.classList.replace("menu-list-open", 'menu-list');
    //closeMenu;
})

const green = document.querySelector(".green");
green.addEventListener('click', let = () => {
    body.style.backgroundColor = colors[4];
    document.querySelector(".text").innerHTML = "Green! Perfect.";
    menu.classList.replace("menu-list-open", 'menu-list');
    //closeMenu;
})


// Op een of andere manier werkt dit ook niet...
/*const listItems = document.querySelectorAll('li');
listItems.addEventListener('click', let = () => {
    menu.classList.add('menu-list');
})*/