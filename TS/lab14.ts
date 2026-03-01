class Employee {
  readonly id: number;
  name:string;
  constructor(id: number,name:string) {
    this.id=id;
    this.name = name;
  }
}
const s1 = new Employee(502,"akki");
console.log(s1.id);
console.log(s1.name);

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log("Woof! Woof!");
  }
}
const animal = new Animal("Some Animal");
animal.makeSound();
const dog = new Dog("Buddy", "Labrador");
dog.makeSound();
