/**
 * MADE USING ANDY SIMONATA STRINGS AND STARS
 *
 * TITLE: TEXT AND STARS
 * DESCRIPTION: Triangle stars that fade 
 *              Text scatters in random positions.
 *              Text grows bigger when mouse is close.
 * BY: RINI
 */

let myText;
let sizes = [];
let xPos = [];  // random x position for each line
let yPos = [];  // random y position for each line

function preload() {
  myText = loadStrings('data/clock.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  textAlign(random, random); // text are along aligned randomly -- rini

  for (let i = 0; i < 100; i++) {
    sizes[i] = 20;
    
    // give each line a random position on the canvas using random fucntion for x and y 
    xPos[i] = random(100, width - 100);
    yPos[i] = random(50, height - 50);
  }
  
}

function draw() {
    // Add multiple particles per frame
    for (let i = 0; i < 3; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.5, 6); // Random radius for the star, smaller values for more distant stars
        let hue = random(500); // Random hue for color variation (used for our HSB)
        
        fill('yellow'); //changed the fill to be black
        
        
        triangle(x, y, x + r, y + r*2, x - r, y + r*2); // Changed it to triangle - RINI
    }
    
    // Fade background faster for trails
    background(0, 0, 0, 0.1); // added fading opacity --rini
    
    draw_2();
}

  
  
  
  function draw_2() {
  
  //let h = map(mouseX, 0, width, 0, 360);
  //let b = map(mouseY, 0, height, 80, 30);
  //background('blue');

  noStroke();
  fill(0, 0, 100);

  for (let i = 0; i < myText.length; i++) {
    // distance from mouse to this line's random position
    let d = dist(mouseX, mouseY, xPos[i], yPos[i]);

    let targetSize = map(d, 0, 300, 90, 16);
    targetSize = constrain(targetSize, 16, 90);
    sizes[i] = lerp(sizes[i], targetSize, 0.1);

    textSize(sizes[i]);
    text(myText[i], xPos[i], yPos[i]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
