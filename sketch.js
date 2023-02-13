const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    backgroundImg = loadImage("./assets/???");
    perso = loadImage("OIP.kpg");
  }
  function setup() {
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    person = new Perso(150, 350, 160, 310);
  }

  function draw() {
    background(189);
    
   
  
    Engine.update(engine);
  }
