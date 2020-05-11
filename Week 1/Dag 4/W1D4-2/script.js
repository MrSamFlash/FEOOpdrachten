
let button = document.querySelector('#mybutton');
button.addEventListener('click', let = (e) => {
    alert('Button clicked!');
    console.log(e.target);
    console.log(e);
})

let background = document.querySelector('.blue-background');
let changeColor = document.querySelector('#colorbutton');
changeColor.addEventListener('click', let = () => {
    background.classList.toggle("red-background");
})