//A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]
const findSpiderMan = superheroes.find((superhero) => superhero.name === "Spiderman");
console.log("Find Spiderman:", findSpiderMan);

//B
/* const numbers = [1, 2, 3];
let doubleArrayValues = numbers.map(number => {
    return number * 2;
});
console.log(doubleArrayValues); */

//C
const numbers = [1, 4, 3, 6, 9, 7, 10];
let containsNumberBiggerThan10 = numbers.some((item) => item >= 10);
console.log("Hier zit een getal hoger dan 10 in:", containsNumberBiggerThan10);

//D
const great7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = great7.includes("Italy");
console.log("Italië zit in de Great 7:", isItalyInTheGreat7);

//E
const numbersToTenfold = [1, 4, 3, 6, 9, 7, 11];

const tenFolder = (numbersToTenfold) => {
    let tenFoldedNumbers = [];
    numbersToTenfold.forEach(number => {
        tenFoldedNumbers.push(number * 10);
    });
    return tenFoldedNumbers;
};
console.log(tenFolder(numbersToTenfold));

//F
function isBelow100(array) {
    return array.every(number => {
        return number <= 100;
    });
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));

//G
const bigSum = function (array) {
    return array.reduce((currentValue, number) => {
        return number + currentValue;
    });
};
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));


