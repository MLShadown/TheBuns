function displayMenu() {
    if (!gameStarted) {
      background(bgImg);//display background image

      //"Start Game" Font settings
      push();
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      textFont('Gasoek One');
      text('Start Game', width / 2, height / 2 + 50);
      pop();

      //“The Buns！” Font background settings
      push();
      rotate(radians(-3));
      fill(255, 183, 3, 240);
      noStroke();
      rect(width / 2 - 410, height / 2 - 230,800,150);
      pop();

      //"The Buns!" Font settings
      push();
      textFont('Pacifico');
      textSize(140);
      textAlign(CENTER, CENTER);
      translate(width / 2, height / 4);
      fill(255);
      text('The Buns!', 0, 0);
      pop();

      //Background music plays settings
      bgmSound.setVolume(0.5);
      bgmSound.play();
    }
}
function startGame() {
    // Update game start status
    gameStarted = true;
    bgVideo.loop();
    loop();
    removeElements();
    Bun.x = 50;
    Bun.y = height - Bun.r;
}