var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILED";
})(Status || (Status = {}));
function printValue(value) {
    console.log(value);
}
printValue(Direction.Up);
printValue(Status.SUCCESS);
