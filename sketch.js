var fartBox; 
var fartBoy;
var fartbsize;
var bsize = 8;
var bfract = bsize -4; 
var hipster;
var v;
var va;
var realfont; 
var xdim = [];
var ydim = [];
var va=[];
var vya = [];
var one;
var one2;
var hipstery;
var oney;
var one2y;
var offs; 
function setup() {
fartBsize = createInput("size");
fartBox = createInput("x");
fartBoy = createInput("y");

  createCanvas(800, 1200);
fartBsize.changed(jixxinboard);
fartBox.changed(jixxinpants);
fartBoy.changed(jiyyinpants);

}
function jixxinboard (){
v = fartBsize.value();
  offs = parseInt(v);

for (i = 1; i <= offs; i++){
  xdim.push(i);
  ydim.push(i)
}

v = 0;
realfont = offs * 1.5;
bfract = offs; 
  return realfont; 
return bfract; 
// createCanvas(800, 1200);
  }
function jixxinpants (){
  v = fartBox.value();
  hipster = parseInt(v);

xdim.splice(hipster-1,1,0);
for (i = 1; i <= bfract; i++){
  one = hipster + i;
  one2 = hipster - i;

if (one2 >  0){
va.push(one2);

if (one < bfract) {
  va.push(one);
  
}
}
  }
 createCanvas(800, 1200);
}

function jiyyinpants (){
  vy = fartBoy.value();
  hipstery = parseInt(vy);
ydim.splice(hipstery-1,1,0);
for (i = 1; i <= bfract; i++){
  oney = hipstery + i;
  one2y = hipstery - i;

if (one2y > 0) {
 vya.push(one2y);

if (oney < bfract) {
  vya.push(oney);
 
}
}
  }
 createCanvas(800, 1200);
}


function gridparse (){
 var initv = hipster;
 var inity = hipstery;
if (initv > bsize){
bfract = initv - 4;
//initv = initv - 4;
alert(initv); 
  //console.log(initv);
}
if (inity > bsize){
bfract = inity - 4;
//inity = inity - 4;
alert(inity); 
 // console.log(inity);
}
  }
function draw() {
  background(0);
textSize(width / realfont);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text(va,0,1100);
text("X: "+xdim,0,500);
text("Y: "+ydim,0,700);
text(vya,0,100);
 // gridparse();
}

//Function math jixxinpants (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function math yv (+)(-)1 (-)(+)2 (+)(-)3(+)(-)4 if <0 then invalid
//Function store xv and yv
//Function 2 math if y is>4 then (-) 4 
//Function 2 math if y is>4 then (-)4
//Function use 2math if xv and yv are = to math vx and yv then statement is false.
