const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world
var backgroundImage
var myground, myplatform
var mybox1, mybox2, mybox3, mybox4, mybox5
var log1, log2, log3, log4
var bird1, bird2, bird3
var birds = []
var sling1, sling2, sling3
var pig1, pig2
var gameState = "onSling"
var reset
var birdFlying, birdSelect


function preload() {
  backgroundImage = loadImage("assets/bg.png")
  birdFlying = loadSound("assets/bird_flying.mp3")
  birdSelect = loadSound("assets/bird_select.mp3")


}


function setup() {
  createCanvas(1200, 500);





  engine = Engine.create();
  world = engine.world;

  myground = new Ground(600, 490, width, 20)
  myplatform = new Ground(120, 390, 300, 220)
  mybox1 = new Box(580, 345, 70, 70)
  mybox2 = new Box(830, 345, 70, 70)
  mybox3 = new Box(580, 280, 70, 70)
  mybox4 = new Box(820, 280, 70, 70)
  mybox5 = new Box(730, 220, 70, 70)

  log1 = new Log(700, 305, 380, 20, PI)
  log2 = new Log(700, 250, 380, 20, PI)
  log3 = new Log(740, 180, 200, 20, PI / 3)
  log4 = new Log(630, 180, 200, 20, -PI / 3)

  bird1 = new Bird(200, 140, 50, 50)
  bird2 = new Bird(100, 260, 50, 50)
  bird3 = new Bird(50, 260, 50, 50)

  birds.push(bird3)
  birds.push(bird2)
  birds.push(bird1)

  sling1 = new Slingshot(bird1.body, { x: 200, y: 100 })

  pig1 = new Pigs(700, 480, 50, 50)
  pig2 = new Pigs(700, 270, 50, 50)

  reset = createImg("assets/refresh.png")
  reset.position(1030, 50)







}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  fill("black")
  text(mouseX + "," + mouseY, mouseX, mouseY)

  myplatform.display()
  myground.display()
  mybox1.display()
  mybox2.display()
  mybox3.display()
  mybox4.display()
  mybox5.display()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  sling1.display()

  bird1.displayRed()
  bird2.displayYellow()
  bird3.displayBlue()

  bird1.display()
  bird2.display()
  bird3.display()

  pig1.display()
  pig2.display()

  reset.mousePressed(() => (
    window.location.reload()
  ))

  // if(birds.length < 0){
  // text("Click reload to play again",500,50)
  // }

}

function mouseDragged() {
  if (mouseX >= 0 && mouseX < 200 && gameState !== "launched") {
    Matter.Body.setPosition(birds[birds.length - 1].body, { x: mouseX, y: mouseY })
  }

}

function mouseReleased() {
  sling1.detach()
  gameState = "launched"
  birds.pop()
  birdFlying.play()




}

function keyPressed() {
  if (keyCode === 32 && gameState === "launched") {
    Matter.Body.setPosition(birds[birds.length - 1].body, { x: 200, y: 100 })
    sling1.attach(birds[birds.length - 1].body)
    gameState = "onSling"
    birdSelect.play()

  }
}


// visibility of the trejactory is lagging the game
// key pressed condiition eror
// reload method not working
// fix trajectory properly positions



