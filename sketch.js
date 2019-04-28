var fartBox; 
var v = "C:< hello world!";
function setup() {
  createCanvas(800, 1200);
fartBox = createInput("Ram your maths in here");
fartBox.changed(updateText);
}
function updateText(){
v = 0;
v = fartBox.value();
}
function draw() {
  background(0);
textSize(width / 8);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(v,0,1100);
}
