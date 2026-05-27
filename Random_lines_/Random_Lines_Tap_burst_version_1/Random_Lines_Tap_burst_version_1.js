/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : TAP BURST
 * DESCRIPTION: THE LINES BURST OUT FROM THE AREA CLICKED ON SCREEN
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
 
function draw() {
  if (bursting) {
    // Draw 30 lines radiating outward from the click point
    for (let i = 0; i < 30; i++) {
      let angle = random(TWO_PI);     // random direction (0 to 360 degrees) AI ASSITED
      let dist = random(50, 400);     // random length
 
      // cos() and sin() convert angle + distance into x,y coordinates / AI ASSITED
      let endX = burstX + cos(angle) * dist;
      let endY = burstY + sin(angle) * dist;
 
      stroke(random(255), random(255), random(255));
      strokeWeight(random(0.5, 3));
      line(burstX, burstY, endX, endY);
    }
 
    burstFrames--;              // count down the burst timer
    if (burstFrames <= 0) {
      bursting = false;         // stop bursting when timer hits 0
    }
 
    background(0, 25);
  } else {
    // No burst — just fade slowly so the canvas does not stay empty
    background(0, 5);
  }
}
 
// mousePressed() runs automatically when you click
function mousePressed() {
  bursting = true;
  burstX = mouseX;      // record where the click happened
  burstY = mouseY;
  burstFrames = 20;     // burst lasts 20 frames (~0.3 seconds)
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
