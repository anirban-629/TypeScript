"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//"+" (Addition)
let a = 12;
let b = 2;
let c = a + b;
console.log(c); //14
let a1 = 'Hello';
let b1 = 2;
let c1 = a1 + b1;
console.log(c1); //Hello2
let a2 = '12';
let b2 = 2;
let c2 = a2 + b2; //string concatenation as the b is string
console.log(c2); //122
let a3 = true; //boolean
let b3 = 2;
let c3 = b3 + a3; //Typescript compiler throws a warning here
console.log(c3); //3 because true is 1
let a31 = false; //boolean
let b31 = 2;
let c31 = b31 + a31; //Typescript compiler throws a warning here
console.log(c31); //2 because false is 0
console.log(true + true + true + true);
console.log(false + false + false + false);
console.log(true - false);
console.log(false - true);
let a6 = '1';
let b6 = '2';
console.log(a6 - b6); //-1
let a7 = 'Hello';
let b7 = 2;
console.log(a7 - b7); //NaN
let a8 = 5;
let b8 = 2;
console.log(a8 * b8); //10
let a9 = '5';
let b9 = '2';
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
