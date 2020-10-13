class Launcher{
      
    constructor(bodyA,pointB){
        var options = 
        {bodyA : bodyA,
        pointB :pointB,
        stiffness: 0.04,
        length :1


        }

        this.launcher = Matter.Constraint.create(options);
        World.add(world,this.launcher)
    }
    attach(body){
        
        this.launcher.bodyA = body;


    }
    fly(){

        this.launcher.bodyA = null;

    }

    display(){

        if(this.launcher.bodyA){
        stroke("black");
        strokeWeight(4)
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y)
        }


    }

}