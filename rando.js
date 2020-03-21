var vxa;
var offs1;
var eh = 0; 
var x = 0;
var j = 1;
var number;
var sNumber = [];
var map2=[];
var map1 = [];
var output = [];
var hipstj; 
var hipstu; 
var initv; 
var inity;
var initv1; 
var inity1; 
var vtemx; 
var fartBox; 
var abo; 
var fartBoy;
var fartbsize;
var bsize = 8;
var bfract = bsize -4; 
var xycombo = []; 
var combhip; 
var hipster;
var v;

var realfont; 
var xdim = [];
var ydim = [];
var va=[];
var vya;
var one;
var one2;
var hipstery;
var oney;
var one2y;
var offs; 
function setup() {
fartBsize = createInput("size");
//fartBox = createInput("x");
//fartBoy = createInput("y");

  createCanvas(800, 1200);
fartBsize.changed(jixxinboard);
//fartBox.changed(jixxinpants);
//fartBoy.changed(jiyyinpants);

}





function jixxinboard (){
va = fartBsize.value();
  offs = parseInt(va);


va = 0;
realfont = offs * 1.5;
bfract = offs; 

//gridparse();

offs1 = offs+1;
for (var t = 1; t < offs1; t ++) {
//x++;
xdim.push(t);
}

var derp = xdim.length;
for (var y =1; y < derp; y ++ ){
eh ++;
//eh = Math.floor((Math.random() * offs) + 1);
//alert (eh); 
if (ydim.indexOf(eh) == -1) {
    ydim.push(eh);
//eh ++;
//alert (eh); 
//eh = eh - 2;
eh = Math.abs(eh - 2);
if (ydim.indexOf(eh) == -1) {

//alert (eh); 
 ydim.push(eh);
if (ydim.indexOf(eh) == -1) {
if (eh != 0 || NaN){
    ydim.push(eh);
//y++;
}
}
}
}

//ydim.push(eh);

}
vxa = xdim.toString();

vya = ydim.toString();
  return realfont; 
return bfract; 
return offs;
return vya;
return vxa; 
}

function draw() {
  background(0);
textSize(width / realfont);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text("Board size: "+offs,0,100);
text("Values Passed: "+eh,0,300);
text("X: "+vxa ,0,600);
text("Y: "+vya ,0,900);
 
}


