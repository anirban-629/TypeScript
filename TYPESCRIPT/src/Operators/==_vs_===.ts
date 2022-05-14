let on1:number=10;
let on2:number=10;
let on3:string='10';
let on4:string='10';
let on5:number=20;

// ==
console.log(on1 == on3);
console.log(on1 == on2);
console.log(on1 == on5);

// ===
console.log(on1 === on3);
console.log(on1 === on2);
console.log(on1 === on5);

// *
console.log(NaN==NaN);
console.log(-0==0);

// *
console.log(null==null);
console.log(null==undefined);
console.log(undefined==undefined);
console.log(Infinity== Infinity);

// != and !==
let on6:number=10;
let on7:number=10;

console.log(on6 != on7);
console.log(on6 !== on7);

let on8:number=10;
let on9:string='10';

console.log(on8 != on9);
console.log(on8 !== on9);

let a1: number[] = [10, 20];
let b1 = [10, 20];

console.log(a1 == b1); //false
console.log(a1 === b1); //false

let c1 = a1;
//same object
console.log(a1 === c1); //true
console.log(a1 == c1); //true

console.log('' == '0');
console.log(0 == '');
console.log(0 == '0');

console.log(false == 'false');
console.log(false == 1);
console.log(false == 0);
console.log(false == '0');

console.log(false == undefined);
console.log(false == null);
console.log(null == undefined);

////////////
console.log(' \t\r\n ' == 0);
