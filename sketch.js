
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var rect1,rect2;
var ball1,ball2,ball3,ball4,ball5
var rope1,rope2,rope3,rope4,rope5;
//var
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rect1 = createSprite(300,180,500,50)
	rect1.shapeColor = "grey"

	rect2 = createSprite(0,700,1600,30)
	rect2.shapeColor = "brown"

	
	ball1 = new Bob(200,400,50)
	ball2 = new Bob(250,400,50)
	ball3 = new Bob(300,400,50)
	ball4 = new Bob(350,400,50)
	ball5 = new Bob(400,400,50)


	

	rope1 = new Thread(ball1.body,{x:200,y:200})
	rope2 = new Thread(ball2.body,{x:250,y:200})
	rope3 = new Thread(ball3.body,{x:300,y:200})
	rope4 = new Thread(ball4.body,{x:350,y:200})
	rope5 = new Thread(ball5.body,{x:400,y:200})





	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //engine.update()
  

	ball1.display()
	rope1.display()
	ball2.display()
	rope2.display()
	ball3.display()
	rope3.display()
	ball4.display()
	rope4.display()
	ball5.display()
	rope5.display()
	// fly()
	
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-65,y:-45})
}
}







