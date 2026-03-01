function greetuser(name, title) {
    if (!title) {
        return "hello, ".concat(name, "!");
    }
    else {
        return "hello, ".concat(title, " ").concat(name, "!");
    }
}
console.log(greetuser("Akki", "Ms."));
console.log(greetuser("thanu", "Dr."));
var addnumbers = function (a, b) { return a + b; };
console.log(addnumbers(10, 15));
