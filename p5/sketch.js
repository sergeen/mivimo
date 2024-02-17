function setup() {
  createCanvas(windowWidth, windowHeight);
}

function concentricCircles() {
  let size = width < height ? width : height;
  let circles = 5;
  let step = size / circles;
  for (let i = 0; i < circles; i++) {
    this.circle(
      // a randowm width never greater than 70% of the canvas
      random(width * 0.7),
      random(height * 0.7),
      size - i * step
    )
  }
}

function draw() {
  background(0);
  noStroke();
  const c = color(255, 255, 255, 10);
  fill(c);
  concentricCircles();
  concentricCircles();
  concentricCircles();
  concentricCircles();
  frameRate(1);
  filter(BLUR, 10);
  describe('This is realtime accesible?.');
}