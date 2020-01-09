let img;
var distance = 2;
var size = 200;
let c;
let myFont;

function preload() {
  img = loadImage("07.jpg");
}

function setup() {
  let c = createCanvas(960, 1200);
  image(img, 0, 0);
  textSize(14);
}

function draw() {
  copy(img, 0, height - 20, width, height, 0, height - 20, width, height);

  if (mouseIsPressed) {
    copy(mouseX, mouseY, size, size, mouseX + distance, mouseY + distance, size, size);
  }

  fill(255);
  textAlign(CENTER);
  text("size: " + size + "  distance: " + distance, width / 2, height - 5);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(c, 'gen_exploration', 'jpg');
  }

  if (key == 'r') {
    image(img, 0, 0);
  }


  if (keyCode == UP_ARROW) {
    size = size + 20;
  }
  if (keyCode == DOWN_ARROW) {
    size = size - 20;
    if (size == 40) {
      size = size + 20;
    }
  }
  if (keyCode == RIGHT_ARROW) {
    distance = distance + 1;
  }
  if (keyCode == LEFT_ARROW) {
    distance = distance - 1;
    if (distance == 0) {
      distance = distance + 1;
    }
  }
}
