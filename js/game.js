class Game {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    this.gameStartScreen = document.querySelector("#game-start");
    this.gameEndScreen = document.querySelector("#game-end");
    this.livesCounter = document.querySelector("#lives-counter");
    this.width = 1000;
    this.height = 600;
    this.score = 0;
    this.lives = 7;
    this.gamesIsOver = false;
    this.gameLoopFrequency = 1000 / 60;
    this.bugs = [];
    this.kibbles = [];
    this.h1Tag = document.createElement("h1");
    this.player = new Cat(
      this.gameScreen,
      395,
      412,
      200,
      200,
      "../images/cat1.png"
    );
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
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
    this.player.move();
    const gameScreenRect = this.gameScreen.getBoundingClientRect();

    if (Math.random() > 0.98 && this.kibbles.length <= 5) {
      console.log("kibbles", this.kibbles.length);
      this.kibbles.push(new Kibble(this.gameScreen));
    }

    if (Math.random() > 0.98 && this.bugs.length <= 3) {
      console.log("bugs", this.bugs.length);
      this.bugs.push(new Bug(this.gameScreen));
    }

    this.kibbles.forEach((kibble, index) => {
      kibble.move();
      const kibbleRect = kibble.element.getBoundingClientRect();

      if (kibbleRect.bottom > gameScreenRect.bottom) {
        this.kibbles.splice(index, 1);
        kibble.element.style.height = `0px`;
        kibble.element.style.width = `0px`;
        kibble.element.remove();
      }

      if (this.player.eat(kibble)) {
        this.score++;
        this.player.plump(this.score);
        document.querySelector("#score").innerHTML = `00${this.score}`;
        this.kibbles.splice(index, 1);
        kibble.element.remove();
      }
    });

    this.bugs.forEach((bug, index) => {
      bug.move();
      const bugRect = bug.element.getBoundingClientRect();

      if (bugRect.bottom > gameScreenRect.bottom) {
        this.bugs.splice(index, 1);
        bug.element.style.height = `0px`;
        bug.element.style.width = `0px`;
        bug.element.remove();
      }

      if (this.player.eat(bug)) {
        this.bugs.splice(index, 1);
        bug.element.remove();
        this.lives--;
        console.log(this.livesCounter.offsetWidth);
        this.livesCounter.style.width = `${
          this.livesCounter.offsetWidth + 46
        }px`;
      }
    });

    if (this.lives === 0 || this.score >= 12) {
      this.endGame();
    }
  }

  endGame() {
    this.gameIsOver = true;

    if (!this.lives) {
      this.h1Tag.innerText = "Game Over";
    } else {
      this.h1Tag.innerText = "You win!";
    }
    this.gameEndScreen.prepend(this.h1Tag);

    this.player.element.remove();
    this.bugs.forEach((bug) => bug.element.remove());
    this.kibbles.forEach((kibble) => kibble.element.remove());
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
