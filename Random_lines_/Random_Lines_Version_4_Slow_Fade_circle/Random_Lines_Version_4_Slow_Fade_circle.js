/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : SLOW FADE
 * DESCRIPTION: THE LINES FADE AWAY SLOWLY
 * BY :RINI
 *
 */

let counter = 0;
let bursting = false;  // is a burst currently happening?
let burstX = 0;        // where the burst started
let burstY = 0;
let burstFrames = 0;   // how many frames left in the burst
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
 
function draw()  {
  let x = random(width);
  let y = random(height);
 
  stroke('pink'); // made colour to be pink only 
  strokeWeight(random(0.5, 4));
 
  // Draw more lines per frame (5 instead of 1)
  
  for (let i = 0; i < 5; i++) {
    let x2 = random(width);
    let y2 = random(height);
    ellipse(x2, y2, random(5, 20), random(5, 20)); // circle instead of lines
  }


// background opacity is made 5 so the lines stay much longer- Rini
 background(0, 5);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
