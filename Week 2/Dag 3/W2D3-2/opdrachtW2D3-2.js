//A
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B
const amountOfElementsInArray = function (array) {
    return array.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C
const selectBelgiumFromBenelux = (array) => {
    return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D
const lastElementInArray = (array) => {
    return array.pop();
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    let newArray = array.slice(1, 4);
    console.log(newArray, "en de oude array", array);
    return newArray;
}
const impeachTrumpSplice = function (array) {
    let removedElement = array.splice(0, 1);
    console.log(removedElement, "en de nieuwe array zonder Trump,", array)
    return array; //niet newArray, want dat is "removedElement" al!
}

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

//F
const stringsTogether = (array) => {
    return array.join(" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));

//G
const combineArrays = (array1, array2) => {
    return array1.concat(array2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
