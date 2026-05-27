/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : FLOWER LINES COLOURFUL
 * DESCRIPTION: LINES MAKE FLOWER 
 * BY : RINI
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
  
  let pulse = sin(frameCount * 0.09);
  let radius = map(pulse, -1, 1, 50, 300);
  let angle = random(TWO_PI);
  let x = mouseX + cos(angle) * radius;
  let y = mouseY + sin(angle) * radius;

  // map mouseX (left to right) → red value (0 to 255)
  let r = map(mouseX, 0, width, 0, 255);

  // map mouseY (top to bottom) → blue value (255 to 0)
  let b = map(mouseY, 0, height, 255, 0);

  // green stays random for extra vibrancy
  let g = random(100, 255);

  let weight = random(0.1, 20);
  strokeWeight(weight);
  stroke(r, g, b); // colour now driven by mouse position

  line(mouseX, mouseY, x, y);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(`Random_lines_version${nf(counter, 3)}`, 'jpg');
    counter++;
  }
}
