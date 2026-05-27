/**
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE RANDOM LINES + AI CLAUDE ASSIST
 *
 * TITLE: PULSING LINES + IMAGE PULSE
 * DESCRIPTION: Lines pulse from mouse, image pulses from corner to corner
 * BY: RINI
 */

let counter = 0;
let img;

function preload() {
  img = loadImage('data/Pulse.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let pulse = sin(frameCount * 0.09);
  let radius = map(pulse, -1, 1, 50, 300);
  let bright = map(pulse, -1, 1, 80, 255);
  let t = frameCount * 0.02;  // ← THIS was missing!

  // 1. BACKGROUND FADE
  background(0, 60);

  // 2. IMAGE
  let imgX = map(sin(t), -1, 1, 0, width - 300);
  let imgY = map(cos(t * 0.7), -1, 1, 0, height - 300);
  let imgSize = map(pulse, -1, 1, 200, 350);
  tint(255, 180);
  image(img, imgX, imgY, imgSize, imgSize);
  noTint();

  // 3. LINES
  let angle = random(TWO_PI);
  let x = mouseX + cos(angle) * radius;
  let y = mouseY + sin(angle) * radius;
  let weight = random(0.5, 70);
  strokeWeight(weight);
  stroke(bright, random(bright * 0.5), random(bright));
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
S
