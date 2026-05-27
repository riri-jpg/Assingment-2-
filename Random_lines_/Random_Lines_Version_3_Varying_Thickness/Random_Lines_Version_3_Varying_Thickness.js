/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : VARY THICKNESS
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
  background(0);
}
 
function draw()  {
  let x = random(width);
  let y = random(height);
 
  stroke('pink'); // made colour to be pink only --rini
  
 
 // making the weight random -- rini
 let weight = random(0.5, 15);
  strokeWeight(weight);
  
  // Thicker lines get a slightly different colour to stand out
  // map() converts weight (0.5-15) to brightness (50-255)
  let brightness = map(weight, 0.5, 15, 50, 255);
  stroke(random(255), random(brightness), random(255));
  
  // Draw more lines per frame (5 instead of 1)
  
  for (let i = 0; i < 10; i++) { // changing it to 10 -- rini
    let x2 = random(width);
    let y2 = random(height);
    line(mouseX, mouseY, x2, y2);
  }


// background opacity is made 5 so the lines stay much longer- Rini
 background(0, 15);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
