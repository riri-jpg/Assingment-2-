/**
 * 
 *
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE TYPOGRAPHY CODE +Ai
 * 
 *
 * TITLE : DRIFT
 * DESCRIPTION: TEXT LINES MOVE GENTLY Lines USING NOISE INSTEAD OF RANDOM
 * BY :RINI
 *
 */

let overheardText;
let noiseOffsets = [];   // each line needs its own noise position
let t = 0;               // time — increases each frame to advance the noise

function preload() {
  overheardText = loadStrings('data/Catographer.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP); //left aling --rini
  textSize(22);

  // Give each line a different starting offset in noise space.
  for (let i = 0; i < 40; i++) {
    noiseOffsets.push(i * 100);   // spread them far apart in noise space
  }
}

function draw() {
  background('pink');   // paper-like off-white

  let baseX = width * 0.1;
  let y = 60;
  let lineH = 40;

  fill(40);
  stroke(1);
  

  for (let i = 0; i < overheardText.length; i++) {

    // NEW: noise(x) returns a smooth value between 0.0 and 1.0.
  
    let nVal = noise(t + noiseOffsets[i]);

    // map() converts the 0-1 noise value into a pixel drift (-60 to +90)-- ai help
    let xOffset = map(nVal, 0, 1, -60, 100);

    text(overheardText[i], baseX + xOffset, y);
    y += lineH;
  }

  // Movement speed -- rini
  t += 0.002;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
