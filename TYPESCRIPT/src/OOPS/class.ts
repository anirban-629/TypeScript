export{}
class student{

    // Properties
    id:number;
    name:string;
    department:string;
    age:number;

    constructor (ID:number,NAME:string,DEPARTMENT:string,DOB:number){
        this.id=ID;
        this.name=NAME;
        this.department=DEPARTMENT;
        this.age=DOB;

    }

    // Methods/Characters   
    getDetails(){
        return `Name: ${this.name}\nId: ${this.id}`;
    }
    getEduInfo(){
        return `Department: ${this.department}`;
    }
    getAge(){
        return `Age: ${this.age}`;
    }
} 

const Anirban:student=new student(28,'ANIRBAN MISHRA','CSE',19);
const Subhadip:student=new student(6,'SUBHADIP DAS','CSE',21);
const Ritesh:student=new student(28,'RITESH SAHA','CSE',21);

console.log(Anirban.getDetails());
console.log(Anirban.getEduInfo());
console.log(Anirban.getAge());

console.log(Ritesh.getDetails());
console.log(Ritesh.getEduInfo());
console.log(Ritesh.getAge());

console.log(Subhadip.getDetails());
console.log(Subhadip.getEduInfo());
console.log(Subhadip.getAge());




