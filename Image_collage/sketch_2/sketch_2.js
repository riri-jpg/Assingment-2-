/**
 * CREATED USING ANDY SIMONATA IMAGES COLLAGE AND ARRAYS +AI ASSIST
 *
 * TITLE : TRAIL EFFECT
 * DESCRIPTION : THE IMAGES HAVE GHOST TRAIL WHERE THE IMAGES GETS REPEATED BUT SLOWLY DISSAPEARS AND BECOMES TRANSPARENT
 *
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
  noLoop();
  layer1Items = generateCollageItems(layer1Images, 3, width/2, height/2, width,     height,   0.5, 1.5, 0,        PI);
  layer2Items = generateCollageItems(layer2Images, 3, width/2, height/2, width/2,   height/3, 0.2, 1.0, -HALF_PI, HALF_PI);
  layer3Items = generateCollageItems(layer3Images, 4, width/2, height/2, width/1.5, height,   0.4, 0.8, PI,       HALF_PI);
}

function draw() {
  background(255);
  drawGhostItems(layer1Items);
  drawGhostItems(layer2Items);
  drawGhostItems(layer3Items);
}

function drawGhostItems(items) {
  let ghostCount = 8; // i can increase no of trails here -- rini
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    for (let g = ghostCount; g >= 0; g--) {
      let alpha  = map(g, ghostCount, 0, 20, 255);
      let offset = g * 15;
      tint(255, alpha);
      push();
        translate(item.x + offset, item.y + offset);
        rotate(item.rotation + g * 0.05); // this rotates the image trails --rini
        scale(item.scaling);
        image(item.image, 0, 0);
      pop();
    }
    noTint();
  }
}
function generateCollageItems(imgArray, count, centerX, centerY,
                               rangeX, rangeY, minScale, maxScale,
                               minRotation, maxRotation) {
  let items = [];
  if (imgArray.length === 0) { console.warn("No images loaded!"); return items; }
  for (let i = 0; i < count; i++) {
    let item      = new CollageItem(random(imgArray));
    item.x        = centerX + random(-rangeX/2, rangeX/2);
    item.y        = centerY + random(-rangeY/2, rangeY/2);
    item.rotation = random(minRotation, maxRotation);
    item.scaling  = random(minScale, maxScale);
    items.push(item);
  }
  return items;
}

function drawCollageItems(items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    push(); translate(item.x, item.y);
    rotate(item.rotation); scale(item.scaling);
    image(item.image, 0, 0); pop();
  }
}

function CollageItem(image) {
  this.image = image; this.x = 0; this.y = 0;
  this.rotation = 0; this.scaling = 1;
}

function mousePressed() { setup(); redraw(); }
function windowResized() { resizeCanvas(windowWidth, windowHeight); setup(); redraw(); }
