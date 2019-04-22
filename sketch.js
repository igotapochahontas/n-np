var v = "hello world";
function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(0);
textSize(width / 3);
textAlign(CENTER, CENTER);
fill(0,255,0);
text(v,50,50);
}
