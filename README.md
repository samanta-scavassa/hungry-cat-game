# Hungry Cat Game

[Click here to play the deployed game](https://samanta-scavassa.github.io/hungry-cat-game/)

## Description

The objective of the game is to collect as much food as possible without letting the cat's lives run out.

## MVP

- Control the cat using left and right arrow keys.
- Collect food items to increase your score.
- Avoid bugs to prevent losing lives.
- The game ends when you run out of lives or achieve a certain score.

## Backlog

- Add levels and increasing difficulty.

## Data Structure

### Classes and Methods

#### `Game` Class

- `constructor()`: Initializes the game and sets up the game elements.
- `start()`: Starts the game and displays the game screen.
- `gameLoop()`: Controls the game loop for updating game elements.
- `update()`: Updates game elements like player movement, food, and bug positions.
- `endGame()`: Handles the end of the game, displaying the result.

#### `Cat` Class

- `constructor(gameScreen, left, top, width, height, image)`: Initializes the cat character.
- `move()`: Handles cat movement.
- `updatePosition()`: Updates the cat's position on the screen.
- `eat(eats)`: Detects collisions with kibbles and bugs.
- `plump(score)`: Changes the cat's appearance based on the score.

#### `Eats` Class

- `constructor(gameScreen)`: Initializes the base class for food items.
- `move()`: Handles the movement of food items.
- `updatePosition()`: Updates the position of food items.
- `digest()`: Handles the collection of food items.

#### `Kibble` Class

- `constructor(gameScreen)`: Initializes the food (Kibble) class.
- `digest()`: Overrides the `digest()` method to play a sound when collecting kibble.

#### `Bug` Class

- `constructor(gameScreen)`: Initializes the Bug class.
- `digest()`: Overrides the `digest()` method to play a sound when collecting bugs.

## States and States Transitions

- `game-start`: The initial state where the player starts the game by clicking the "Start" button.
- `game-container`: The main game state where the cat collects food and avoids bugs.
- `game-end`: The state displayed when the game ends, showing either a "Game Over" or "You Win" message.

## Tasks

Tasks from [Trello Board](https://trello.com/b/PrfUIjjn/hungry-cat):

1. Create Index HTML
Create an HTML file with elements for the start button, score, lives, and restart button.
Set up containers for each game screen: start, game, and end.

2. Implement the game initialization and basic functionality.

3. Add Images for the Game
Prepare and add images for the game, including player character, food items, and bugs.

4. Create a Player class with a constructor method to initialize player properties.
Implement a move method to handle player movement.
Create an eat method to detect collisions with food items and bugs.

5. Implement a constructor method in the Game class to set up game elements.
Create a gameLoop method to control the game loop for updating game elements.
Implement a start method to initiate the game.

6. Create Food Class
Create a Food class with a constructor method to initialize food properties.
Implement a move method for food items.

7. Create Subclasses: Kibble and Bug
Create subclasses Kibble and Bug that receive an element with a specific image in their constructors.

8. Implement collision detection and scoring on the game class.

9.  Update Game Class Update Method
Modify the Game class's update method to check points and lives and make necessary adjustments in the Eats classes (Kibble and Bug).

10. Add JavaScript and Event Handling
Include a script in the HTML file to handle player movement with arrow keys.
Implement event handling for the restart button.

11. Implement Game Class gameOver Method
Add a gameOver method in the Game class to remove elements from the screen and display the end screen.

12.  Add CSS for Game Screens and Buttons
Style the game start, game screen, and end containers.
Style the start button, score, lives elements, and restart button.

13. Add Sound Effects
Include sound effects in the game for various events and interactions.


## Links

- [Trello Link](https://trello.com/b/PrfUIjjn/hungry-cat)
- [Slides Link](https://www.canva.com/design/DAF650g5m-o/yqX6O0C36Hd3mIvA4vEXMA/view?utm_content=DAF650g5m-o&utm_campaign=designshare&utm_medium=link&utm_source=editor)
- [Github Repository Link](https://github.com/samanta-scavassa/hungry-cat-game)
- [Deployment Link](https://samanta-scavassa.github.io/hungry-cat-game/)
