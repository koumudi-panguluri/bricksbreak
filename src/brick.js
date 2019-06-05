import { DetectObject } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;
    this.position = position;
    this.width = 50;
    this.height = 24;
    this.RemoveObject = false;
  }
  update() {
    if (DetectObject(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.RemoveObject = true;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
