
function createListItem(value) {
    let list = document.querySelector("#list");
    let newItem = document.createElement("li");
    newItem.innerHTML = value
    list.appendChild(newItem);
}

//button landenlijst
const buttonCountry = document.querySelector("#country");
buttonCountry.addEventListener("click", function () {
    list.innerHTML = ' ';

    let regions = randomPersonData.map((person) => person.region);

    let setRegions = [...new Set(regions)];
    setRegions.sort();
    setRegions.forEach((region) => {
        createListItem(region);
    });
});

//button steenbok
const buttonSteenbok = document.querySelector("#steenbok");
buttonSteenbok.addEventListener("click", function () {
    list.innerHTML = ' ';

    const steenbokFilter = (person) => {
        let gebDatum = new Date(person.birthday.mdy);
        let steenbok = (gebDatum.getMonth() === 11 && gebDatum.getDate() >= 22) || (gebDatum.getMonth() === 0 && gebDatum.getDate() <= 19);
        return person.gender === "female" && person.age > 30 && steenbok;
    };

    const filterVrouwen = randomPersonData.filter((person) => {
        return steenbokFilter(person);
    });

    filterVrouwen.forEach((person) => {
        createListItem(`Dit is ${person.name} ${person.surname} en dit is haar foto: ${person.photo}`);
    })
})

// button creditcard
const buttonCreditCard = document.querySelector("#creditcard");
buttonCreditCard.addEventListener("click", function () {
    list.innerHTML = ' ';

    const almostOut = (person) => {
        const year = new Date(parseInt(person.credit_card.expiration));
        const expired = year.getFullYear() === 2021;
        return person.credit_card.expiration = expired;
    }

    console.log(almostOut());
    almostOut().forEach((person) => {
        createListItem(`Dit is ${person.name} ${person.surname}, te bereiken op ${person.phone}, inzake creditcard ${person.credit_card.number} met vervaldatum ${person.credit_card.expiration}`);
    })
})

