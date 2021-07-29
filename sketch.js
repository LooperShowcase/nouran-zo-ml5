let player;
function setup() {
  createCanvas(800, 400);
  player = new Player();
}

let playerImage;
let bgImage;
let obstacleImage;
let obstacles = [];

let wordClassifier;

function preload() {
  playerImage = loadImage("player.png");
  bgImage = loadImage("background.jpg");
  obstacleImage = loadImage("obstacle.png");

  let options = {
    probabilitythreshold: 0.85,
  };

  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function heardword(error, results) {
  if (error) {
    console.error(error);
  }
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) == true) {
      console.log("game over");
      noLoop();
    }
  }
}
