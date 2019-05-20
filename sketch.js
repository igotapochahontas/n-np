var fartBox; 
var bsize = 4;
var hipster;
var v;
var va=[];
var one;
var one2;
function setup() {
  createCanvas(800, 1200);
fartBox = createInput(42);
fartBox.changed(jizzinpants);
}

function jizzinpants (){
  v = fartBox.value();
  hipster = parseInt(v);
for (i = 1; i <= bsize; i++){
  one = hipster + i;
  one2 = hipster - i;
  va.push(one);
  va.push(one2);
  }
}
function gridparse (){
 var initv = hipster;
if (initv > bsize){
initv = initv - 4;
  console.log(initv);
}
}
function draw() {
  background(0);
textSize(width / 8);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(va,0,1100);
  gridparse();
}

//Function math jizzxinpants (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function math yv (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function store xv and yv
//Function 2 math if y is>4 then (-) 4 
//Function 2 math if y is>4 then (-)4
//Function use 2math if xv and yv are = to math vx and yv then statement is false.
