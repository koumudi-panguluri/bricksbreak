export function DetectObject(ball, gameObject) {
  let bottomOfball = ball.position.y + ball.size;
  let topOfball = ball.position.y;
  let topOfObject = gameObject.position.y;
  let leftOfObject = gameObject.position.x;
  let rightOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfball >= topOfObject &&
    topOfball <= bottomOfObject &&
    ball.position.x >= leftOfObject &&
    ball.position.x + ball.size <= rightOfObject
  ) {
    return true;
  } else {
    return false;
  }
}