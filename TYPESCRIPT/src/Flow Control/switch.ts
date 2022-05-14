export{}
let val1: number = 20;
let val2: number = 10;
let operation: string = '-';

console.log('switch example');

switch (operation) {
  case '+':
    console.log(val1 + val2);
    break;
  case '-':
    console.log(val1 - val2);
    break;
  case '*':
    console.log(val1 * val2);
    break;
  case '/':
    console.log(val1 / val2);
    break;
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

//Without break
operation = '-';

console.log('switch example');

switch (operation) {
  case '+':
    console.log(val1 + val2);
  case '-':
    console.log(val1 - val2);
  case '*':
    console.log(val1 * val2);
  case '/':
    console.log(val1 / val2);
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

//Default Clause
operation = '=';

console.log('switch example');

switch (operation) {
  case '+':
    console.log(val1 + val2);
  case '-':
    console.log(val1 - val2);
  case '*':
    console.log(val1 * val2);
  case '/':
    console.log(val1 / val2);
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

//Default Clause Location
operation = '=';

console.log('switch example');

switch (operation) {
  default:
    console.log('Invalid operator');
    break;
  case '+':
    console.log(val1 + val2);
    break;
  case '-':
    console.log(val1 - val2);
    break;
  case '*':
    console.log(val1 * val2);
    break;
  case '/':
    console.log(val1 / val2);
    break;
}

console.log('switch finished');
//breaks from a switch
let val: number = calculator(20, 10, '+');
console.log(val);

function calculator(val1: number, val2: number, operation: string) {
  switch (operation) {
    default:
      console.log('Invalid operator');
      return 0;
    case '+':
      return val1 + val2;
    case '-':
      return val1 - val2;
    case '*':
      return val1 * val2;
      break;
    case '/':
      return val1 / val2;
  }
}

//Grouping of Cases
let options = '3';

switch (options) {
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
    console.log('<=5');
    break;
  case '6':
  case '7':
  case '8':
  case '9':
  case '10':
    console.log('>5 & <=10');
    break;
  default:
    console.log('Invalid');
}

//Strict Equality Check

let options1: any = 3;

switch (options1) {
  case '1':
    console.log('1');
    break;
  case '2':
    console.log('2');
    break;
  case '3':
    console.log('3');
    break;
  case '4':
    console.log('4');
    break;
  default:
    console.log('Invalid');
}

///////////////////////

let options2 = 3;
let a:number=1;
let b:number=1;

switch (options2) {
  case a:
    console.log('1');
    break;
  case a + 1:
    console.log('2');
    break;
  case b + 1:
    console.log('3');
    break;
  case b * b:
    console.log('4');
    break;
  default:
    console.log('Invalid');
}



// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
 ///////////////////
enum VehcileType {
  Car, //0
  Plane, //1
  Train //2
}
 
let num:VehcileType=VehcileType.Plane
 
switch (+num) {
  case VehcileType.Car:
    console.log("Car");
    break;
  case VehcileType.Plane:
    console.log("Plane");
    break;
  case VehcileType.Train:
    console.log("Train");
    break;
  default:
    break;
}
/////////////////