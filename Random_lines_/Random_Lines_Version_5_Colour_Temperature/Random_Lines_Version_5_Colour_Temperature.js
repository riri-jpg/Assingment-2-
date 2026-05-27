/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : COLOUR TEMPERATURE
 * DESCRIPTION:  EACH LINE HAS VARYING THICKNESS
 * BY :RINI
 *
 */

//let counter = 0;
//let bursting = false;  // is a burst currently happening?
//let burstX = 0;        // where the burst started
//let burstY = 0;
//let burstFrames = 0;   // how many frames left in the burst
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('pink');
}
 
 
function draw()  {
  let x = random(width);
  let y = random(height);
 
  
  
  // making map that converts mouse x  (0 to width ) to be red value of (0 to 255)
  
  let r = map(mouseX, 0, width, 0, 255); 
  let b = map(mouseX, 0, width, 255, 0); // opposite: right = less blue
 
 
 
 // making the weight random -- rini
 let weight = random(0.5, 15);
  strokeWeight(weight);
  
  stroke(r, random(50), b); // random green kept low for punchy colours
  strokeWeight(random(1, 3));
 
  line(mouseX, mouseY, x, y);
 
  background(0, 20); // slow fade
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
