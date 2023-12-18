class Enemy{
    //Enemy settings
    constructor(){
        this.r = 80;//Enemy Size
        this.x = width;//Position x
        this.y = height - this.r; //Position y
    }
    move() {
        this.x -= 8;//Movement speed
    }
    show() {
        image(eImg, this.x, this.y, this.r, this.r);//display position
    }
}