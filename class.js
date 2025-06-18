// class theke object create

// class Student{
//   constructor(){
//     this.id = 1;
//     this.name = "mahi";

//   }

// }

// const student1 = new Student();
// const student2 = new Student();

// console.log(student1,student2);

class Student{
  constructor(sId,sName){
    this.id = sId;
    this.name = sName;
    this.school = "GGC"
    
  }

}

const student1 = new Student(12,"Shuvo");
const student2 = new Student(22,"Mahia");

console.log(student1,student2);

console.log(student1.name,student2.name); //object er moto alada kore property  access korte parbo..ekhane name access korsi

