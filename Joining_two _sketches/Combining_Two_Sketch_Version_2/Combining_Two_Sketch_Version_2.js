/**
 * Creative Coding 2026 - Rini
 * Made using Andy Simonata Foundational code for Randomness and Noise + Draw a square
 */

//let bgImage;
let smallImage;

function preload() {
  //load BEFORE the sketch, cause it may slow us down otherwise
  //bodyFont = loadFont("data/myfontname.otf");        //change to reflect YOUR font
  //bgImage = loadImage("data/DSC8113_sketch_CC.jpg");  //change this to reflect YOUR image
  smallImage = loadImage("data/layer1_2.png");        //change to yours
}

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
   // METHOD 4: Images can follow the mouse! Suggestion: use imageMode(CENTER) above
  // background(0);
   imageMode(CENTER); //looks better if the mouse is in the centre!
   image(smallImage, mouseX, mouseY, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //you can also add the bgImage in there to avoid weird resizing issues
}
