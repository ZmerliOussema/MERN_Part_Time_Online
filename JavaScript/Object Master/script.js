const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// An array of pokémon objects where the id is evenly divisible by 3
const idDivBy3 = pokémon.filter(val => val.id % 3 === 0);
console.log(idDivBy3);

// An array of pokémon objects that are "fire" type
const pkmFire = pokémon.filter(val => val.types.includes("fire"));
console.log(pkmFire);

// An array of pokémon objects that have more than one type
const pkmMoreOneType = pokémon.filter(val => val.types.length >= 2);
console.log(pkmMoreOneType);

// An array with just the names of the pokémon
const pkmNames = pokémon.map(name => name.name);
console.log(pkmNames);

// An array with just the names of pokémon with an id greater than 99
const pkmGreat99 = pokémon.filter(id => id.id > 99).map(name => name.name);
console.log(pkmGreat99);

// An array with just the names of the pokémon whose only type is poison
const pkmPoison = pokémon.filter(type => type.types == "poison").map(name => name.name);
console.log(pkmPoison);

// An array containing just the first type of all the pokémon whose second type is "flying"
const pkmSecTypeFlying = pokémon.filter(type => type.types.includes("flying")).map(type => type.types[0]);
console.log(pkmSecTypeFlying);

// A count of the number of pokémon that are "normal" type
const countPkmNormal = pokémon.filter(type => type.types.includes("normal")).length;
console.log(countPkmNormal);