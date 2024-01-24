window.onload = function () {
  const introSound = document.querySelector("#intro-song");
  const startButton = document.getElementById("start-button");
  let game = null;
  

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    introSound.remove();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    const key = event.key;

    switch (key) {
      case "ArrowLeft":
        game.player.directionX -= 4;
        return;
      case "ArrowRight":
        game.player.directionX += 4;
        return;
    }
  });

  document.querySelector("#restart-button").addEventListener("click", () => {
    location.reload();
  });
};
