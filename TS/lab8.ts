type point = {
    x: number;
    y: number;
};
function printPoint(pt: point): void {
    console.log(`x: ${pt.x}, y: ${pt.y}`);
}

const point1:point={x:20,y:29};
printPoint(point1);