export{}

let a:number=45;
let b:number=75;
let c=10.583496307;
let e:bigint=211111111121n;
let num6:number=0x37cf;
let num7:number=0o37234;
let num8:number=0b1101;
// console.log()

// toExponential
console.log('myNumber:', c.toExponential())
console.log('myNumber:', c.toExponential(1))
console.log('myNumber:', c.toExponential(2))
console.log('myNumber:', c.toExponential(3))

// toFixed()
console.log('myNumber:', c.toFixed())
console.log('myNumber:', c.toFixed(1))
console.log('myNumber:', c.toFixed(2))
console.log('myNumber:', c.toFixed(3))

// toPrecision()
console.log('myNumber:', c.toPrecision())
console.log('myNumber:', c.toPrecision(1))
console.log('myNumber:', c.toPrecision(2))
console.log('myNumber:', c.toPrecision(3))

// toLocaleString()
console.log('myNumber:', c.toLocaleString('bn-in'))
console.log('myNumber:', c.toLocaleString('ar-in'))

// Methods
// tostring()
let na1:number=100;
console.log(na1.toString());
console.log(na1.toString(2));
console.log(na1.toString(3));
console.log(na1.toString(4));
console.log(na1.toString(5));
console.log(na1.toString(6));
console.log(na1.toString(7));
console.log(na1.toString(8));
console.log(na1.toString(16));
a
// valueOf()
console.log(na1); // Directly calling variables 
console.log(na1.valueOf()); // Directly calling value of the variables

// Property

// MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE+10);

// MIN_VALUE
console.log(Number.MIN_VALUE);

// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1); //Accuracy low
console.log(Number.MAX_SAFE_INTEGER+2); //Accuracy low
console.log(Number.MAX_SAFE_INTEGER+3); //Accuracy low

// MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);

// isSafeInteger
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));

// EPSILON
console.log(Number.EPSILON);
console.log(0.1+0.2);
console.log(0.2+0.7);
console.log(0.1+0.2==0.3);
console.log(0.1+0.2==0.30000000000000004);

// Create Infinity
console.log(Math.pow(10,1000));
console.log(Infinity+1);
console.log(Infinity-1);
console.log(Infinity*1);
console.log(Infinity/1);
console.log(Infinity+Infinity);
console.log(Infinity-Infinity);
console.log(Infinity*Infinity);
console.log(Infinity/Infinity);

// NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
console.log(-3/0);

// POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);
console.log(3/0);

console.log(Infinity>1000);
console.log(Infinity==1000);
console.log(Infinity<1000);

console.log(-Infinity>1000);
console.log(-Infinity==1000);
console.log(-Infinity<1000);

console.log(Infinity>-Infinity);
console.log(Infinity==Infinity);

console.log(Number.isFinite(Number.POSITIVE_INFINITY));
console.log(Number.isFinite(100));
console.log(Number.isFinite('100'));


// NaN -> (Not a Number)
console.log(0/0);
console.log(Number('Anirban'));

// prototype
// -----------------------------------------------------------


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
console.log(`The addition of ${n1} + ${n2} is ${n3}`);

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
// -----------------------------------------------------------
// Boolean
let b1:boolean=true;
let b2:boolean=false;

console.log(typeof(b1));
console.log(typeof(b2));

console.log(Number(b1));
console.log(Number(b2));

console.log(String(b1));
console.log(String(b2));

console.log(b1==b2?'Same':'Not same');

// -----------------------------------------------------------
// BIG INT
let bi1:bigint=12031310230323432n;
// let bi:number=12022222222222222222222222;
console.log(bi1);
console.log(typeof(bi1));

let bi2:string='1235456567'
let bi3:bigint=BigInt(bi2);
console.log(bi3);
console.log(typeof(bi3));

