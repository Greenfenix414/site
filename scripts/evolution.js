let bonus;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  bonus = int(random(-5, 5));
}
let compass = ["north", "east", "south", "west"];
let r = 255;
let g = 255;
let b = 255;
let x = -1;
let y = 0;
let size = 20;
let speed = 1;
function score() {
  print("-----Evolution Score!-----");
  print("Size:" + int(size));
  print("Speed:" + int(speed));
  print("Random Modifier:" + bonus);
  print("--------------------------");
  print("Total:" + int(bonus + size + speed));
  rgb = [int(r), int(g), int(b)];
  print("Color:" + rgb);
}
function draw() {
  function evolve() {
    if (frameCount == 1) {
      x = windowWidth / 2;
      y = windowHeight / 2;
    }
    background(100);
    r = r + random(-1, 1);
    g = g + random(-1, 1);
    b = b + random(-1, 1);
    size = size + random(-1, 1) / 2;
    speed = speed + random(-1, 1) / 4;
    fill(r, g, b);
    circle(x, y, size);
    direction = random(compass);
    if (direction == "north") {
      y = y - speed;
    }
    if (direction == "east") {
      x = x + speed;
    }
    if (direction == "south") {
      y = y + speed;
    }
    if (direction == "west") {
      x = x - speed;
    }
    if (x < 0) {
      x = windowWidth;
    }
    if (y < 0) {
      y = windowHeight;
    }
    if (x > windowWidth) {
      x = 0;
    }
    if (y > windowHeight) {
      y = 0;
    }
    if (r > 255) {
      r = 255;
    }
    if (g > 255) {
      g = 255;
    }
    if (b > 255) {
      b = 255;
    }
    if (r < 0) {
      r = 0;
    }
    if (g < 0) {
      g = 0;
    }
    if (b < 0) {
      b = 0;
    }
    if (size < 20) {
      size = 20;
    }
    if (size > 75) {
      size = 75;
    }
    if (speed > 5) {
      speed = 5;
    }
    if (speed < 1) {
      speed = 1;
    }
  }
  evolve();
  if (frameCount == 1000) {
    score();
  }
}
function mouseClicked() {
  score();
}