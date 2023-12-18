let eImg;// Image of the Enemies
let bImg;// Image of the Bun
let bgImg;// Image of the background
let bgVideo;// Background video
let Enemies= [];// Array of Enemies
let survivalTime = 0;// Survival time
let gameStarted = false;// Game start status
let victorySound; // Victory sound
let bgmSound; // Background music
let jumpSound; // Jump sound
let deathSound; // Death sound

//Preload images, videos and audios
function preload(){

}

//Canvas settings
function setup() {
  createCanvas(1280, 720);
  displayMenu();
  image(bgVideo, 0, 0, width, height);
  Bun = new Bun();
}

function keyPressed() {
  // Jump when space or w key is pressed
  if (key == ' ' || key === 'W' || key === 'w'){
    Bun.jump();
    //When the video data is loaded, the background video will be played
    if (bgVideo.loadedmetadata) {
      // 播放视频
      bgVideo.loop();
    }
  }
   // Down when s key is pressed
  if (key == 'S' || key == 's'){
    Bun.down();
  }
   // Left when a key is pressed
  if (key == 'A' || key == 'a'){
    Bun.left();
  }
   // Right when d key is pressed
  if (key == 'D' || key == 'd'){
    Bun.right();
  }
  if (key == 'J' || key == 'j') {
    Bun.fireBullet();
  }
   // Right when d key is pressed
   if (key == 'R' || key == 'r'){
    resetGame();
  }
}

//The game starts when someone clicks on the "start game" text position
function mouseClicked() {
  // Scientist options
  if (!gameStarted && mouseY > height / 2 && mouseY < height / 2 + 100) {
    startGame();
  }
}

function draw() {
  if (gameStarted) {
    // Initialize Bun
    if (!Bun) {
      Bun = new Bun();
    }
    // Draw enemies.
    if (random(1) < 0.012) {
      Enemies.push(new Enemy());
    }
    // Draw background
    background(0);
    image(bgVideo, 0, 0, width, height);
    // Draw abd move enemies
    for (let b of Enemies){
      b.move();
      b.show();
      // When a bun collides with an enemy
      if (Bun.hits(b)){
        console.log('game over');
        noLoop();// Stop the loop
        // Font settings
        fill(255, 0, 0);
        textSize(60);
        textAlign(CENTER, CENTER);
        textFont('Mulish');
        text('Game Over\n Press "R" to reset the game', width / 2, height / 2);
        // Play a death sound
        deathSound.setVolume(0.3);
        deathSound.play();
        // Stop playing background music
        bgmSound.stop();
      }
    }
    // Draw Bun & bun move
    Bun.show();
    Bun.move();
    // Draw survival time font
    survivalTime++;
    fill(255);
    textSize(50);
    textAlign(RIGHT, TOP);
    textFont('Mulish');
    text('Survival Time: ' + survivalTime, width - 10, 10);
  }
}
function resetGame() {
  // Reset game state
  Enemies = [];
  survivalTime = 0;
  gameStarted = false;
  bgmSound.stop();
  // Reset the bun position
  Bun.x = 50;
  Bun.y = height - Bun.r;
  loop();
  
  // Return to menu interface
  displayMenu();
  removeElements();
  console.log('Back to Menu');
}
