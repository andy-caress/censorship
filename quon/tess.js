var r;
var g;
var b;
var a;

var gw = 100; // grid width
var gh = 150; // grid height
var coords;

const msg = "tessellation";

function setup() {
  var cnv = createCanvas(500, 500);
  cnv.style('display', 'block');
  // background(0, 0, 0);
  tessellate();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function tessellate() {
  coords = generateShapes();
  for (var y = 0; y < height; y += gh) {
    for (var x = 0; x < width; x += gw) {
      fill(0, random(0, 255), random(0, 255));
      drawShape(coords, x, y);
    }
  }
}

function draw() {
  stroke(0, 0, 0, 0);
  particle.update();
  particle.show();
  r = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200, 255); // a is a random number between 200 - 255

  textFont('zorn');
}

function mouseClicked() {
  background(r, g, b, a);
  tessellate();
}

function drawShape(coords, x, y) {

  var centreX = coords[0][6];
  var centreY = coords[0][7];

  var transQtys = [centreX, centreY, -gw + centreX, centreY, centreX, -gh + centreY, -gw + centreX, -gh + centreY];

  for (var n = 0; n < 4; n += 1) {
    noStroke();
    push();
    translate(transQtys[n * 2], transQtys[n * 2 + 1]);

    beginShape();
    for (var i = 0; i < coords[0].length; i += 2) {
      vertex(x + coords[n][i], y + coords[n][i + 1]);
    }
    endShape(CLOSE);
    pop();
  }
}

/**
 * function to generate a shape that will tessellate
 */
function generateShapes() {
  // centreX and centreY are point where 4 shapes meet
  var centreX = floor((gw / 2) + random(-40, 40));
  var centreY = floor((gh / 2) + random(-40, 40));

  var gcorners = [0, 0, 0, gw, 0, gh, gw, gh]; // array to store grid corner coordinates

  var topCentrePoint = [floor((gw / 5) + random(-20, 20)), 0];
  var bottomCentrePoint = [floor(gw / 13) + random(-20, 20), gh];
  var leftCentrePoint = [0, floor((gh / 30) + random(-20, 20))];
  var rightCentrePoint = [gw, floor((gh / 16) + random(-20, 20))];

  var topMidPoint = [floor((gw / 2) + random(-20, 20)), floor((gh / 4) + random(-20, 20))];
  var rightMidPoint = [floor(gw - (gw / 4) + random(-20, 20)), floor((gh / 2) + random(-20, 20))];
  var leftMidPoint = [floor((gw / 4) + random(-20, 20)), floor((gh / 2) + random(-20, 20))];
  var bottomMidPoint = [floor((gw / 2) + random(-20, 20)), floor(gh - (gh / 4) + random(-20, 20))];

  var tile1Coords = [0, 0].concat(topCentrePoint).concat(topMidPoint).concat([centreX, centreY]).concat(leftMidPoint).concat(leftCentrePoint);
  var tile2Coords = topCentrePoint.concat([gw, 0]).concat(rightCentrePoint).concat(rightMidPoint).concat([centreX, centreY]).concat(topMidPoint);
  var tile3Coords = leftCentrePoint.concat(leftMidPoint).concat([centreX, centreY]).concat(bottomMidPoint).concat(bottomCentrePoint).concat([0, gh]);
  var tile4Coords = bottomCentrePoint.concat(bottomMidPoint).concat([centreX, centreY]).concat(rightMidPoint).concat(rightCentrePoint).concat([gw, gh]);
  var tileCoords = [tile1Coords, tile2Coords, tile3Coords, tile4Coords];

  return tileCoords;
}
