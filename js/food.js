class Food {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.element = document.createElement("img");
    this.left = Math.random() * 1210;
    this.top = 0;
    this.width = 56;
    this.height = 56;
    this.obstacleTimeoutId = null;
  }

  move() {
    const gameScreenHeight = this.gameScreen.offsetHeight;

    if (this.top < gameScreenHeight) {
      this.top += 3;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  digest() {
    this.element.style.height = `0px`;
    this.element.style.width = `0px`;
  }
}
