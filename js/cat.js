class Cat {
  constructor(gameScreen, left, top, width, height, image) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.setAttribute("src", image);
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
    this.plumpSound = new Audio("./sound/plump.wav")
  }

  move() {
    const maxLeft = this.gameScreen.offsetWidth - this.width;

    if (this.left < maxLeft && this.directionX > 0) {
      this.left += this.directionX;
    } else if (this.left > 0 && this.directionX < 0) {
      this.left += this.directionX;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.directionX = 0;
    this.directionY = 0;
  }

  eat(eats) {
    const playerPosition = this.element.getBoundingClientRect();
    const eatsPosition = eats.element.getBoundingClientRect();

    if (
      eatsPosition.left < playerPosition.right &&
      eatsPosition.right > playerPosition.left &&
      eatsPosition.top < playerPosition.bottom &&
      eatsPosition.bottom > playerPosition.top
    ) {
      eats.digest();
      return true;
    }
    return false;
  }

  plump(score) {
    if(score === 3) {
        this.element.setAttribute("src", "./images/cat2.png");
        this.plumpSound.play();
    } 
    if(score === 7) {
        this.element.setAttribute("src", "./images/cat3.png");
        this.plumpSound.play();
    }
  }
}
