const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var Plank1, Plank2, Plank3, Plank4;
var bird;

function setup(){
    var canvas = createCanvas(1366,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(683,height,1366,20)
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);
    Plank1 = new Plank(810, 260, 300, PI/2);
    Plank2 = new Plank(810, 180, 300, PI/2);
    Plank3 = new Plank(760, 120, 150, PI/7);
    Plank4 = new Plank(870, 120, 150, -PI/7);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
 //   console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    Plank1.display();
    Plank2.display();
    Plank3.display();
    Plank4.display();
    bird.display();

    ground.display();
}