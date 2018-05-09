var img;
var begin = new Array(10);
var radious = new Array(10);
var x = new Array(10);
var y = new Array(10);
var weight = new Array(10);
var c1 = new Array(10);
var c2 = new Array(10);
var c3 = new Array(10);
var oppacity = new Array(10);
var ran1 = new Array(10);
var ran2 = new Array(10);
var weight;
var mouseWeight=0;
var mouseWeightSum=0;

function preload(){
 img=loadImage("img.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill(); 
  for (var i=0; i<10; i++) {
    radious[i]=random(10, 200); 
    x[i] = random(width);
    y[i] = random(height);
    weight[i] = random(1, 10);
    c1[i] = random(0, 255);
    c2[i] = random(0, 255);
    c3[i] = random(0, 255);
    oppacity[i] = random(50, 100);
    begin[i] = new createVector(x[i],y[i]);
    ran1[i] = random(0.005, 0.05);
    ran2[i] = random(0.005, 0.05);
  }
}

function draw() {
  image(img,0,0);
  //background(255);
  strokeWeight(15);
  noFill();
  ellipse(mouseX, mouseY, 450, 450);
  for (var i=0; i<10; i++) {
    begin[i].x = lerp(begin[i].x, mouseX, ran1[i]);
    begin[i].y = lerp(begin[i].y, mouseY, ran2[i]);

    strokeWeight(weight[i]+mouseWeight);
    constrain(weight[i]+mouseWeight, 1, 10);
    fill(c1[i], c2[i], c3[i], oppacity[i]);
    ellipse(begin[i].x, begin[i].y, radious[i], radious[i]);
  }
}

function mousePressed() {
  if (mouseButton==LEFT) {
    mouseWeight += 1;
    mouseWeightSum++;
  }
  if (mouseButton==RIGHT) {
    mouseWeight -= mouseWeightSum;
    mouseWeight = 0;
  }
}

function keyPressed() {

  for (var i=0; i<10; i++) {
    begin[i].x = x[i];
    begin[i].y = y[i];
    radious[i]=random(10, 200); 
    x[i] = random(width);
    y[i] = random(height);
    weight[i] = random(1, 10);
    c1[i] = random(0, 255);
    c2[i] = random(0, 255);
    c3[i] = random(0, 255);
    oppacity[i] = random(50, 100);
    ran1[i] = random(0.005, 0.05);
    ran2[i] = random(0.005, 0.05);
  }
}
