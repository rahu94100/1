
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.
	ball=new Paper(400,350,50);
	b1=new Base(400,350,20,20)

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background(0);
  ball.display();
 b1.display();
}



