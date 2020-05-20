// Rest operator
// ... zit aan het eind van een functie (de rest van de parameters)!

function sumNumbers(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}
console.log(sumNumbers(1, 2, 3, 4, 5));

// Spread operator
// ... zit tussen haakjes in de console.log, als parameter van de functie!

let getallen = [69, 44, 8, 37]
somNumbers = (x, y, z, q) => x + y + z + q;
console.log(somNumbers(...getallen));