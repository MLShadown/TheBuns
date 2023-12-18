class Bun {
    constructor(){
        this.r = 150; // Character size
        this.x = 50; // Character x-axis position
        this.y = height - this.r; // Character y-axis position
        this.vy = 0; // Character y-axis movement range
        this.gravity = 0.3; //Jump height
        this.jumpCount = 0; //Number of jumps
        this.won = false; //Victory judgment
    }
    //Jump settings
    jump() {
      if (this.y == height - this.r || this.jumpCount < 2) {
        this.vy = -13;
        this.jumpCount++;
        jumpSound.play();
      }
    }
    //Down settings
    down(){
        this.vy = 30;
    }
    //Left settings
    left(){
        this.x -=20;
    }
    //Right settings
    right(){
      this.x +=20;
    }
    //Detect whether bun collides with enemy
    hits(Enemy) {
      return collideRectRect(this.x, this.y, this.r, this.r, Enemy.x, Enemy.y + 5, Enemy.r, Enemy.r);
    }  
    //Character movement
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        // Prevent character from moving off canvas
        this.y = constrain(this.y, 0, height - this.r);
        this.x = constrain(this.x, 0, width - this.r);
    

        if (this.y == height - this.r) {
          this.jumpCount = 0; // Reset the number of jumps
        }
      }
    //Character show
    show() {
        // Win when the character eats the bun
        if (this.x > width - 150 && this.y < height - this.r) {
          this.won = true;
        }
        // Shown when a character wins
        if (this.won) {
            noLoop();
            fill("#fcf300");
            textSize(140);
            textAlign(CENTER, CENTER);
            text('You Win!', width / 2, height / 2);
            victorySound.play(); 
            this.won = false;
        } 
        // Shown when the character is playing
        else {
            image(bImg, this.x, this.y, this.r, this.r);
            // fill(255, 50);
            // rect(this.x, this.y, this.r, this.r);
        }
    }
}