
interface User {
  readonly id: number;
  name: string;
  age?: number; 
}
const user: User = {
  id: 502,
  name: "Akshaya",
  age: 20,
};
console.log(user.id);
console.log(user.name);
console.log(user.age);
user.name = "Bob";


interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}
const calculator: Calculator={
  add(a,b) {
    return a+b;
  },
  multiply(a,b) {
    return a*b;
  },
};
console.log(calculator.add(5,3));      
console.log(calculator.multiply(4,6)); 

