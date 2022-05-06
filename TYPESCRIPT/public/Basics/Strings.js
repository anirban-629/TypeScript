"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let g = 'Anirban';
console.log(g);
let name1 = 'Anirban';
console.log(`name is ${name1}`);
let StudentName = 'Anirban';
let StudentDept = 'CSE';
//before ES6
let outcome1 = StudentName + ' Study in the ' + StudentDept + ' Dept';
console.log(outcome1);
//After ES6
let outcome2 = `${StudentName}  Study in the ${StudentDept} Dept`;
console.log(outcome2);
// String Functions(Global Function)
let color = String('red' + 1);
console.log(color);
console.log(typeof (color));
// charAt()
let str = 'Hello World';
console.log(str.charAt(8));
console.log(str.charAt(2));
console.log(str.charAt(1));
console.log("Anirban".charAt(1));
// concat()
let str1 = 'Anirban';
let str2 = 'Mishra';
console.log(str1.concat(str2));
console.log(str1.concat(' ', str2));
console.log(str1.concat(' ', 'Mishra'));
// indexOf()
let str3 = 'Anirban';
console.log(str3.indexOf('A'));
console.log(str3.indexOf('a'));
console.log(str3.indexOf('c'));
console.log(str3.indexOf('z'));
console.log(str3.indexOf('b'));
// replace()
str1 = 'Anirban anirban Mishra';
str2 = 'Hello';
console.log(str1.replace('Anirban', 'Rahul'));
console.log(str1.replace('Anirban', str2));
console.log(str1.replace(/Anirban/gi, 'hi'));
// gi makes it non-case sensitive
// split()
str1 = 'Apple-Banana-Orange';
// str1='Apple,Banana,Orange';
// console.log(str1.split(str2))
// str2=',';
str2 = '-';
str3 = 'p';
console.log(str1.split(str2));
// toUpperCase()
str1 = 'anirban mishra';
console.log(str1.toUpperCase());
// toLowerCase()
str2 = 'ANIRBAN';
console.log(str2.toLowerCase());
// let Multi:string="Hello"+" "+"Type"+" "+"Script"
let Multi = "Hello\n" + "Type\n" + "Script";
console.log(Multi);
let stud;
if ((stud = 'Ritesh')) {
    console.log('Yes');
}
if ((stud = 'Anirban')) {
    console.log('No');
}
// More Functions
// expressions
let n1 = 100;
let n2 = 100;
console.log(`The addition of ${n1} + ${n2} is ${n1 + n2}`);
let m = 11;
console.log(`The m is ${m == 10 ? 'ten' : 'not ten'}`);
// let n3:string | number | boolean | Date =`${n1+n2}`;
let n3 = `${n1 + n2}`;
console.log(`The addition of ${n1} + ${n2} is ${}`);
// endswith()
// include()*
// lastIndexof()
// match()*
// search()*
// slice()*
// substring()*
// trim()*
// trimleft()
// trimRight()
// valueOf()
