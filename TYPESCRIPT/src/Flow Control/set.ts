let s=new Set();

s.add('Anirban')
s.add('Ritesh')
s.add('Subhadip')
s.add('ABC')

console.log(s);

console.log(s.has('Ritesh'));
console.log(s.has(10));

s.delete('ABC')

console.log(s);

s.add('A').add('B')

console.log(s);