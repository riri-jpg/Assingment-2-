/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 * 
 *
 * TITLE : CHANGING COLOUR
 * DESCRIPTION: BG CHANGES COLOUR AS MOUSE MOVES 
 * BY :RINI
 *
 */

let storyText;

function preload() {
  storyText = loadStrings('data/The_clock_that_forgot_itself.txt');// changed text--rini
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background();   // warm off-white
  textAlign(RIGHT, TOP);// text is in RHS
  textFont('data/georgia.ttf');   // changed font
  //noLoop(); // turned off loop -- rini
}

function draw() {
  // mouseX goes 0 → width, map that to hue from 0 - 360 -- rini
  let h = map(mouseX, 0, width, 0, 360);
  
  // mouseY change in brightness
  let b = map(mouseY, 0, height, 80, 30);
  
  colorMode(HSB, 360, 100, 100);// used colour mode 
  background(h, 80, b);

  let margin = width * 0.15;
  let boxWidth = width * 0.7;
  let y = 60;
  let fontSize = 40;

  textSize(fontSize);
  noStroke();

  for (let i = 0; i < storyText.length; i++) {

    fill('white'); // made text white --rini

    text(storyText[i], margin, y, boxWidth);
    y += fontSize * 1.6;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
