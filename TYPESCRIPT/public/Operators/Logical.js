"use strict";
//The Logical operators operate on a set of operands and return one of the operands as a return value. It is typically used on boolean operands, in which case the return value is a boolean. If the operands and not boolean values, then logical operators may return a non-boolean value. The Typescript has four logical operators. They are AND (&& ), OR ( || ) , NOT (!) & Nullish coalescing operator (??).
Object.defineProperty(exports, "__esModule", { value: true });
//|| (OR)
let a = 10;
let b = 15;
console.log(a > 5 || b > 5); //true
console.log(a > 5 || b < 5); //true although the b < 5 is false
let strVar = 'Hello';
let numVar = 100;
console.log(strVar || numVar); //Hello
console.log(numVar || strVar); //100
let option1, option2, option3;
// option1=10;
console.log(option1 || option2 || option3); //Default
console.log(option1 || option2 || option3 || 'Default'); //Default
option3 = 'option3';
console.log(option1 || option2 || option3 || 'Default'); //option3
console.log(a > 5 || b > 5 || b < a || a + b < 20); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true
console.log(false || false); //false
//&& (AND)
// let a: number = 10;
// let b: number = 15;
// let strVar: string = 'Hello';
// let numVar: number = 100;
console.log(a > 5 && b > 5); //true
console.log(a > 5 && b < 5); //false
console.log(strVar && numVar); //100
console.log(numVar && strVar); //Hello
console.log(option1 && option2 && option3); //undefined
console.log(option1 && option2 && option3 && 'Default'); //undefined
option1 = 'option1';
option2 = 'option2';
option3 = 'option3';
console.log(option1 && option2 && option3); //option3
console.log(true && false); //false
console.log(false && true); //false
console.log(true && true); //true
console.log(false && false); //false
//! (NOT)
console.log(!true); // false
console.log(!0); // true
///////////
console.log(!'a'); //false
console.log(!!'a'); //true
///////////
console.log(Boolean('k')); //true
console.log(true || false); //false alert is never evaluated
console.log(false || false);
//AND & OR together
// ( ) Parenthesis or Grouping
// ! Logical NOT
// == Equality
// != Not equal
// === Strict Equality
// !== Not strict Equal
// && logical AND
// || Logical OR
// ?? Nullish coalescing operator
console.log(true || (false && false));
console.log((true || false) && false);
