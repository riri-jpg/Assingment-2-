/**
 * MADE USING ANDY SIMONATA & KARENANN DONNACHIE ADVANCE GLITCH  & TYPOGRAPHY
 *
 * TITLE: GLITCHY TEXT
 * DESCRIPTION: IMAGE BG
 *              Horizontal scan lines
 *              Text scatters in random positions.
 *              Text grows bigger when mouse is close.
 * BY: RINI
 */
 
 
let backgroundOpacity;
let backgroundFadeDirection;
let img, imgXoffset;
let counter = 0; //this is for the screenshot function at the end of the code


// for the text bit -- rini
let myText;
let sizes = [];
let xPos = [];
let yPos = [];
let colors = [];   // stores the current colour of each line
let isHovered = []; // tracks if each line is being hovered


function preload() {
   
   img = loadImage('data/background_bg2.png');
    myText = loadStrings('data/clock.txt');
    
}

function setup() {
    // Create a full-screen canvas
    createCanvas(windowWidth, windowHeight);
   
    
    //for text
    colorMode(HSB, 360, 100, 100);
    textAlign(CENTER, CENTER);
    
    
    // Track opacity for the background fade effect (0 to 1)
    //backgroundOpacity = 0;
    //backgroundFadeDirection = 1; // 1 = increasing, -1 = decreasing
    
    for (let i = 0; i < 100; i++) {
    sizes[i] = 20;
    xPos[i] = random(100, width - 100);
    yPos[i] = random(50, height - 50);
    colors[i] = 0;      // 0 = white to start
    isHovered[i] = false;
  }
    
}

function draw() {
    
    

    //tint(255, int(backgroundOpacity * 255)); // Apply fade effect to the image
    
    if (random() < 0.01) {
        imgXoffset = random(-150, 150); // big horizontal glitchy shift
        image(img, imgXoffset, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    else { image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    
    
    
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
    
  
    
    // Glitchy scanlines - horizontal lines like old CRT monitors
    for (let y = 0; y < height; y += 9) {
        fill(0, 0, 0, random(0, 80)); // Black with varying transparency
        rect(0, y, width, 2); // Full width, 2px height
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
        let size = random(0.5, 3); // Random size for dots between 0.5 and 3
        let hue = random(0, 360); // Random hue for colorful noise
        let sat = random(80, 150); // Random saturation for vibrant colors
        let bri = random(100, 255); // Random brightness for visible dots
        
        fill(hue, sat, bri); // note the HSB color mode  
        circle(x, y, size); // Draw small circles for noise
    }
    
    
    
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
    
    draw_2();
}

function draw_2() {
  
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
    // Adjust canvas size when the window is resized
    resizeCanvas(windowWidth, windowHeight);
}


//---To Save 

function keyPressed() {
    // Press 's' to save a screenshot of the current canvas
    if (key === 's' || key === 'S') {
        saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg'); 
        counter++;
    }
}
