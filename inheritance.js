class Parent{
  constructor(){
    this.fatherName = "Joseph";
  }
}

class Child extends Parent{
  constructor(name){
    super(); //eti dara parent er constructor keo call kore deya.
    this.name = name;
  }
  getFullName(){ //getFullName is a function without using function keyword
    return this.name + " " + this.fatherName;
  }
}

const baby1 = new Child("Tom");
const baby2 = new Child("Jerry");
console.log(baby1);
console.log(baby2);
console.log(baby1.getFullName());
console.log(baby2.getFullName());

