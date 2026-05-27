/**
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE
 *
 * TITLE: RANDOM POSITION
 * DESCRIPTION: BG changes colour as mouse moves.
 *              Text scatters in random positions.
 *              Text grows bigger when mouse is close.
 * BY: RINI
 */

let myText;
let img;
let sizes = [];
let xPos = [];
let yPos = [];
let colors = [];   // stores the current colour of each line
let isHovered = []; // tracks if each line is being hovered

function preload() {
  myText = loadStrings('data/clock.txt');
  img = loadImage('data/Backgroundimage.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 100; i++) {
    sizes[i] = 20;
    xPos[i] = random(100, width - 100);
    yPos[i] = random(50, height - 50);
    colors[i] = 0;      // 0 = white to start
    isHovered[i] = false;
  }
}

function draw() {
  image(img, 0, 0, width, height);
  noStroke();

  for (let i = 0; i < myText.length; i++) {
    let d = dist(mouseX, mouseY, xPos[i], yPos[i]);

    // zoom effect
    let targetSize = map(d, 0, 300, 90, 16);
    targetSize = constrain(targetSize, 16, 90);
    sizes[i] = lerp(sizes[i], targetSize, 0.1);
    textSize(sizes[i]);

    // hover check — if mouse is within 60px of this line
    if (d < 60) {
      // mouse is close — pick a random colour if not already hovered
      if (!isHovered[i]) {
        colors[i] = random(360);  // pick a new random hue
        isHovered[i] = true;
      }
      fill(colors[i], 90, 100);  // show the random colour
    } else {
      // mouse is far — show white
      isHovered[i] = false;
      fill(0, 0, 100);  // white in HSB
    }

    text(myText[i], xPos[i], yPos[i]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
