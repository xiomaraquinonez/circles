var bg = 170;

function setup() {
  createCanvas(800, 900);
  colorMode(HSB);
}

function draw() {
  background(bg, 10, 100, 0.001);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}
  
function variableEllipse(x, y, px, py) {
  fill(sin(frameCount*0.01) * 155 + 100, 10, 255);
  var speed = abs(x-px) + abs (y-py);
  strokeWeight(speed/10);
  ellipse(x, y, speed, speed);
}

function mousePressed() {
  bg = random(255);
}
