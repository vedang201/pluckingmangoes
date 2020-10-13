class Stone{
    constructor(x, y) {
        var options = {

             isStatic : false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        
        this.width = 20;
        this.height = 20;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("stone.png");
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