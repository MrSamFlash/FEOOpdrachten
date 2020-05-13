const items = [
    { name: 'Bike', price: 100 },
    { name: 'Keyboard', price: 25 },
    { name: 'Television', price: 250 },
];
const numbers = [1, 2, 3];

// .filter
const filteredItems = items.filter((item) => item.price <= 100);
//(item) is de verzameling van de twee waarden tussen de {}: 'name: ...' en 'price: ...' -> samen 1 object!

console.log(items);
console.log(filteredItems);

// .map
const itemNames = items.map((item) => item.name);
console.log(itemNames);

// .find
const foundItem = items.find((item) => item.name === 'Bike');
console.log(foundItem);

// .forEach
items.forEach((item) => console.log(item.price));

// .some
const hasCheapItemsMaybe = items.some((item) => item.price <= 75);
console.log(hasCheapItemsMaybe); //true or false

// .every
const hasCheapItems = items.every((item) => item.price <= 100);
console.log(hasCheapItems); //true or false

// .reduce
const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0);
console.log(total);

// .include
const includesTwo = numbers.includes(2);
console.log(includesTwo);

