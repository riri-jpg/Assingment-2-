/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE +Ai
 * 
 *
 * TITLE : TELEPROMPTER
 * DESCRIPTION: TEXT LINES MOVE UPWARDS AND DISSAPEARS
 * BY :RINI
 *
 */

let countText;
let scrollY = 0;  // tracks how far up the text has scrolled
let colors = [] // for storing random colours 

function preload() {
  countText = loadStrings('data/Catographer.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  textAlign(CENTER, BOTTOM);
  
  // give each line a random hue once at the start
  for (let i = 0; i < 100; i++) {
    colors[i] = random(360);  // random hue 0-360
  }   
}



function draw() {
  background(0, 0, 15);

  let cx = width / 2;
  let y = height - 20 - scrollY;
  noStroke();

  // track the total height as we draw
  let totalHeight = 0;

  for (let i = countText.length - 1; i >= 0; i--) {
    let sz = map(i, 0, countText.length - 1, 60, 8);
    textSize(sz);
    fill(colors[i], 80, 100);
    text(countText[i], cx, y);
    y -= textSize() * 1.2;
    totalHeight += textSize() * 1.2;  // add each line's height
  }

  scrollY += 0.5;

  // reset when text has fully gone off the top
  if (scrollY > totalHeight + height) {
    scrollY = 0;
    for (let i = 0; i < 100; i++) {
      colors[i] = random(360);
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
