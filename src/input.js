export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          paddle.moveleft();
          break;
        case 39:
          paddle.moveright();
          break;
        case 27:
          game.pause();
          break;
        case 32:
          game.start();
          break;
      }
    });
    document.addEventListener("keyup", event => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
