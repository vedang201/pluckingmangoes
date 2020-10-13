
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeObject,stoneObject, boy;
var mangoObject1,mangoObject2,mangoObject3,mangoObject4,mangoObject5;
var launcherObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObject = new Tree(600,500);
	mangoObject1 = new Mango(510,480);
	mangoObject2 = new Mango(550,470);
	mangoObject3 = new Mango(590,490);
	mangoObject4 = new Mango(650,490);
	mangoObject5 = new Mango(710,470);
	stoneObject = new Stone(150,550);

	launcherObject = new Launcher(stoneObject.body,{x:160,y:560});

	boy = new Boy(200,600);
	

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  treeObject.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  stoneObject.display();
  launcherObject.display();
  boy.display();

  
   
}
function mouseDragged(){
    
    Matter.Body.setPosition(stoneObject.body, {x:mouseX , y:mouseY});
    
}
function mouseReleased(){

	launcherObject.fly();
	//Matter.Body.setStatic(stoneObject,false);
	//Matter.Body.setPosition(stoneObject,{x:50,y:-50});
}	
function detectCollision(){

}
