var v = "C:> hello world!";
function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(0);
textSize(width / 7);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(v,60,1000);
}
