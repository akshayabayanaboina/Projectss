class Student {
  name:string;
  age:number;

  constructor(name: string,age:number) {
    this.name=name;
    this.age=age;
  }
}

const student1=new Student("Akki",20);

console.log(student1.name);
console.log(student1.age);


class Students {
  public name:string;
  private rollNo:number;

  constructor(name: string,rollNo: number) {
    this.name=name;
    this.rollNo=rollNo;
  }
  showRollNo() {
    console.log(this.rollNo);
  }
}
const student2 = new Students("anu", 101);
console.log(student2.name); 
student2.showRollNo();      

