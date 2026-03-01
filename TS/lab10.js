var user = {
    id: 502,
    name: "Akshaya",
    age: 20,
};
console.log(user.id);
console.log(user.name);
console.log(user.age);
user.name = "Bob";
var calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
};
console.log(calculator.add(5, 3));
console.log(calculator.multiply(4, 6));
