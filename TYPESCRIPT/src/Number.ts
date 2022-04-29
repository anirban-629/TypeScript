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
// valueOf()

// Property
// MAX_VALUE
// MIN_VALUE
// NEGATIVE_INFINITY
// POSITIVE_INFINITY
// NaN
// prototype