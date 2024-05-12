const canvas = document.querySelector('canvas');
canvas.width = 1600;
canvas.height = 1080;

let c = canvas.getContext("2d");

let cloudX = 0; // Initial position of the cloud
const spriteImages = [];
const numFrames = 4; // Number of frames in the animation

// Load the sprite images
for (let i = 1; i <= numFrames; i++) {
    const img = new Image();
    img.src = `b${i}.png`;
    spriteImages.push(img);
}

let spriteX = 400; // Initial x-position of the sprite
let spriteY = 1020; // Initial y-position of the sprite
let currentFrame = 0; // Index of the current frame in the animation
const frameRate = 10; // Number of frames to display per second
let frameCount = 0; // Counter to track when to change the frame
const spriteWidth = 32; // width of the sprite
const spriteHeight = 50; // height of the sprite


function drawMovingSprite() {
    c.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    c.font = "30px Comic Sans MS";
    c.fillStyle = "red";
    c.textAlign = "center";
    c.fillText("Nature's Symphony, Day to Night.", canvas.width / 2, canvas.height / 2);
    drawSun();
    drawMoon();
    drawGround();
    drawMtn();
    drawPond();
    drawHouse();
    drawTree();
    drawCloud(cloudX + 500, 50, 1);
    drawCloud(cloudX + 1000, 50, 1);

    // Draw the sprite
    c.drawImage(spriteImages[currentFrame], 0, 0, spriteImages[currentFrame].width, spriteImages[currentFrame].height, spriteX, spriteY, spriteWidth, spriteHeight);

    drawTextBubble((spriteX) + spriteWidth + 5, spriteY - 40, "Hello!");
    // Update the sprite position and frame
    spriteX += 2; // Adjust the speed of the sprite's movement
    frameCount++;
    if (frameCount >= frameRate) {
        currentFrame = (currentFrame + 1) % numFrames; // Cycle through the frames
        frameCount = 0;
    }


    if (spriteX > canvas.width) {
        spriteX = -200; // Reset the sprite position to the left side of the canvas
    }

    requestAnimationFrame(drawMovingSprite);
}
function drawTextBubble(x, y, text) {
            c.beginPath();
            c.arc(x, y, 30, 0, Math.PI * 2, false);
            c.fillStyle = "#ECECEC";
            c.fill();

        c.fillStyle = "black";
        c.font = "16px Arial";
        c.fillText(text, x , y ); // Draw the text on the cloud
}


drawMovingSprite();
function drawCloud(x, y, numClouds) {
    for (let i = 0; i < numClouds; i++) {
        for (let j = 0; j < 5; j++) {
            c.beginPath();
            c.arc(x, y, 30, 0, Math.PI * 2, false);
            c.fillStyle = "#ECECEC";
            c.fill();
            x += 40;
        }
        x += 100; // Add some spacing between clouds on the same x-axis
    }
}

function drawMoon() {
    c.beginPath();
    c.arc(1250, 220, 50, 0, Math.PI * 2, false);
    c.fillStyle = "#E2E2E2";
    c.fill();
    c.closePath();

    c.beginPath();
    c.arc(1240, 220, 50, 0, Math.PI * 2, false);
    c.fillStyle = "#8FCFF9";
    c.fill();
    c.closePath();
}

function drawGround() {
    c.beginPath();
    c.moveTo(0, 1000);
    c.lineTo(innerWidth, 1000);
    c.fillStyle = "#FF0000";
    c.stroke();

    c.fillStyle = "#0E6304";
    c.fillRect(0, 1000, innerWidth, 100);
    c.fillStyle = "#6D4108";
    c.fillRect(0, 1100, innerWidth, 100);
}

function drawPond() {
    c.beginPath();
    c.ellipse(150, 1050, 100, 50, 0, 0, 2 * Math.PI);
    c.fillStyle = "#00A1EB";
    c.fill();
}

function drawSun() {
    c.beginPath();
    c.arc(100, 50, 100, 0, Math.PI * 2, false);
    c.fillStyle = "#F9D807";
    c.fill();
}

function drawMtn() {
    c.moveTo(0, 1000);
    c.lineTo(250, 450);
    c.lineTo(500, 1000);
    c.fillStyle = "#8B8B8B";
    c.closePath();
    c.fill();
}

function drawHouse() {
    c.fillStyle = "#FFD700";
    c.fillRect(350, 850, 200, 200);

    c.beginPath();
    c.moveTo(350, 850);
    c.lineTo(450, 750);
    c.lineTo(550, 850);
    c.closePath();
    c.fillStyle = "#8B4513";
    c.fill();

    c.fillStyle = "#8B4513";
    c.fillRect(400, 950, 50, 100);

    c.fillStyle = "#87CEEB";
    c.fillRect(470, 900, 60, 60);

    c.fillStyle = "#FFFFFF";
    c.fillRect(495, 900, 10, 60);
    c.fillRect(470, 925, 60, 10);
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function drawTree() {
    let x = 600;
    let y = 950;

    c.fillStyle = "#8B4513";
    c.fillRect(x, y, 20, 100);

    c.beginPath();
    c.arc(x + 10, y - 50, 50, 0, Math.PI * 2, false);
    c.fillStyle = "#228B22";
    c.fill();
    c.closePath();
}
