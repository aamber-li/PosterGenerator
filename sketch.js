//import p5.js;

let smallerRadius;
let largerRadius;
let innerOffset = 100;    // distance of the pen tip from the center of the inner circle
let outerAngle = 0;
let dOuterAngle = 0.01;    // step size for the outer angle
let innerAngle = 0;       // angle of rotation about the smaller circle
let penColor
let xcoord
let ycoord

function setup() {
  createCanvas(500, 500);
  penColor = color('rbg(255,255,255)');
  xcoord=0;
  ycoord=0;
  smooth();
  backgroundBlur();
  largerRadius = width/5.0;
  smallerRadius = width*8.0/25.0;
  //speed(3.0);
  frameRate(1000);
  //star(0, 0, 80, 100, 40);
  star(int(random(0,width)), int(random(0,height)), 80,100, 20);
  
}

function backgroundBlur(){
  background(220,220,220);
  noStroke();
  //xcoord=0;
  //ycoord=0;
  for(xcoord=0; xcoord<width; xcoord+=50){
    for(ycoord=0; ycoord<height; ycoord+=50){
       fill(int(random(0,255)), int(random(0,255)),int(random(0,255)));
       circle(xcoord+25,ycoord+25, 50);
    }
  }
  filter(BLUR,100);
}

function star(x , y,   radius1,  radius2,  npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle/2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  filter(BLUR ,3);
}

function mouseClicked() {
  //background(255);
  backgroundBlur();
  star(int(random(0,width)), int(random(0,height)), int(random(10,50)),int(random(50,100)), int(random(5,20)));
  //star(int(random(0,width)), int(random(0,height)), 50,70, 10);
  //star(int(random(0,width)), int(random(0,height)), 50,70, 10);
  
  // choose a new random pen color, inner circle size, and inner offset
  
  smallerRadius = int(random(0, largerRadius));
  //innerOffset = random(0, smallerRadius);
  outerAngle = innerAngle = 0;
}

function draw() {
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(10, 10, width-20, height-20, 10);
  //ellipse(width/2,height/2,width,height);
  translate(width/2,height/2);    // move origin to the center of larger circle
  rotate(outerAngle);             // perform first rotation
  translate(largerRadius - smallerRadius,0);  // move origin to the center of the smaller circle
  rotate(innerAngle);
  
  fill(penColor);
  stroke(penColor);
  strokeWeight(3);
  point(innerOffset,0);
  
  outerAngle += dOuterAngle;
  innerAngle = -outerAngle*largerRadius/smallerRadius;
}