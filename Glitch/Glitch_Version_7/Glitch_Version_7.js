 //Using Andy Simonata Glict Tvcode as foundation
let backgroundOpacity;
let backgroundFadeDirection;
let img, imgXoffset;
let myFont;
let points;
let sampleF;

let counter = 0; //this is for the screenshot function at the end of the code

function preload() {
    // Preload the background image before setup runs
    // Image from Donnachie & Simionato's Evolution of nSpace movie, 
    // you can replace it with any image you like
    // but remember to update the file path and name in the next line!
    img = loadImage('data/Jewellery.jpg');
    myFont = loadFont("data/AdobeClean-It.otf");
    
}

function setup() {
    // Create a full-screen canvas
    createCanvas(windowWidth, windowHeight);
    // Set background to black (0,0,0)
    background(0);
    // Remove outlines from shapes
    noStroke();
    // Center text alignment
    textAlign(CENTER, CENTER);
    
    // Track opacity for the background fade effect (0 to 1)
    backgroundOpacity = 0;
    backgroundFadeDirection = 1; // 1 = increasing, -1 = decreasing
    setup_1();
}

function setup_1() {
  createCanvas(windowWidth, windowHeight);

  // This value controls how many points are generated on the text outline.
  sampleF = 0.07;

  // ---EXTRA ARRAY OF OUTLINES AND MAKE IT CENTER--- RINI
 let textW = myFont.textBounds('AAGO', 0, 0, 300).w;
 points = myFont.textToPoints('AAGO', (width / 2) - (textW / 2), height / 2, 300, {
  sampleFactor: sampleF,
  simplifyThreshold: 0
});


}

function draw() {
    
    // Fade background image in and out - increased speed for more obvious effect
    backgroundOpacity += backgroundFadeDirection * 0.005; // Adjust fade speed here (0.01 = 1% per frame)
    // Keep opacity between 0 and 1
    if (backgroundOpacity >= 1) {
        backgroundFadeDirection = -1;
    }
    if (backgroundOpacity <= 0) {
        backgroundFadeDirection = 1;
    }
    
    // Draw background image with fading opacity
    // Using the alpha parameter directly on the image() function
    // remember to set the global variables at the top of this code

    tint(255, int(backgroundOpacity * 255)); // Apply fade effect to the image
    
    if (random() < 0.01) {
        imgXoffset = random(-150, 150); // big horizontal glitchy shift
        image(img, imgXoffset, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    else { image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    
    // Randomly shift the image position for a glitch effect
    // The random() function generates a random number between the specified range
    // Here we create a random horizontal shift between -67 and 67 pixels
    // The vertical position is fixed at 0 to keep the image aligned with the top of the canvas
    
    // Glitchy background with random color shifts
    let glitchHue = random(0, 360);     // Random hue 0-360
    let glitchSat = random(25, 100);    // Random saturation
    let glitchBri = random(2, 10);      // Random brightness
    
    // Random glitch flashes - appears occasionally
    if (frameCount % random(10, 20) === 0) {
        // frameCount % random(10,50) creates unpredictable timing
        fill(random(0, 255), random(0, 255), random(0, 255), random(50, 100));
        // Full screen flash for glitch effect
        rect(0, 0, width, height);
    }
    
    // Glitchy pixel noise - simulates digital interference
    for (let i = 0; i < 10; i++) {
        let x = random(width);      // Random x position
        let y = random(height);     // Random y position
        let size = random(1, 5);    // Random pixel size
        let r = random(0, 255);     // Random red value
        let g = random(0, 255);     // Random green value
        let b = random(0, 255);     // Random blue value
        
        fill(r, g, b);              // RGB color mode
        rect(x, y, size, size);     // Draw small colored rectangles
    }
    
    // Glitchy color inversion effect - occasional screen flash
    if (frameCount % 35 === 0) {
        let invert = random(0, 1); // 0 = no invert, 1 = full invert
        fill(255 - invert * 255, invert * 255, invert * 255, 80); 
        rect(0, 0, width, height); // Flash entire screen
    }
    
    
    // Glitchy horizontal bars - random colored strips
    for (let i = 0; i < 15; i++) {
        let y = random(height);     // Random vertical position
        let h = random(2, 10);      // Random height
        let hue = random(0, 360);   // Random color
        let sat = random(80, 100);  // High saturation
        let bri = random(0, 50);    // Low brightness
        let alpha = random(0, 50);  // Very transparent
        
        fill(hue, sat, bri, alpha);
        rect(0, y, width, h);
    }
    
    // Glitchy random dots - more digital noise effect
    for (let i = 0; i < 400; i++) {
        let x = random(width); //pick a randomen x position
        let y = random(height); //pick a random y position
        let size = random(0.5, 8); // Random size for dots between 0.5 and 3
        let hue = random(0, 360); // Random hue for colorful noise
        let sat = random(80, 150); // Random saturation for vibrant colors
        let bri = random(100, 255); // Random brightness for visible dots
        
        fill(hue, sat, bri); // note the HSB color mode  
        circle(x, y, size); // Draw small circles for noise
    }
    
    // Glitchy random rectangles - scattered shapes
    //for (let i = 0; i < 15; i++) {
        //let x = random(width);
        //let y = random(height);
        //let w = random(600, 1200);
        //let h = random(100, 120);
        //let hue = random(100, 260);
        //let sat = random(80, 100);
        //let bri = random(50, 80);
        //let alpha = random(10, 15);
        
        //fill(hue, sat, bri, alpha);
       // rect(x, y, w, h);
   // }
    
    // Glitchy frame-based distortion - sine wave movement
    // Runs every 60 frames
    if (frameCount % 60 === 0) {
        // Calculate oscillating vertical offset using sine wave
        let yShift = sin(frameCount * 0.05) * 20;
        
        // Draw multiple horizontal lines with different offsets
        fill(255, 255, 255, 20); // White line
        rect(0, yShift, width, 5);
        
        fill(0, 255, 0, 20); // Green line
        rect(0, yShift + 10, width, 5);
        
        fill(255, 0, 255, 20); // Magenta line
        rect(0, yShift - 10, width, 5);
        
        // Additional distortion lines for stronger effect
        fill(255, 0, 0, 15); // Red line
        rect(0, yShift + 20, width, 3);
        
        fill(0, 0, 255, 15); // Blue line
        rect(0, yShift - 20, width, 3);
    }
    draw_1();
}


function draw_1() {
  // Clear the background every frame so our moving lines don't smear
  // "blue" works as a built-in web color, or you can use RGB values!
  //background("black");

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
    // Extract the exact X and Y coordinates for the current point
    let p = points[i];
    
    

    // --- 1. DRAW THE CONNECTING LINE --- RINI
    // The line connects the point's coordinates to our current mouse position.
    // We set the stroke (line color) to white, but add a 4th argument (100) for transparency!
    // This looks much cleaner when hundreds of lines overlap.
    //stroke(255, 255, 255, 50);
    //strokeWeight(2);
    //line(p.x, p.y, mouseX, mouseY);
    
    // -- MAKING THE CONNECTING LINE DOTTED --- RINI
    //drawDottedLine(p.x, p.y, mouseX, mouseY, 10); // 10 = gap between dots
    
     //let d = dist(p.x, p.y, mouseX, mouseY);
    
    // Map distance to circle size — closer to mouse = bigger circle
    //let circleSize = map(d, 0, 300, 40, 2);
    
 
    

    // --- 2. DRAW THE TWINKLING DOT ---
    // Generate a completely random RGB color every single frame for this specific dot
    //let randomDotColor = color('pink', 'yellow', 'white');

    // Set the fill to our random color, and give it a solid solid white outline
    //fill(randomDotColor);
    //stroke("white");
    //strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
     //ellipse(p.x, p.y, circleSize, circleSize);
  }
}


//---Instead of lines it's dotted lines--- Rini

function drawDottedLine(x1, y1, x2, y2, spacing) {
  let d = dist(x1, y1, x2, y2);
  let numDots = floor(d / spacing);
  
  for (let i = 0; i <= numDots; i++) {
    let t = i / numDots;
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    noStroke();
    fill(255, 255, 255, 150); // match your line color/alpha
    circle(x, y, 5); // dot size — change 2 to make bigger/smaller
  }
}





function windowResized() {
    // Adjust canvas size when the window is resized
    resizeCanvas(windowWidth, windowHeight);
}

//---To Save the File---

function keyPressed() {
    // Press 's' to save a screenshot of the current canvas
    if (key === 's' || key === 'S') {
        saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg'); 
        counter++;
    }
}
