class Game {
    constructor() {
      this.gameScreen = document.querySelector("#game-screen");
      this.gameStartScreen = document.querySelector("#game-start");
      this.gameScreen = document.querySelector("#game-end");
      this.width = 600;
      this.height = 600;
      this.score = 0;
      this.lives = 7;
      this.gamesIsOver = false;
      this.gameLoopFrequency = 1000 / 60;
      this.bugs = [];
      this.food = [];
    }
  
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.startScreen.style.display = "none";
      this.gameScreen.style.display = "block";
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }
  
    gameLoop() {}
  }