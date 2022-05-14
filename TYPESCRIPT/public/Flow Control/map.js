"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let map = new Map();
map.set('1', 'Anirban');
map.set('2', 'Ritesh');
map.set(3, 'Subhadip');
map.set(true, 'abc');
console.log(map.get('1'));
console.log(map.get('2'));
console.log(map.get(3));
console.log(map.get(true));
console.log(map.has(1));
console.log(map.has('1'));
console.log(map.has(false));
for (let keys of map.keys()) {
    console.log(keys);
}
for (let values of map.values()) {
    console.log(values);
}
for (let entries of map.entries()) {
    console.log(entries);
    console.log(entries[0], entries[1]);
}
console.log(map);
map.delete('1');
console.log(map);
console.log(map.size);
console.log(map.clear());
console.log(map);
