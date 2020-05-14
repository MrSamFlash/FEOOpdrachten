const buttonList = document.getElementsByClassName("big-five-list")[0];
const buttonItems = Array.from(buttonList.querySelectorAll(".big-five-list-item button"));
const spottedList = document.getElementById("spotted-animals-list");

//Deel 1
buttonList.addEventListener('click', function (e) {
    let value = e.target.textContent;
    const newItem = document.createElement("li");
    newItem.classList.add("spotted-animals-list-item");
    newItem.innerHTML = value;
    spottedList.appendChild(newItem);
});

//Deel 2
const removeFirstButton = document.getElementById("remove-first-item-button");
removeFirstButton.addEventListener('click', function () {
    spottedList.removeChild(spottedList.childNodes[0]);
});

//Deel 3
//Simpele
// const removeAllButton = document.getElementById("remove-all-button");
// removeAllButton.addEventListener('click', function () {
//     spottedList.innerHTML = " ";
// });

//Chique
const removeAllButton = document.getElementById("remove-all-button");
removeAllButton.addEventListener('click', function () {
    while (spottedList.firstChild) {
        spottedList.removeChild(spottedList.firstChild);
    }
});