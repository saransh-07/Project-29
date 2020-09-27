const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box20,box21,box22,box12,box13,box14,box15,box16,box17,box18,box19,ground;
var box23, box24,box25,box26,box27,box28,box29,box30,box31,box33,box32,box34,box35,box36,box37,box38,box39,box40,box41,box42;
var polygon,slingshot,ground3;
var a = 800; 
var b = 330;
var c = 600;
var polygon_img;
function preload(){
  polygon_img = loadImage("Hexagon2.png")
}
function setup() {
  createCanvas(1200,800);
 
engine =Engine.create();
world = engine.world;
box1 = new Box(75+a,300,50,50);
box2 = new Box(125+a,300,50,50);
box3 = new Box(175+a,300,50,50);
box4 = new Box(225+a,300,50,50);
box5 = new Box(275+a,300,50,50);
box6 = new Box(325+a,300,50,50);
box7 = new Box(150+a,250,50,50);
box8 = new Box(200+a,250,50,50);
box9 = new Box(250+a,250,50,50);
box10 = new Box(300+a,250,50,50);
box11 = new Box(175+a,200,50,50);
box12 = new Box(225+a,200,50,50);
box13= new Box(100+a,250,50,50);
box14 = new Box(125+a,200,50,50);
box15 =new Box(275+a,200,50,50);
box16 = new Box(150+a,150,50,50);
box17 = new Box(200+a,150,50,50);
box18 = new Box(250+a,150,50,50);
box19 = new Box(175+a,100,50,50);
box20 = new Box(225+a,100,50,50);
box21 = new Box(200+a,50,50,50);
ground = new Ground(1000,335,320,20);
ground2 = new Ground(800,700,320,20);
box22 = new Box(75+c,300+b,50,50);
box23= new Box(125+c,300+b,50,50);
box24 = new Box(175+c,300+b,50,50);
box25 = new Box(225+c,300+b,50,50);
box26= new Box(275+c,300+b,50,50);
box27= new Box(325+c,300+b,50,50);
box28= new Box(150+c,250+b,50,50);
box29 = new Box(200+c,250+b,50,50);
box30 = new Box(250+c,250+b,50,50);
box31 = new Box(300+c,250+b,50,50);
box32 = new Box(175+c,200+b,50,50);
box33 = new Box(225+c,200+b,50,50);
box34= new Box(100+c,250+b,50,50);
box35 = new Box(125+c,200+b,50,50);
box36 =new Box(275+c,200+b,50,50);
box37 = new Box(150+c,150+b,50,50);
box38 = new Box(200+c,150+b,50,50);
box39 = new Box(250+c,150+b,50,50);
box40 = new Box(175+c,100+b,50,50);
box41 = new Box(225+c,100+b,50,50);
box42 = new Box(200+c,50+b,50,50);
ground3 = new Ground(600,790,1200,20);

var polygon_options = {
  restitution:0.2,
  density:1.3,
  friction:1
}
polygon = Bodies.rectangle(200,500,50,50,polygon_options);
World.add(world,polygon);
slingshot = new SlingShot(this.polygon,{x:100,y:400});
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
box1.display("red");
box2.display("red");
box3.display("red");
box4.display("red");
box5.display("red");
box9.display("red");
box6.display("red");
box7.display("red");
box8.display("red");
box15.display("red");
box10.display("red");
box11.display("red");
box12.display("red");
box13.display("red");
box14.display("red");
box15.display("red");
ground.display("red");
box16.display("red");
box17.display("red");
box18.display("red");
box19.display("red");
box20.display("red");
box21.display("red");
box22.display("red");
box23.display("red");
box27.display("red");
box24.display("red");
box25.display("red");
box26.display("red");
box28.display("red");
box29.display("red");
box30.display("red");
box31.display("red");
box32.display("red");
box33.display("red");
box34.display("red");
box35.display("red");
box36.display("red");
box37.display("red");
box38.display("red");
box39.display("red");
box40.display("red");
box42.display("red");
box41.display("red");
ground2.display();
slingshot.display();
ground3.display();

imageMode (CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,50,50);
}
function mouseDragged(){
 
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingshot.fly();
 
}
function keyPressed(){
  
  if (keyCode===32){
    Matter.Body.setPosition(polygon,{x:200,y:500})
         slingshot.attach(this.polygon);
 }
}