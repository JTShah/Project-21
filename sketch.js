
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball_options;
var ground, obstacle1, obstacle2;

var world, engine;
var radius=80
//the 3 great functions
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

		ball_options= {
		isStatic:false,
		restitution:0.4,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball=Bodies.circle(100,100,radius/2,ball_options);
	World.add(world,ball);



	ground= new Ground(600,780,1200,20);
	obstacle1= new Ground(700,720,20,100);
	obstacle2= new Ground(800,720,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  ellipse(ball.position.x, ball.position.y, radius, radius);
  ground.show();
  obstacle1.show();
  obstacle2.show();
 

 
}

//lesser functions
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-105});
}
}
