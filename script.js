// grid variables
var cellSize = 25;
var row = 20;
var col = 20;
var grid;
var context;

// snake variables
var snake = [];
var snakex = cellSize * 5;
var snakey = cellSize * 5;

// food variables
var foodx;
var foody;

// move variables
var movex = 0;
var movey = 0;

// game variables
var gameFlag = false;
var score = 0;

window.onload = function() {
    // create grid
    grid = document.getElementById("grid");
    grid.height = row * cellSize;
    grid.width = col * cellSize;
    context = grid.getContext("2d");

    // place food
    food();

    // listen for key stroke and call key function
    document.addEventListener("keyup", key);

    // update game every 100 ms
    setInterval(update, 100);
}

function update() {
    // end game if flag is true
    if (gameFlag == true) {
        return;
    }

    // color grid
    context.fillStyle = "green";
    context.fillRect(0, 0, grid.width, grid.height);

    // color food
    context.fillStyle = "red";
    context.fillRect(foodx, foody, cellSize, cellSize);

    // display score
    document.getElementById("score").textContent = "Score: " + score;

    // if location of food and snake is same grow snake, increment score, and replace food
    if (snakex == foodx && snakey == foody) {
        snake.push([foodx, foody]);
        score += 1;
        food();
    }

    // shift the position of snake infront of it
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = snake[i - 1];
    }
    // shift head to snakex and snakey
    if (snake.length) {
        snake[0] = [snakex, snakey];
    }

    // color and move snake
    context.fillStyle = "blue";
    snakex += movex * cellSize;
    snakey += movey * cellSize;
    context.fillRect(snakex, snakey, cellSize, cellSize);

    // draw snake on grid
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i][0], snake[i][1], cellSize, cellSize);
    }

    // if snake hits wall end game
    if (snakex < 0 || snakex >= (col * cellSize) || snakey < 0 || snakey >= (row * cellSize)) {
        gameFlag = true;
        alert("Game over: snake hit the wall");
    }

    // if snake hits body end game
    for (let i = 0; i < snake.length; i++) {
        if (snakex == snake[i][0] && snakey == snake[i][1]) {
            gameFlag = true;
            alert("Game over: snake hit itself");
        }
    }
}

function key(keyStroke) {
    // move snake up if up arrow or w is pressed and snake is not moving down
    if ((keyStroke.code == "ArrowUp" || keyStroke.code == "KeyW") && movey != 1) {
        movex = 0;
        movey = -1;    
    }
    // move snake down if down arrow or s is pressed and snake is not moving up
    else if ((keyStroke.code == "ArrowDown" || keyStroke.code == "KeyS") && movey != -1) {
        movex = 0;
        movey = 1;
    }
    // move snake left if left arrow or a is pressed and snake is not moving right
    else if ((keyStroke.code == "ArrowLeft" || keyStroke.code == "KeyA") && movex != 1) {
        movex = -1;
        movey = 0;
    }
    // move snake right if right arrow or d is pressed and snake is not moving left
    else if ((keyStroke.code == "ArrowRight" || keyStroke.code == "KeyD") && movex != -1) {
        movex = 1;
        movey = 0;
    }
}

function food() {
    // get x and y coordinates to place food
    foodx = Math.floor(Math.random() * (row - 1)) * cellSize;
    foody = Math.floor(Math.random() * (col - 1)) * cellSize;
}