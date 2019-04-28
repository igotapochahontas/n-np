var input; 
var v = "C:< hello world!";
function setup() {
  createCanvas(800, 1200);
input = createInput("Ram your maths in here");
input.changed(updateText);
}
function updateText(){
clear();
v.html(input.value());
}
function draw() {
  background(0);
textSize(width / 8);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(v,0,1100);
}
