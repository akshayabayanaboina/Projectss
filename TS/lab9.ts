
function move(dir: "up" | "down" | "left" | "right") {
    console.log("Moving " + dir);
}
move("up");
move("right");

function formatValue(val: string | number) {
    if (typeof val === "string") console.log(val.toUpperCase());
    else console.log(Math.round(val));
}

formatValue("hello");
formatValue(4.7);
