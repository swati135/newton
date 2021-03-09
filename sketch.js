
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobDiameter = 25;

var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new Ball(400,400,50,50);
    ball2 = new Ball(350,400,50,50);
    ball3 = new Ball(450,400,50,50);
    ball4 = new Ball(300,400,50,50);
    ball5 = new Ball(500,400,50,50);
    roof1 = new Roof(400,300,250,10)
    string1 = new Sling(roof1.body,ball1.body,{x:90,y:0});
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  string1.display();
  drawSprites();
 
}



