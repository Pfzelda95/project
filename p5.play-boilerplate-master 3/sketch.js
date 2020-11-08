const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base,testparticle,testplinko;



var particles = [];
var plinkos = [];
var divs = [];

var divheight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  base = new ground(240,790,500,15)
  
}



function draw() {
  background("black"); 
  Engine.update(engine);
   
  for (var k = 0;k <=width;k = k+100){
    divs.push(new div(k,height-divheight/2,10,divheight));
    divs[k].display();
  }
  for (var k = 0; k < divs.length; k++) { divs[k].display(); }
  
  
  
  
  base.display();
  
  
  
}