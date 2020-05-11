const name = 'Sarah';
const age = 26;
const isFemale = true;
const driverStatus = 'b0b';
const totalAmount = 30;

if (age >= 18 && isFemale) {
    console.log("Welkom! Treed binnen, jongedame!");
} else {
    console.log("Helaas! U wordt verzocht buiten te blijven.");
}

if (driverStatus == 'bob') {
    console.log("Rij veilig!");
} else {
    console.log("Rij mee met uw bob!");
}

if (age >= 18 && age <= 25) {
    console.log('U krijgt 50% korting, geluksvogel!');
} else {
    console.log('Helaas geen korting vandaag.');
}

if (name == 'Bram' || name == "Sarah") {
    console.log("Gefeliciteerd! Een gratis biertje van ons voor u.");
} else {
    console.log("Fijne onjaardag!");
}

if (totalAmount > 100) {
    console.log("Vier ons feest mee met uw gratis fles Château Winque. Santé!");
} else if (totalAmount > 50) {
    console.log("Geniet van uw gratis nachoschotel. Mañana!");
} else if (totalAmount > 25) {
    console.log("Geniet van uw gratis (vega)bitterballen!");
} else {
    console.log("Bedankt voor uw bezoek en tot ziens!")
}