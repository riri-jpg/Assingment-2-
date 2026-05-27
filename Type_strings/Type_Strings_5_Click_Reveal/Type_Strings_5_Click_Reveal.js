/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 * 
 *
 * TITLE : CLICK REVEAL
 * DESCRIPTION: CLICK ANYWHERE ON SCREEN TO REVEAL TEXT
 * BY :RINI
 *
 */

let instructionText;
let visibleLines = 0;   // how many lines to show right now

function preload() {
  instructionText = loadStrings('data/Catographer.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, TOP);
  noLoop();   // nothing moves on its own — only updates on click
}

function draw() {
  background(133, 194, 230);   //light blue colour--rini

  let y = 80;
  let cx = width / 2;   // centre x

  noStroke();

  // Only draw lines up to visibleLines (starts at 0, increases on click)
  for (let i = 0; i < visibleLines; i++) {

    // The first line is bigger and coloured — acts like a title
    if (i === 0) {
      textSize(45);
      fill(255, 220, 80);   // gold for title
    } else {
      textSize(20);
      fill(0);   // black
    }

    text(instructionText[i], cx, y);
    y += textSize() * 1.5;
  }

  // Show a prompt at the bottom if there are more lines to reveal
  if (visibleLines < instructionText.length) {
    fill(255);
    textSize(12);
    //textAlign(TOP,RIGHT);
    text('click to continue',width - 750, 30);
    
  }
}

// NEW: mousePressed() is a special p5.js function.
// It runs automatically once every time the mouse is clicked.
function mousePressed() {
  // Add one to visibleLines each click, but stop at the total line count
  if (visibleLines < instructionText.length) {
    visibleLines++;
  } else {
    visibleLines = 0;   // reset to beginning after all lines shown
  }
  redraw();   // because noLoop() is on, we must call redraw() manually
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
