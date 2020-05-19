huiswerkMaken = (vak, callback) => {
    setTimeout(function () {
        console.log(`Okee, okee, ik ga nu mijn ${vak} huiswerk maken!`);
        callback()
    }, 5000);
}

klaarMetHuiswerk = () => {
    console.log("Kijk ouder-units, ik ben klaar met huiswerk! Bleep bloop!");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);