function setup() {
  createCanvas(windowWidth, windowHeight);
  originalSize = width < height ? width : height;
  createCluster();
}

let cluster = [];
let originalSize
let disipationSpeed = 1;

function createCluster() {
  for (let i = 0; i < 10; i++) {
    cluster.push({
      x: parseInt(random(0, width)),
      y: parseInt(random(0, height)),
      size: 0,
      direction: '<',
      // Agregar un random max size para que no todos se comporten ingual
      // Los circulos deberian describir una curva logaritmica, hacia el centro, no lineal
    })
  }
}

function concentricCircles(index, x, y, size, direction) {
  let circles = 10;
  let step = size / circles;

  for (let i = 0; i < circles; i++) {
    this.circle(
      x,
      y,
      size - i * step
    )
  }

  if (direction === '<') {
    cluster[index] = {
      ...cluster[index],
      size: size - disipationSpeed,
    }
  }
  if (direction === '>') {
    cluster[index] = {
      ...cluster[index],
      size: size + disipationSpeed,
    }
  }
  if ( size < 1 ) {
    cluster[index] = {
      ...cluster[index],
      direction: '>',
    }
  }
  if ( size > originalSize ) {
    cluster[index] = {
      ...cluster[index],
      direction: '<',
    }
  }
}

function circlesFromCluster() {
  for (let i = 0; i < cluster.length; i++) {
    concentricCircles(i, cluster[i].x, cluster[i].y, cluster[i].size, cluster[i].direction);
  }
}

function draw() {
  clear();
  background(255, 0);
  noStroke();
  const c = color(0, 0, 0, 10);
  fill(c);
  circlesFromCluster();
  //filter(BLUR, 1);
  frameRate(1);
  describe('This is realtime accesible?.');
}