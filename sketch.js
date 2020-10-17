const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiameter;

var rope1, rope2, rope3, rope4, rope5;

var roofObject;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(width/2, 100, 300, 30);

	bobDiameter = 40;

	bobObject1 = new Bob(320, 550, bobDiameter);
	bobObject2 = new Bob(360, 550, bobDiameter);
	bobObject3 = new Bob(400, 550, bobDiameter);
	bobObject4 = new Bob(440, 550, bobDiameter);
	bobObject5 = new Bob(480, 550, bobDiameter);

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);

  background(230);

  Engine.update(engine);

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y: -45});
	}
}

function drawLine(constraint) {
	var bobBodyPosition = constraint.bodyA.position
	var roofBodyPosition = constraint.bodyB.position

	var roofBodyOffset = constraint.pointB;
	
	var roofBodyX = roofBodyPosition.x+roofBodyOffset.x
	var roofBodyY = roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}