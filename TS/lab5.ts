function greetuseroptional(name:string,title?:string):void {
    if (!title) {
    console.log(`hello,${title}, ${name}!`);
    } else {
    console.log(`hello, ${title} ${name}!`);
    }

}
greetuseroptional("Alice");
greetuseroptional("Bob", "dr");

type operation = (a: number, b: number) => number;
const add: operation = (a, b) => a + b;
const div: operation = (a, b) => a / b;
console.log(add(3, 4));
console.log(div(12, 4));