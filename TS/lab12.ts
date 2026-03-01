enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING="PENDING",
  SUCCESS="SUCCESS",
  FAILED="FAILED"
}
function printValue(value: Direction | Status) {
  console.log(value);
}
printValue(Direction.Up);
printValue(Status.SUCCESS);
