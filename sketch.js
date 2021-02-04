const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld,ground1,ball1,rope1,box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12;
function setup() {

  createCanvas(1200,600);
  myengine = Engine.create();
  myworld = myengine.world;
  ground1 = new ground(600,560,1200,30);
  ball1 = new Ball(100,150,40);
  rope1 = new Rope(ball1.body,{x:120,y:220})
  box1 = new Box(300,530,50,50);
  box2 = new Box(300,480,50,50);
  box3 = new Box(300,430,50,50);
  box4 = new Box(300,380,50,50);
  box5 = new Box(300,330,50,50);
  box6 = new Box(300,280,50,50);
  box7 = new Box(300,230,50,50);
  box8 = new Box(300,180,50,50);
  box9 = new Box(400,530,50,50);
  box10 = new Box(400,480,50,50);
  box11 = new Box(400,430,50,50);
  box12 = new Box(400,380,50,50);

   
}

function draw() {
  background("red"); 
  
  rectMode(CENTER); 
  Engine.update(myengine);
  //box1.display();
  //box2.display();
  ground1.display();
  ball1.display();
  rope1.display();
  box1.display();
  box2.display();

  
  
  box3.display();
  box4.display();
  
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();


  //console.log(box2.body.angle);
}