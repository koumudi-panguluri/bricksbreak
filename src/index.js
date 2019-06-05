import Game from "/src/game";

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 500;
const GAME_HEIGHT = 400;
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lasttime = 0;
function gameloop(timestamp) {
  let deltaTime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameloop);
}
requestAnimationFrame(gameloop);
