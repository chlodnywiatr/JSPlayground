//Primitive types and objects;

//Primitive types are immutable;
const PRIMITIVES = ["string", "number", "boolean", "null", "undefined", "symbol"];
const BUILTIN_OBJECTS = ["Array", "Date", "RegExp", "Map", "WeakMap", "Set", "WeakSet"];

//Primitive types: number, string, boolean object types Number, String, Boolean;
//=== number, string, boolean store values;
//=== Number, String, Boolean provides additional functionality;

let sumOfTwoNumbers = 0.1 + 0.2;
console.log(sumOfTwoNumbers); // 0.30000000000000004;

//Double-precision floating-point numbers;

const INF = Infinity;
const NINF = -Infinity;
console.log(typeof INF, typeof NINF);

const NAN = NaN;
console.log(typeof NAN); //returns NaN;

const NUMBER_NAN = Number.NaN;
console.log(typeof NUMBER_NAN); //returns number;

const MIN = Number.MIN_VALUE;
console.log(MIN);

// tip#2 use template strings (backticks);
let action = "scream";
let message = `
I have no mouth,
but I must ${action}.
`;
console.log(message);

//Symbols are unique primitiives;
const BANANA = Symbol("banana");
const FRUIT = Symbol("banana");
console.log(BANANA === FRUIT); //returns false;

const APPLE = "apple";
const OTHER_FRUIT = "apple";
console.log(APPLE === OTHER_FRUIT); //returns true;

// tip#3 use null instead of undefined;
// Assume that:;
// null => previously had a value;
// undefined => never had a value before, never initialized;

let me = {
  "name": "Wojtek",
  yearOfBirth: "1997",
}
console.log(`I am ${me.name} and I was born in ${me["yearOfBirth"]}.`);

const YOU = "Ty";
YOU.imie = "Miłosz"; // no error, because JS is creating temporary String object;
// It vanishes in the end of statement;
console.log(YOU.imie); //returns undefined;

const FIRST_ARRAY = [1, 2, 3, "four"];
console.log(typeof FIRST_ARRAY); //returns object;

const SECOND_ARRAY = new Array("1", "2", "3", 4);
console.log(typeof SECOND_ARRAY); //returns object as well;

// In JS objects are containers for key/value pairs
console.log(SECOND_ARRAY["0"]);

let currentTime = new Date();

const currency = "15 PLN"
console.log(parseInt(currency, 10));
