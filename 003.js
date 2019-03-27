// Expressions and operators

// Expression is something that results in a values
// Operator is something I do to produce a value

y = x = 3 * 2;
y = x = 6; // x = undefined; y = undefined;
y = 6; // x = 6; y = undefined;
6;

const FIVE_CHAR = "5";
let sum = 10 + FIVE_CHAR;
console.log(sum);

sum = 10 + +FIVE_CHAR;
console.log(sum); // unary plus is evaluated first;

const firstNumber = 4;
const secondNumber = "4";

firstNumber === secondNumber // false;
firstNumber == secondNumber // true;
firstNumber == Number(secondNumber); // true; secondNumber become primitive type number;

console.log(Number.EPSILON); /* number that represents the difference
required for two numbers to be considered distinct */

let n = 0;
while(true){
  n += 0.1;
  if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

// Values considered to be falsy;
const FALSY = [undefined, null, false, 0, NaN, ''];

const SKIP_IT = true;
let numberToIncrement = 0;
const result = SKIP_IT || numberToIncrement++;

console.log(numberToIncrement); // returns 0, because of short-circuit evaluation;
