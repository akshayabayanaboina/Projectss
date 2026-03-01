function greetuser(name:string,title:string):string{
    if (!title){
        return `hello, ${name}!`;
    } else {
        return `hello, ${title} ${name}!`;
    }

}
console.log(greetuser("Akki","Ms."));
console.log(greetuser("thanu","Dr."));

const addnumbers = (a:number,b:number):number => a + b;
console.log(addnumbers(10,15));


