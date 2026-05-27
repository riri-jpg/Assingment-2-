/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 * 
 *
 * TITLE : RAINBOW EFFECT
 * DESCRIPTION: LINES MAKE FLOWER 
 * BY :RINI
 *
 */

let blastText; // Array to store our lines of text

function preload() {
  // preload() runs before setup() and ensures files are fully loaded.
  // loadStrings() reads a text file and turns each line into one item in an array.
  blastText = loadStrings("data/blast_text.txt");
}

function setup() {
  // createCanvas uses the full browser window
  createCanvas(windowWidth, windowHeight);

  // Switched to Hsb colour mode
  colorMode(HSB, 360, 255, 255);
  
  textAlign(LEFT, TOP); // align text to the top-left corner

  // noLoop stops p5 from running the draw loop 60 times a second.
  // This is great for static designs or "one-off" layout experiments.
  noLoop();
}

function draw() {
  // Clear the background if the window was resized
  background('0');

  let margin = width * 0.1;       // 10% margin on the left
  let boxWidth = width * 0.8; // Use 80% of the screen width for text
  let y = 80;
  let fontSize = 32;

  textSize(fontSize);
  noStroke();   // no outline — just pure colour fill
  
  
  // Loop through every line of text we loaded
  for (let i = 0; i < blastText.length; i++) {

   // NEW: i * 30 spaces the hue evenly around the 360° colour wheel
    // So line 0 = red, line 1 = orange, line 2 = yellow, etc.
    fill(i * 30, 255, 255);

    text(blastText[i], margin, y, boxWidth);
    y += fontSize * 1.8;   // move down for next line
    
  }
}

// This function makes our sketch responsive to browser resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Because we use noLoop(), we have to manually tell p5 to "redraw"
  redraw();
}
