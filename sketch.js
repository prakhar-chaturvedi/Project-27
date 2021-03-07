
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

	roof = new Roof (400,50,700,50);

	bob1 = new Bob (240,400,40);
	bob2 = new Bob (320,400,40);
	bob3 = new Bob (400,400,40);
	bob4 = new Bob (480,400,40);
	bob5 = new Bob (560,400,40);

	string1 = new String (bob1.body,roof.body,-160,0);
	string2 = new String (bob2.body,roof.body,-80,0);
	string3 = new String (bob3.body,roof.body,0,0);
	string4 = new String (bob4.body,roof.body,80,0);
	string5 = new String (bob5.body,roof.body,160,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x : 100, y : -150})
	}
}

