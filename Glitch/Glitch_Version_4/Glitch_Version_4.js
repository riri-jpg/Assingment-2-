 /**
 * 
 * 
 * MADE USING ANDY SIMONATA FOUNDATIONAL CODE GLITCH
 * 
 * TITLE : SPLIT AND GLITCH 
 * DESCRIPTION: ADDED TWO IMAGES AND SPLIT IT HORIZONTALLY AND MADE RECTANGLES TRASNPARENT 
 * BY :RINI
 *
 */
 

 let backgroundOpacity;
let backgroundFadeDirection;
 
// NEW: two images, each with their own opacity tracker
let img1, img2;
let opacity1 = 0;
let opacity2 = 0;
let fadeDir1  = 1;
let fadeDir2  = -1; // starts fading in opposite direction for variety
 
let counter = 0;
 
function preload() {
    img1 = loadImage('data/Eraya.jpg');   // TOP image
    img2 = loadImage('data/shoes.jpg');  // BOTTOM image — swap filename here!
}
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    textAlign(CENTER, CENTER);
}
 
function draw() {
 
    // ── FADE both images independently ──────────────────────
    opacity1 += fadeDir1 * 0.005;
    if (opacity1 >= 1) fadeDir1 = -1;
    if (opacity1 <= 0) fadeDir1 =  1;
 
    opacity2 += fadeDir2 * 0.007; // slightly different speed
    if (opacity2 >= 1) fadeDir2 = -1;
    if (opacity2 <= 0) fadeDir2 =  1;
 
    // ── TOP HALF — img1 with vertical slices ────────────────
    let numSlices = 8;
    let sliceW    = width / numSlices;
    let splitY    = height / 2; // where the two halves divide
 
    // Clip drawing to the TOP half using p5 clipping
    // We achieve this by using the image crop parameters:-- AI HELP
    // destination y=0, destination height=splitY
    // source crops the matching top portion of the image
 
    tint(255, int(opacity1 * 255));
 
    for (let i = 0; i < numSlices; i++) {
        let sx     = (i / numSlices) * img1.width;
        let sw     = img1.width / numSlices;
        let dx     = i * sliceW;
        let offset = 0;
 
        // 10% chance this slice glitches sideways
        if (random() < 0.1) {
            offset = random(-80, 80);
        }
 
        // Draw the top half of img1 — note destination height = splitY
        // source height = top half of the image proportionally
        image(img1,
              dx + offset, 0,       // destination x, y
              sliceW, splitY,        // destination width, height (half screen)
              sx, 0,                 // source x, y
              sw, img1.height / 2); // source width, height (top half of image)
    }
 
    // ── BOTTOM HALF — img2 with its own independent slices ──
    tint(255, int(opacity2 * 255));
 
    for (let i = 0; i < numSlices; i++) {
        let sx     = (i / numSlices) * img2.width;
        let sw     = img2.width / numSlices;
        let dx     = i * sliceW;
        let offset = 0;
 
        // Slightly higher chance of glitch for bottom half (different feel)
        if (random() < 0.12) {
            offset = random(-60, 60);
        }
 
        // Draw the bottom half of img2
        // destination starts at splitY, source starts at middle of image
        image(img2,
              dx + offset, splitY,   // destination x, y (starts halfway down)
              sliceW, splitY,         // destination width, height (half screen)
              sx, img2.height / 2,    // source x, y (bottom half of image)
              sw, img2.height / 2);   // source width, height
    }
 
    //--- DIVIDING LINE — subtle glitchy seam between halves --
    // Randomly flickers and shifts to break the hard cut
    if (random() < 0.3) {
        let lineY = splitY + random(-6, 6);    // wobble the seam
        fill(255, 255, 255, random(20, 100));   // white seam flash
        rect(0, lineY, width, random(1, 4));
    }
    // Occasionally draw a coloured seam
    if (random() < 0.08) {
        fill(random(0,255), random(0,255), random(0,255), random(60, 150));
        rect(0, splitY + random(-20, 20), width, random(2, 8));
    }
 
    noTint(); // reset tint before drawing all other effects
 
    // ── GLITCH EFFECTS (apply to full screen) ───────────────
 
    // Glitch flash
    if (frameCount % random(10, 20) === 0) {
        fill(random(0, 255), random(0, 255), random(0, 255), random(50, 100));
        rect(0, 0, width, height);
    }
 
    // Pixel noise
    for (let i = 0; i < 10; i++) {
        let x    = random(width);
        let y    = random(height);
        let size = random(1, 5);
        fill(random(0, 255), random(0, 255), random(0, 255));
        rect(x, y, size, size);
    }
 
    // Colour inversion flash
    //if (frameCount % 35 === 0) {
        //let invert = random(0, 1);
        //fill(255 - invert * 255, invert * 255, invert * 255, 80);
        //rect(0, 0, width, height);
    //}
 
   
 
    // Scanlines -- removed this -- rini
    //for (let y = 0; y < height; y += 9) {
        //fill(0, 0, 0, random(0, 80));
        //rect(0, y, width, 2);
    //}
 
    // Horizontal bars
    for (let i = 0; i < 15; i++) {
        let y     = random(height);
        let h     = random(2, 10);
        let hue   = random(0, 360);
        let sat   = random(80, 100);
        let bri   = random(0, 50);
        let alpha = random(0, 50);
        fill(hue, sat, bri, alpha);
        rect(0, y, width, h);
    }
 
    // Random dots --- REMOVED THIS -- rini
    //for (let i = 0; i < 400; i++) {
        //let x    = random(width);
        //let y    = random(height);
        //let size = random(0.5, 3);
        //fill(random(0, 360), random(80, 150), random(100, 255));
        //circle(x, y, size);
    //}
 
    // Random rectangles
 for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(600, 1200);
    let h = random(100, 120);
    fill(255, 255, 255, 25);  // white fill, ~10% opacity (25 out of 255)
    stroke(255, 255, 255);    // white stroke
    strokeWeight(1);
    rect(x, y, w, h);
}
noStroke();

    // Frame distortion
    //if (frameCount % 60 === 0) {
        //let yShift = sin(frameCount * 0.05) * 20;
        //fill(255, 255, 255, 20); rect(0, yShift, width, 5);
        //fill(0, 255, 0, 20);    rect(0, yShift + 10, width, 5);
        //fill(255, 0, 255, 20);  rect(0, yShift - 10, width, 5);
        //fill(255, 0, 0, 15);    rect(0, yShift + 20, width, 3);
        //fill(0, 0, 255, 15);    rect(0, yShift - 20, width, 3);
    //}
}
 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg');
        counter++;
    }
}
