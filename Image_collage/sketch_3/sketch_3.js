/**
 * CREATED USING ANDY SIMONATA IMAGES COLLAGE AND ARRAYS +AI ASSIST
 *
 * TITLE : PULSATE 
 * DESCRIPTION : THE IMAGES PULSATE LIKE IT'S BRATHING, 
 * ZOOMS IN AND OUT AND CHANGES WITH CLICK
 */

let layer1Images = [];
let layer2Images = [];
let layer3Images = [];
let layer1Items  = [];
let layer2Items  = [];
let layer3Items  = [];

function preload() {
  // LAYER 1 — backgrounds & textures -- ADDED MORE THAN ONE IMAGES -- RINI
  layer1Images.push(loadImage('data/bg.jpg'));
  layer1Images.push(loadImage('data/Painting.jpg'));
  layer1Images.push(loadImage('data/landscapephoto.jpg'));

  // LAYER 2 — full body / fashion shots -- ADDED MORE THAN ONE IMAGES -- RINI
  layer2Images.push(loadImage('data/standingwomen.jpg'));
  layer2Images.push(loadImage('data/bluetop.jpg'));
  layer2Images.push(loadImage('data/pinkchair.jpeg'));

  // LAYER 3 — close-up details -- ADDED MORE THAN ONE IMAGES -- RINI
  layer3Images.push(loadImage('data/Blondhair.jpeg'));
  layer3Images.push(loadImage('data/Hair.jpg'));
  layer3Images.push(loadImage('data/Necklace.jpeg'));
  layer3Images.push(loadImage('data/eyes.jpg'));
  layer3Images.push(loadImage('data/lipstick.jpeg'));
  layer3Images.push(loadImage('data/Pulse.jpg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  // NO noLoop() — animation needed
  layer1Items = generateCollageItems(layer1Images, 1, width/2, height/2, width/3,  height/4, 0.5, 1.5, 0,        PI);
  layer2Items = generateCollageItems(layer2Images, 1, width/2, height/2, width/2,  height/3, 0.2, 1.0, -HALF_PI, HALF_PI);
  layer3Items = generateCollageItems(layer3Images, 1, width/2, height/2, width/2,  height,   0.4, 0.8, PI,       HALF_PI);
}

function draw() {
  background(255);
  drawPulseItems(layer1Items);
  drawPulseItems(layer2Items);
  drawPulseItems(layer3Items);
}

// NEW: animated scale using sin()
function drawPulseItems(items) {
  let pulseAmount = 0.3;
  for (let i = 0; i < items.length; i++) {
    let item         = items[i];
    let pulse        = sin(frameCount * item.pulseSpeed + item.pulseOffset);
    let currentScale = item.scaling + pulse * pulseAmount;
    push(); translate(item.x, item.y);
    rotate(item.rotation); scale(currentScale);
    image(item.image, 0, 0); pop();
  }
}

function generateCollageItems(imgArray, count, centerX, centerY,
                               rangeX, rangeY, minScale, maxScale,
                               minRotation, maxRotation) {
  let items = [];
  if (imgArray.length === 0) { console.warn("No images!"); return items; }
  for (let i = 0; i < count; i++) {
    let item          = new CollageItem(random(imgArray));
    item.x            = centerX + random(-rangeX/2, rangeX/2);
    item.y            = centerY + random(-rangeY/2, rangeY/2);
    item.rotation     = random(minRotation, maxRotation);
    item.scaling      = random(minScale, maxScale);
    item.pulseSpeed   = random(0.01, 0.05); // NEW
    item.pulseOffset  = random(TWO_PI);     // NEW
    items.push(item);
  }
  return items;
}

function CollageItem(image) {
  this.image = image; this.x = 0; this.y = 0;
  this.rotation = 0; this.scaling = 1;
  this.pulseSpeed = 0.02; this.pulseOffset = 0; // NEW
}

function mousePressed() { setup(); }
function windowResized() { resizeCanvas(windowWidth, windowHeight); setup(); }
