# The Snake Game
LIVE GAME https://bradleykirshner.github.io/The-snake-game/
#### Video Demo:  https://youtu.be/9KzdPW31b68
#### Description:
    To create the snake game, I used a html file called index.html, a JavaScipt file called script.js, and a css file called styles.css. 
    
    In index.HTML, I created a h1 field to display the title of the game. Next, I created a h2 field to display my name. Under the h2 field I made a paragraph feild where I give a brief description on how the play the snake game. Under the descripton of the game, I created a paragraph field with a span to display the players score of the current game. After this, I created a canvas on which the game will be played on. 
    
    In script.js, I created variables for the grid, snake, food, the game, and to move the snake. In the window.onload function, I get the grid canvas by id and create the rows and columns. Then I place the food for the snake and call they key function everytime a key is pressed. I used the setIntreval function to call the update function every 100 ms to update the game. 
    
    In the update function, the first thing I do is check if the game flag is true. If it is set to true, the function returns and ends the game. In this function I set the colors of the grid and food and fill them into the canvas. I display the score by gettings its id then concatinating the score integer with text saying "Score: ". After this, I check if the x and y coordinates of the snake are the same as the foods x and y cooridantes. If it is then the snake grows, the score increments by 1, and the food is placed in a new location. Then the snake is shifted over by iterating backwards through the length of the snake and making the current iteration of the snake equal to the one in front of it. If the snake has length, then the head will be moved to the new coordinates of the snakes x and y. Then I get the color for the snake and add the new coordinates from the key function to the snakes original coordinates to move it in the direction represented by the key strokes. After that I then draw the snake onto the canvas. Then I check if the snake has hit any of the walls or its body. If it has hit the wall or its body then then game flag will be set to true and a message will be sent to the screen notifying the player the game is over.

    The key function takes one argument called the keyStroke. When a key is pressed it will be stored in keyStroke.code. The key function will check if the key is an arrow key or w,a,s,d. If it is one of those eight keys, it will make sure that they key is not telling the snake to move in the opposite direction that it is currenlty moving in. If it is not going the opposite direction, then the x and y coordinates will be stored in variables and added to the snakes x and y coordinates in the update function.

    The food function will return a random x and y coordinates so the food spawn will be random. These coordiantes will be used to place the food on the canvas.

    In styles.css, I created simple styles for h1, h2, and the description. For h1, I created a font family to make the font open sans and sans-serif. I also made the font size 20px. For h2, I made the font size 18px. For the description, I made the font size 16px.

#### How to run install and run this project
    To play the snake game, this folder must be downloaded. If the folder is dowloaded, index.html must be opened in a web browser.

#### How to use this project
    To use the snake game, you need to press any of the arrow keys or w,a,s,d to start the game. The game will run until you hit the wall or the snakes body. To restart the game, you must refresh the page by pressing command + r or the refresh button and the game will restart.
