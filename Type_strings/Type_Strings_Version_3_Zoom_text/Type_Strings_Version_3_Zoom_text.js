/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 * 
 *
 * TITLE : ZOOM TEXT
 * DESCRIPTION: BG CHANGES COLOUR AS MOUSE MOVES 
 * BY :RINI
 *
 */


let myText;
let sizes = [];

function preload() {
  myText = loadStrings('data/clock.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, CENTER); // alighed the text to center -- rini

  for (let i = 0; i < 100; i++) {
    sizes[i] = 20; //giving base size
  }
}

function draw() {
  let h = map(mouseX, 0, width, 0, 360);
  let b = map(mouseY, 0, height, 80, 30);
  background(h, 80, b);

  noStroke();
  fill(0, 0, 100);

  let lineH = height / (myText.length + 1);

  for (let i = 0; i < myText.length; i++) {
    
    let fixedY = lineH * (i + 1);
    let d = dist(mouseX, mouseY, width / 2, fixedY);
    let targetSize = map(d, 0, 300, 90, 16);
    
    // text zoom --rini help with ai 
    targetSize = constrain(targetSize, 16, 90);
    sizes[i] = lerp(sizes[i], targetSize, 0.1);
    textSize(sizes[i]);
    text(myText[i], width / 2, fixedY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
