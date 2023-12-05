let inc = 0.05;
let scl = 20;
let cols, rows;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1, 1); // Use HSB color space with an alpha range
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(0, 0.05); // Add an alpha value to the background
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let noiseValue = noise(xoff, yoff, zoff);
      let angle = noiseValue * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      stroke(noiseValue, 1, 1, 0.05); // Use noise value as hue and 0.5 as alpha
      strokeWeight(2);
      line(0, 0, 30, 0);
      pop();
    }
    yoff += inc;
    zoff += 0.0001;
  }
}
