const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground;
var engine;
var world;
var fruit;
var ground2;
var ground3;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(200,680,600,20);
  fruit=new Fruit(300,300,15);
  rectMode(CENTER);
  ground2=new Ground(200,680,20,200);
  ellipseMode(RADIUS);
  textSize(50);
  ground3=new Ground(400,680,20,200);
  
}

function draw() 
{
  background(51);
  if(keyCode === UP_ARROW)
  {
    js();
  }
  ground.display();
  ground2.display();
  ground3.display();

  fruit.display();
  Engine.update(engine);
 
   
}
function js(){ 

   Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.06});

 }




