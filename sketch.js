var fartBox; 
var fartBoy;
var fartbsize;
var bsize = 4;
var hipster;
var v;
var va=[];
var vy = [];
var one;
var one2;
var hipstery;
var oney;
var one2y;
function setup() {
fartBox = createInput(x);
fartBoy = createInput(y);
fartBsize = createInput(size);
  createCanvas(800, 1200);

fartBox.changed(jizzinpants);
fartBoy.changed(jiyyinpants);
fartBsize.changed(jizzinboard);
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
function jiyyinpants (){
  vy = fartBoy.value();
  hipstery = parseInt(vy);
for (i = 1; i <= bsize; i++){
  oney = hipstery + i;
  one2y = hipstery - i;
  vy.push(oney);
  vy.push(one2y);
  }
}
function gridparse (){
 var initv = hipster;
 var inity = hipstery;
if (initv > bsize){
initv = initv - 4;

  console.log(initv);
}
if (inity > bsize){
inity = inity - 4;

  console.log(inity);
}
function draw() {
  background(0);
textSize(width / 8);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(va,0,1100);
text(vy,0,1100);
  gridparse();
}

//Function math jizzxinpants (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function math yv (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function store xv and yv
//Function 2 math if y is>4 then (-) 4 
//Function 2 math if y is>4 then (-)4
//Function use 2math if xv and yv are = to math vx and yv then statement is false.
