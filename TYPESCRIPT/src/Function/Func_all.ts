export{}
let sum=(x:number,y:number):number=>{
    return x+y;
}

console.log(`Sum of 10 and 20 is -> ${sum(10,20)}`);

let print = (str:string) => {
    console.log(str);
}

print('Im Anirban Mishra');

function print1(x:string,y:string){
    console.log(`${x} ${y}`);
}
print1('a');

function print11(x:string,y?:string){
    console.log(`${x} ${y}`);
}
print11('a');

function  sum1 (...s:number[]){
    let s1=0;
    s.forEach(function(value){
        s1+=value;
    });
    console.log(s1);
}

sum1(10,20,30,40,50)

function str12(...s:number[]){
    s.forEach(function(string,i))
}