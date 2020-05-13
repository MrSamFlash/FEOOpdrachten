const superhelden = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

//1
const alleNamen = superhelden.map((superheld) => superheld.name);
console.log(alleNamen);

//2
const lichteHelden = superhelden.filter((superheld) => superheld.weight <= 190);
console.log(lichteHelden);

//3
const lichteHeldenNamen = superhelden.filter((superheld) => superheld.weight <= 190).map((superheld) => superheld.name);
console.log(lichteHeldenNamen);

//4
const alleComics = superhelden.map((superheld) => superheld.first_appearance);
console.log(alleComics);

//5
const DC = superhelden.filter((superheld) => superheld.publisher === "DC Comics");
console.log(DC);

const marvelComics = superhelden.filter((superheld) => superheld.publisher === "Marvel Comics");
console.log(marvelComics);

//6
const alleGewichtenDC = DC.map((superheld) => parseInt(superheld.weight));
console.log(alleGewichtenDC);
const totaalGewichtDC = alleGewichtenDC.reduce((currentTotal, number) => number + currentTotal, 0);
console.log(totaalGewichtDC);

//7
const alleGewichtenMarvel = marvelComics.map((superheld) => parseInt(superheld.weight));
//console.log(alleGewichtenMarvel);
alleGewichtenMarvel.pop("unknown");
const totaalGewichtMarvel = alleGewichtenMarvel.reduce((currentTotal, number) => number + currentTotal, 0);
console.log(totaalGewichtMarvel);

//8
const alleGewichten = superhelden.map((superheld) => parseInt(superheld.weight));
alleGewichten.pop("unknown");
console.log(alleGewichten);
console.log(Math.max.apply(Math, alleGewichten));