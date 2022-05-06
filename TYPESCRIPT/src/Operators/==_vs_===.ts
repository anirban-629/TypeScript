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
console.log(Infinity==Infinity);

// != and !==
let on6:number=10;
let on7:number=10;

console.log(on6 != on7);
console.log(on6 !== on7);