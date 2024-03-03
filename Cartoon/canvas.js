const canvas = document.querySelector('canvas'); //accessing canvas HTML DOM method

//Makes it so canvas fits whole window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d"); //To draw in the canvas you need to create a 2D context object

c.font = "30px Comic Sans MS";
c.fillStyle = "red";
c.textAlign = "center";
c.fillText("Nature's Symphony, Day to Night.", canvas.width/2, canvas.height/2); // to write on canvas

drawSun();
drawMoon();
for (let i = 0; i < 20; i++) { // Used for loop to draw 20 clouds in certain location randomly
    let cloudX = Math.floor(Math.random() * (innerWidth - 120)) + 60;
    let cloudY = Math.floor(Math.random() * 100) + 50;
    drawCloud(cloudX, cloudY);
}
drawGround();
drawMtn();
drawPond();
drawHouse();
for(let i =0; i<10; i++) { // used for loop to draw 10 trees in certain location randomly
    drawTree();
}
drawHouse();

/*-----------------------------------------------------------------------------------------------*/
function drawCloud(x, y){ // draws clouds, used for loop to create cloud
    for (let i = 0; i < 5; i++) {
        // Draw a circle
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false); // circle
        c.fillStyle = "#ECECEC"; // changes color of circle
        c.fill(); // draws circle

        // Update the x-coordinate for the next circle
        x += 40; // Adjust the distance between circles
    }
}
function drawMoon() { // draws moon, used two circles to make a moon crescent
    c.beginPath();
    c.arc(1250, 220, 50, 0, Math.PI * 2, false); // circle
    c.fillStyle = "#E2E2E2"; // color of the moon
    c.fill(); // draws the moon
    c.closePath();

    c.beginPath();
    c.arc(1240, 220, 50, 0, Math.PI * 2, false); // circle
    c.fillStyle = "#8FCFF9"; // color of the moon
    c.fill(); // draws the moon
    c.closePath();
}
function drawGround() { // draws ground line and uses rectangles as ground color
    c.beginPath();
    c.moveTo(0, 1000); // where to start of line
    c.lineTo(innerWidth, 1000); // where line goes to
    c.fillStyle = "#FF0000"; //color of the line
    c.stroke(); // Draws the line

    // coloring ground line
    c.fillStyle = "#0E6304"; // to color the rectangles
    c.fillRect(0, 1000, innerWidth, 100);
    c.fillStyle = "#6D4108"; // to color the rectangles
    c.fillRect(0, 1100, innerWidth, 100);// c.fillRect(x, y, width, height) makes a rectangle
}
function drawPond(){ // draws the pond
    c.beginPath();
    c.ellipse(150, 1050, 100, 50, 0, 0, 2 * Math.PI);
    c.fillStyle = "#00A1EB";
    c.fill();
}
function drawSun(){ // draws the sun
    c.beginPath();
    c.arc(100,50, 100, 0, Math.PI * 2, false); // circle
    c.fillStyle = "#F9D807"; // changes color of circle
    c.fill(); // draws circle
}
function drawMtn() { // draws the mountain
    c.moveTo(0, 1000); // where to start of line
    c.lineTo(250, 450); // where line goes to
    c.lineTo(500, 1000);
    c.fillStyle = "#8B8B8B";
    c.closePath(); // Close the path
    c.fill();
}
function drawHouse() { // draws the house with windows , door , roof
    // Draw the house
    c.fillStyle = "#FFD700"; // Set house color to yellow
    c.fillRect(350, 850, 200, 200); // Draw a rectangle for the house

    // Draw the roof
    c.beginPath();
    c.moveTo(350, 850);
    c.lineTo(450, 750);
    c.lineTo(550, 850);
    c.closePath();
    c.fillStyle = "#8B4513"; // Set roof color to brown
    c.fill();

    // Draw the door
    c.fillStyle = "#8B4513"; // Set door color to brown
    c.fillRect(400, 950, 50, 100); // Draw a rectangle for the door

    // Draw the window
    c.fillStyle = "#87CEEB"; // Set window color to sky blue
    c.fillRect(470, 900, 60, 60); // Draw a rectangle for the window

    // Draw window panes
    c.fillStyle = "#FFFFFF"; // Set window pane color to white
    c.fillRect(495, 900, 10, 60); // Vertical pane
    c.fillRect(470, 925, 60, 10); // Horizontal pane
}
function getRandomNumber(min, max) { // gets a random number between two numbers
    return Math.random() * (max - min) + min;
}
function drawTree() { // draws tree
    // Randomize the position
    let x = getRandomNumber(600, 1300);
    let y = getRandomNumber(950, 1000);

    // Draw the trunk
    c.fillStyle = "#8B4513"; // Set trunk color to brown
    c.fillRect(x, y, 20, 100); // Draw a rectangle for the trunk

    // Draw the leaves
    c.beginPath();
    c.arc(x + 10, y - 50, 50, 0, Math.PI * 2, false); // Draw a circle for the leaves
    c.fillStyle = "#228B22"; // Set leaf color to green
    c.fill(); // Fill the leaves
    c.closePath();
}
