interface Student {
  name: string;
  marks: number;
}

const students: Student[] = [
  {name:"Akki", marks: 80 },
  { name:"thanu", marks: 90 },
  { name:"anu", marks: 85 },
];

students.forEach(s => {
  console.log(s.name, s.marks);
});


type PointType = {
  x:number;
  y:number;
};
interface PointInterface {
  x:number;
  y:number;
}
function printPoint(point: PointType | PointInterface) {
  console.log(point.x, point.y);
}
printPoint({ x:9, y:10 });


