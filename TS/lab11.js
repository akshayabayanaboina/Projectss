var students = [
    { name: "Akki", marks: 80 },
    { name: "thanu", marks: 90 },
    { name: "anu", marks: 85 },
];
students.forEach(function (s) {
    console.log(s.name, s.marks);
});
function printPoint(point) {
    console.log(point.x, point.y);
}
printPoint({ x: 9, y: 10 });
