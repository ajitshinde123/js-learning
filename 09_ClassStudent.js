
class Student {
    constructor(rollNumber, name,division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division= division;
    }
    detail(){
        console.log(`Student Details => Rollnumber: ${this.rollNumber}, Name:${this.name} , Division: ${this.division}`);
    }
}
const ajay=new Student("Ajay",32,"A");
ajay.Details();
const amar=new Student("Amar",21,"B");
amar.Details();
 
const arya=new Student("Arya",44,"c");
arya.Details();