window.onload = function () {
  const startButton = document.getElementById("start-button");
  let game = null;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });
};
