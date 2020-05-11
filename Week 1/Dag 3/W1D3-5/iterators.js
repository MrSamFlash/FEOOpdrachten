let colors = ['yellow', 'blue', 'red', 'orange'];
let teller = 0;

/* while (teller < colors.length) {
    console.log(colors[teller]);
    console.log(teller);
    teller++;
} */

/* for (teller <= 3; teller = 0; teller++) {
    console.log(colors[teller]);
    console.log(teller);
} */

colors.forEach(Element => console.log(Element));

// 1. While loop: 5 regels
// 2. forEach: 1 regel
// 3. Een array method verhoogt leesbaarheid en codeergemak!
// 4. 

let person = {
    name: "Sam",
    age: 26,
    height: 182,
    weight: 76,
    hair: 'brown'
}

for (let prop in person) {
    //console.log(prop);
    //console.log(person[prop])
    console.log(prop + " : " + person[prop]);
}
