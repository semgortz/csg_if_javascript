function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  noLoop();
}
function draw() {
    noStroke();
    translate(0,225);
    for (var n=0;n <5; n++){
     if=(n == 2){
     fill('blue')
     }else{
     fill('red');
}
rect(0,0,75,75)
translate(95,9);
}
