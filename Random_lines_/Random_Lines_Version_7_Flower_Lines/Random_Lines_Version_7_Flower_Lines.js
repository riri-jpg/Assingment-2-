/**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 * 
 * TITLE : FLOWER LINES
 * DESCRIPTION: LINES MAKE FLOWER 
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
  // sin() creates a smooth wave between -1 and +1
  // frameCount increases by 1 every frame
  // multiplying by 0.05 slows the wave down
 let pulse = sin(frameCount * 0.09);
 
 // so that lines vary between short and long
 let radius = map(pulse, -1, 1, 50, 300);
 
 // Mapping pulse to brightness so the canvas brightens on each beat
 let bright = map(pulse, -1, 1, 80, 255);

 // Draw lines radiating within the pulse radius
  let angle = random(TWO_PI); // random direction -- Ai help
  let x = mouseX + cos(angle) * radius; // endpoint using angle + radius
  let y = mouseY + sin(angle) * radius; 
  
  
 
 // making the weight random -- rini
  let weight = random(0.1, 20); // made max to be 70 --rini
  strokeWeight(weight);
  
  // making random brightness -- rini
  stroke(bright, random(bright * 0.5), random(bright)); 
  
  line(mouseX, mouseY, x, y);
 
  //background('pink'); // slow fade REMOVED
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
