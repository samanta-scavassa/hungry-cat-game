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
    this.gameScreen.appendChild(this.element);
  }
}
