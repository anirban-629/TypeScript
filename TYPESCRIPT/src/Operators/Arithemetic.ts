export{}
//"+" (Addition)
let a: number = 12;
let b: number = 2;
let c: number = a + b;
console.log(c); //14

let a1: string = 'Hello';
let b1: number = 2;
let c1: string = a1 + b1;
console.log(c1); //Hello2

let a2: string = '12';
let b2: number = 2;
let c2: string = a2 + b2; //string concatenation as the b is string
console.log(c2); //122

let a3: boolean = true; //boolean
let b3: number = 2;
let c3: number = b3 + a3; //Typescript compiler throws a warning here
console.log(c3); //3 because true is 1

let a31: boolean = false; //boolean
let b31: number = 2;
let c31: number = b31 + a31; //Typescript compiler throws a warning here
console.log(c31); //2 because false is 0

console.log(true+true+true+true);
console.log(false+false+false+false);

console.log(true-false);
console.log(false-true);

let a6: string = '1';
let b6: string = '2';
console.log(a6 - b6); //-1

let a7: string = 'Hello';
let b7: number = 2;
console.log(a7 - b7); //NaN

let a8: number = 5;
let b8: number = 2;
console.log(a8 * b8); //10

let a9: string = '5';
let b9: string = '2';
console.log(a9 * b9); //10

console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity
console.log('Hello' * 10);

console.log(10 / 2); //5
console.log(11 / 2); //5.5

console.log(6 / '3'); //2
console.log('6' / '3'); //2

console.log(6 / 'a'); //NaN
console.log(6 / '3a'); //NaN

console.log(6 / true); //6 true is 1
console.log(2 / false); //Infinity false is 0

console.log(2 / 0); //Infinity

console.log(12 % 5); //2
console.log(-12 % 5); //-2

console.log(-12 % -5); //-2
console.log(12 % -5); //2