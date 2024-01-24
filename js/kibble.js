class Kibble extends Eats {
  constructor(gameScreen) {
    super(gameScreen);
    this.element = document.createElement("img");
    this.element.setAttribute("src", "../images/food.png");
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.zIndex = 4;
    this.gameScreen.appendChild(this.element);
    this.collectKibbleSound = new Audio("../sound/collect_food.wav");
  }

  digest() {
    super.digest();
    this.collectKibbleSound.play();
  }
}
