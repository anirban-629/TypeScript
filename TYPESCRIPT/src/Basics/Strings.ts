export{}

let g:string ='Anirban';
console.log(g);

let name1:string ='Anirban';
console.log(`name is ${name1}`)

let StudentName:string='Anirban';
let StudentDept:string='CSE';
//before ES6
let outcome1: string = StudentName + ' Study in the ' + StudentDept + ' Dept';
console.log(outcome1)
//After ES6
let outcome2: string = `${StudentName}  Study in the ${StudentDept} Dept`;
console.log(outcome2)

// String Functions(Global Function)
let color:string=String('red'+1);
console.log(color);
console.log(typeof(color));

// charAt()
let str:string='Hello World';
console.log(str.charAt(8));
console.log(str.charAt(2));
console.log(str.charAt(1));
console.log("Anirban".charAt(1));

// concat()
let str1:string='Anirban';
let str2:string='Mishra';
console.log(str1.concat(str2))
console.log(str1.concat(' ',str2))
console.log(str1.concat(' ','Mishra'))

// indexOf()
let str3:string='Anirban';
console.log(str3.indexOf('A'))
console.log(str3.indexOf('a',))
console.log(str3.indexOf('c'))
console.log(str3.indexOf('z'))
console.log(str3.indexOf('b'))

// replace()
str1='Anirban anirban Mishra';
str2='Hello';
console.log(str1.replace('Anirban','Rahul'))
console.log(str1.replace('Anirban',str2))
console.log(str1.replace(/Anirban/gi,'hi'))
// gi makes it non-case sensitive

// split()
str1='Apple-Banana-Orange';
// str1='Apple,Banana,Orange';
// console.log(str1.split(str2))
// str2=',';
str2='-';
str3='p';
console.log(str1.split(str2))

// toUpperCase()
str1='anirban mishra'
console.log(str1.toUpperCase())

// toLowerCase()
str2='ANIRBAN'
console.log(str2.toLowerCase())

// let Multi:string="Hello"+" "+"Type"+" "+"Script"
let Multi:string="Hello\n"+"Type\n"+"Script"
console.log(Multi)

// String
type student='Ritesh'|'Anirban'|'Subhadip'
let stud:student;
if((stud='Ritesh')){
    console.log('Yes');
}
if((stud='Anirban')){
    console.log('No');
}

// More Functions

// expressions
let n1:number=100;
let n2:number=100;
console.log(`The addition of ${n1} + ${n2} is ${n1+n2}`);

let m:number=11;
console.log(`The m is ${m==10?'ten':'not ten'}`);

// let n3:string | number | boolean | Date =`${n1+n2}`;
let n3:string | number  =`${n1+n2}`;
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