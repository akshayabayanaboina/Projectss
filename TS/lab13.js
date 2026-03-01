var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Akki", 20);
console.log(student1.name);
console.log(student1.age);
var Students = /** @class */ (function () {
    function Students(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Students.prototype.showRollNo = function () {
        console.log(this.rollNo);
    };
    return Students;
}());
var student2 = new Students("Bob", 101);
console.log(student2.name);
student2.showRollNo();
