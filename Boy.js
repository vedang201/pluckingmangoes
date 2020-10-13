class Boy{
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);      
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}