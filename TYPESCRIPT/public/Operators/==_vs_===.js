"use strict";
let on1 = 10;
let on2 = 10;
let on3 = '10';
let on4 = '10';
let on5 = 20;
// ==
console.log(on1 == on3);
console.log(on1 == on2);
console.log(on1 == on5);
// ===
console.log(on1 === on3);
console.log(on1 === on2);
console.log(on1 === on5);
// *
console.log(NaN == NaN);
console.log(-0 == 0);
// *
console.log(null == null);
console.log(null == undefined);
console.log(undefined == undefined);
console.log(Infinity == Infinity);
// != and !==
let on6 = 10;
let on7 = 10;
console.log(on6 != on7);
console.log(on6 !== on7);