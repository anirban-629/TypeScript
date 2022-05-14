"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = (x, y) => {
    return x + y;
};
console.log(`Sum of 10 and 20 is -> ${sum(10, 20)}`);
let print = (str) => {
    console.log(str);
};
print('Im Anirban Mishra');
function print1(x, y) {
    console.log(`${x} ${y}`);
}
print1('a');
function print11(x, y) {
    console.log(`${x} ${y}`);
}
print11('a');
function sum1(...s) {
    let s1 = 0;
    s.forEach(function (value) {
        s1 += value;
    });
    console.log(s1);
}
sum1(10, 20, 30, 40, 50);
function str12(...s) {
    s.forEach(function (string, i) { });
}
