/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 * 
 *
 * TITLE : GRADIENT STARS AND TEXT
 * DESCRIPTION: BG CHANGES COLOUR AS MOUSE MOVES 
 * BY :RINI
 *
 */


let myText;
let sizes = [];
let myFont;

function preload() {
  myText = loadStrings('data/Sunsets.txt');
  myFont = loadFont ('data/StayPuft.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, CENTER); // alighed the text to center -- rini
  textFont(myFont); 

  for (let i = 0; i < 100; i++) {
    sizes[i] = 20; //giving base size
  }
}

function draw() {
  
  // SUNSET GRADIENT — drawn top to bottom
  
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let h = lerp(280, 20, inter);   // soft lilac → peach
    let s = lerp(40, 50, inter);    // ← low saturation = pastel
    let b = lerp(90, 100, inter);   // ← high brightness = light and soft
    stroke(h, s, b);
    line(0, y, width, y);
  }
 
  

  // Text --- rini

  fill(0, 0, 100);  // ← white in HSB, stays white always
  let lineH = height / (myText.length + 1);

  for (let i = 0; i < myText.length; i++) {
    let fixedY = lineH * (i + 1);
    let d = dist(mouseX, mouseY, width / 2, fixedY);
    let targetSize = map(d, 0, 300, 90, 16);
    targetSize = constrain(targetSize, 16, 90);
    sizes[i] = lerp(sizes[i], targetSize, 0.1);
    textSize(sizes[i]);
    text(myText[i], width / 2, fixedY);
    }
  draw_2();
}

function draw_2() {
    // Adding stars -- rini
    // Add multiple particles per frame
    for (let i = 0; i < 150; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.2, 9); // Random radius for the star, smaller values for more distant stars
        let hue = ('white'); //  changed to white -- rini
        
        fill(hue, 80, 90); // Set fill color with random hue and some saturation and brightness
        noStroke(); // No outline for the stars
        circle(x, y, r); // Draw the star as a circle at the random position with the random radius
    }
    
    // Fade background faster for trails
    //background(0, 0, 0, 0.5); // Black background with low opacity to create a fading effect
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
