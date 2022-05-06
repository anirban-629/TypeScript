"use strict";
let a = 45;
let b = 75;
let c = 10.583496307;
let e = 211111111121n;
let num6 = 0x37cf;
let num7 = 0o37234;
let num8 = 0b1101;
// console.log()
// toExponential
console.log('myNumber:', c.toExponential());
console.log('myNumber:', c.toExponential(1));
console.log('myNumber:', c.toExponential(2));
console.log('myNumber:', c.toExponential(3));
// toFixed()
console.log('myNumber:', c.toFixed());
console.log('myNumber:', c.toFixed(1));
console.log('myNumber:', c.toFixed(2));
console.log('myNumber:', c.toFixed(3));
// toPrecision()
console.log('myNumber:', c.toPrecision());
console.log('myNumber:', c.toPrecision(1));
console.log('myNumber:', c.toPrecision(2));
console.log('myNumber:', c.toPrecision(3));
// toLocaleString()
console.log('myNumber:', c.toLocaleString('bn-in'));
console.log('myNumber:', c.toLocaleString('ar-in'));
// Methods
// tostring()
let n1 = 100;
console.log(n1.toString());
console.log(n1.toString(2));
console.log(n1.toString(3));
console.log(n1.toString(4));
console.log(n1.toString(5));
console.log(n1.toString(6));
console.log(n1.toString(7));
console.log(n1.toString(8));
console.log(n1.toString(16));
// valueOf()
console.log(n1); // Directly calling variables 
console.log(n1.valueOf()); // Directly calling value of the variables
// Property
// MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 10);
// MIN_VALUE
console.log(Number.MIN_VALUE);
// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1); //Accuracy low
console.log(Number.MAX_SAFE_INTEGER + 2); //Accuracy low
console.log(Number.MAX_SAFE_INTEGER + 3); //Accuracy low
// MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);
// isSafeInteger
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// EPSILON
console.log(Number.EPSILON);
console.log(0.1 + 0.2);
console.log(0.2 + 0.7);
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 == 0.30000000000000004);
// Create Infinity
console.log(Math.pow(10, 1000));
console.log(Infinity + 1);
console.log(Infinity - 1);
console.log(Infinity * 1);
console.log(Infinity / 1);
console.log(Infinity + Infinity);
console.log(Infinity - Infinity);
console.log(Infinity * Infinity);
console.log(Infinity / Infinity);
// NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
console.log(-3 / 0);
// POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);
console.log(3 / 0);
console.log(Infinity > 1000);
console.log(Infinity == 1000);
console.log(Infinity < 1000);
console.log(-Infinity > 1000);
console.log(-Infinity == 1000);
console.log(-Infinity < 1000);
console.log(Infinity > -Infinity);
console.log(Infinity == Infinity);
console.log(Number.isFinite(Number.POSITIVE_INFINITY));
console.log(Number.isFinite(100));
console.log(Number.isFinite('100'));
// NaN -> (Not a Number)
console.log(0 / 0);
console.log(Number('Anirban'));
// prototype
