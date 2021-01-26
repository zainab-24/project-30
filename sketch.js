var  Engine = Matter.Engine;
 World= Matter.World;
 Event = Matter.Event;
 Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,200,20,20);
    box1 = new Box(100,150,20,20);
    box2 = new Box(150,200,20,20);


}

function draw(){
    background("pink");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
}

