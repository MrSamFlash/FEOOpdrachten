// Aantal beurten
let turns = 5;

//Naam
let name = prompt("Wat is uw naam, vreemdeling?", ["Vul hier uw naam in!"]);

//Welkom
alert("Welkom " + name + ". Bent u er klaar voor?");

while (turns > 0) {
    //Nummer raden
    let numYou = prompt("Ik heb een getal in mijn hoofd tussen 0 en 25... Wat denkt u dat het is?", []);
    parseInt(numYou);

    let numCom = Math.round(Math.random * 25);
    // let numCom = 8;

    if (numYou == numCom) {
        alert("Gefelicteerd, u heeft gewonnen!");
        break;
    } else {
        turns--;
        alert("Helaas! U bent niet slimmer dan de computer! U heeft nog " + turns + " beurten over!");
        let again = confirm("Wilt u het nog eens proberen?");
        if (again == false) {
            break;
        }
    };

}
if (turns == 0) {
    alert("Helaas! U heeft het nummer niet kunnen raden...")
}

alert("Bedankt voor het spelen " + name + ". Tot ziens!");


