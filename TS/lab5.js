function greetuseroptional(name, title) {
    if (!title) {
        console.log("hello,".concat(title, ", ").concat(name, "!"));
    }
    else {
        console.log("hello, ".concat(title, " ").concat(name, "!"));
    }
}
greetuseroptional("Alice");
greetuseroptional("Bob", "dr");
var add = function (a, b) { return a + b; };
var div = function (a, b) { return a / b; };
console.log(add(3, 4));
console.log(div(12, 4));
