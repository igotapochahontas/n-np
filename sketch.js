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
//Function math xv (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function math yv (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function store xv and yv
//Function 2 math if y is>4 then (-) 4 
//Function 2 math if y is>4 then (-)4
//Function use 2math if xv and yv are = to math vx and yv then statement is false.
