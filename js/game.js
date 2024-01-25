class Game {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    this.gameStartScreen = document.querySelector("#game-start");
    this.gameEndScreen = document.querySelector("#game-end");
    this.gameContainer = document.querySelector("#game-container");
    this.livesCounter = document.querySelector("#lives-counter");
    this.score = 0;
    this.lives = 7;
    this.gamesIsOver = false;
    this.gameLoopFrequency = 1000 / 60;
    this.junkFoodArray = [];
    this.catFoodArray = [];
    this.h1Tag = document.createElement("h1");
    this.gameOverSound = document.querySelector("#game-over-sound");
    this.gameOverSound.loop = false;
    this.winSound = document.querySelector("#win-sound");
    this.winSound.loop = false;
    this.cat = new Cat(
      this.gameScreen,
      495,
      455,
      200,
      200,
      "./images/cat1.png"
    );
  }

  start() {
    this.gameContainer.style.display = "flex";
    this.gameStartScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    !this.gameOver && this.update();
  }

  update() {
    this.cat.move();

    this.generateFood(this.catFoodArray, 5, CatFood);
    this.generateFood(this.junkFoodArray, 3, JunkFood);

    this.updateFood(this.catFoodArray);
    this.updateFood(this.junkFoodArray);

    if (this.lives === 0 || this.score >= 12) {
      this.endGame();
    }
  }

  generateFood(foodArray, maxNumber, foodType) {
    if (Math.random() > 0.98 && foodArray.length <= maxNumber) {
      foodArray.push(new foodType(this.gameScreen));
    }
  }

  updateFood(foodArray) {
    const gameScreenRect = this.gameScreen.getBoundingClientRect();
    const foodToRemove = [];

    foodArray.forEach((food, index) => {
      food.move();
      const foodRect = food.element.getBoundingClientRect();

      if (foodRect.bottom > gameScreenRect.bottom) {
        food.element.style.height = `0px`;
        food.element.style.width = `0px`;
        food.element.remove();
        foodToRemove.push(index);
      }

      if (food instanceof CatFood) {
        if (this.cat.eat(food)) {
          this.score++;
          this.cat.plump(this.score);
          document.querySelector("#score").innerHTML = `00${this.score}`;
          foodToRemove.push(index);
          food.element.remove();
        }
      } else if (food instanceof JunkFood) {
        if (this.cat.eat(food)) {
          foodToRemove.push(index);
          food.element.remove();
          this.lives--;
          this.livesCounter.style.width = `${
            this.livesCounter.offsetWidth + 47
          }px`;
        }
      }
    });

    foodToRemove.forEach((index) => {
      foodArray.splice(index, 1);
    });
  }

  endGame() {
    this.gameIsOver = true;
    this.gameContainer.style.display = "none";

    if (this.lives === 0) {
      this.h1Tag.innerText = "Game Over";
      this.gameOverSound.loop = false;
      this.gameOverSound.play();
      this.lives = 7;
    } else if (this.score >= 12) {
      this.h1Tag.innerText = "You win!";
      this.winSound.loop = false;
      this.winSound.play();
      this.score = 0;
    }
    this.gameEndScreen.prepend(this.h1Tag);

    this.cat.element.remove();
    this.junkFoodArray.forEach((junkFood) => junkFood.element.remove());
    this.catFoodArray.forEach((catFood) => catFood.element.remove());
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
