/**
 * Creative Coding 2026 - Rini
 * Made using Andy Simonata Foundational code for Randomness and Noise + Draw a square
 */

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("Blue");
    setup_2();
}


function setup_2() 
{
  // Always create your canvas first!
  createCanvas(windowWidth, windowHeight);

  // Draw our background inside setup() so it only draws once.
  // Because it only draws once, our squares will leave a "trail" as we move the mouse!
  background('pink'); // rgb(0, 255, 0) makes a nice bright green

  // (Optional) Draw shapes from their center rather than their top-left corner.
  // This makes the square perfectly centered right under the tip of the mouse arrow.
  rectMode(CENTER);
}

// This is the stars
function draw() {
    // Add multiple particles per frame
    for (let i = 0; i < 3; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.5, 6); // Random radius for the star, smaller values for more distant stars
        let hue = random(500); // Random hue for color variation (used for our HSB)
        
        fill('black'); //changed the fill to be black
        noStroke(); 
        triangle(x, y, x + r, y + r*2, x - r, y + r*2); // Changed it to triangle - RINI
    }
    
    // Fade background faster for trails
    background(0, 0, 0, 0.5); // Black background with low opacity to create a fading effect
    
    draw_2();
}

function draw_2()
{
  // 1. SET THE STYLING FIRST
  // The golden rule of p5.js: Always set your colors and line thickness *before* drawing the shape.
  stroke('white');   // Make the outline white - RINI
  strokeWeight(5);    // Make the outline 15 pixels - RINI

  // 2. CHECK FOR INTERACTION AND SET THE FILL COLOR
  // We use an 'if/else' statement to check a logical condition
  if (mouseIsPressed) {
    // If the mouse button IS being held down right now...
    fill(255, 255, 0); // Fill the square with yellow
  } else {
    // If the mouse button is NOT being held down...
    fill(255, 230, 238);   // Filled it with light Pink - RINI
  }

  // 3. DRAW THE SHAPE
  // Draw the square exactly at the mouse's current X and Y coordinates.
  // It will have a width and height of 60 pixels.
  circle(mouseX, mouseY, 30);
}
