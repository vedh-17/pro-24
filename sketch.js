
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var leftS,rightS,bottomS;
var ground;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100, 630, 10);
	ground= new Ground (400, 680, 800, 20);
	leftS= new Dustbin (550, 645, 100, 20);
	rightS= new Dustbin (670, 645, 100, 20);
	bottomS= new Dustbin (610, 685, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

	Engine .update(engine);

	paper.display();
	bottomS.display();
	rightS.display();
	leftS.display();
	//ground.display();


 drawSprites();
}

function keyPressed(){

if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-12});
}

}

