let weight;
let pulleyRope;
let pulley1;
let pulley2;
let pulley3;
let pulley4;

function setup() {
  let canvas = createCanvas(600, 800);
  canvas.parent("p5-simulation-container");
  frameRate(60);
  rectMode(CORNERS);
  textFont('TimesNewRoman');
}

function draw() {
  background(200);

  // draws the pulleys
  switch (numSelect.value) {
    case "1":
      drawP1();
      break;
    case "2":
      drawP2();
      break;
    case "3":
      drawP3();
      break;
    case "4":
      drawP4();
      break;
    case "4.2":
      drawP42();
      break;
  }

  drawScale(750);
}





/**
 * This function draws the configuration with 1 pulley
 */
function drawP1() {
  // updates to positions
  if (pulleyRope.dragging) {
    pulleyRope.update(mouseX, mouseY);
  }
  pulley1.update(pulleyRope.defaultLength, 0, 1);
  weight.update(pulleyRope.defaultLength, 1);
  
  // drawing ropes that connect objects
  strokeWeight(1);
  stroke(0);
  line(pulley1.x-pulley1.radius, pulley1.y, weight.x, weight.y); // rope from pulley1 to weight

  // drawing objects
  pulleyRope.show();
  pulley1.show();
  weight.show();

  // drawing frame
  fill(0);
  circle(pulley1.x, pulley1.y, 10);
  strokeWeight(6);
  line(pulley1.x, 0, pulley1.x, pulley1.y);
  strokeWeight(1);
  rect(0, 750, 600, 800);

  // drawing dimensions
  drawDimension(pulley1.y, weight.y-10, pulley1.x-pulley1.radius-30, "S", "b");
  drawDimension(pulley1.y, pulley1.y+pulleyRope.defaultLength+50, pulley1.x+pulley1.radius+30, "S", "a");
  drawArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, 0);

  // drawing equations
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(120, 0, 120);
  stroke(120, 0, 120);
  text("L = Rope Length", 350, 300);
  text("R = Red Dimensions", 350, 320);
  text("L = R + Sa + Sb", 350, 380);
  text("0 = Va + Vb", 350, 400);
  text("0 = Aa + Ab", 350, 420);
}

/**
 * This function draws the configuration with 2 pulleys
 */
function drawP2() {
  // updates to positions
  if (pulleyRope.dragging) {
    pulleyRope.update(mouseX, mouseY);
  }
  pulley1.update(pulleyRope.defaultLength, 0, 1);
  pulley2.update(pulleyRope.defaultLength, 1/2, 1/2);
  weight.update(pulleyRope.defaultLength, 1/2);

  // drawing ropes that connect objects
  stroke(0);
  strokeWeight(1);
  line(pulley1.x-pulley1.radius, pulley1.y, pulley2.x-pulley2.radius, pulley2.y); // rope from pulley1 to pulley2
  line(pulley2.x+pulley2.radius, pulley2.y, pulley2.x+pulley2.radius, pulley1.y+pulley1.radius*2); // rope from pulley2 to support

  // drawing objects
  pulleyRope.show();
  pulley1.show();
  pulley2.show();
  weight.show();

  // drawing frame
  fill(0);
  circle(pulley1.x, pulley1.y, 10);
  circle(pulley2.x, pulley2.y, 10);
  circle(pulley2.x+pulley2.radius, pulley1.y+pulley1.radius*2, 10);
  strokeWeight(6);
  line(pulley1.x, 0, pulley1.x, pulley1.y+pulley1.radius*2);
  line(pulley1.x, pulley1.y+pulley1.radius*2, pulley2.x+pulley2.radius, pulley1.y+pulley1.radius*2);
  line(weight.x, weight.y, weight.x, pulley2.y);
  strokeWeight(1);
  rect(0, 750, 600, 800);

  // drawing dimensions
  drawDimension(pulley1.y+pulley1.radius*2, pulley2.y, pulley1.x-pulley1.radius-30, "S", "b");
  drawDimension(pulley1.y, pulley1.y+pulleyRope.defaultLength+50, pulley1.x+pulley1.radius+30, "S", "a");
  drawArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, 0, pulley1.radius*2);
  drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI);

  // drawing equations
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(120, 0, 120);
  stroke(120, 0, 120);
  text("L = Rope Length", 350, 300);
  text("R = Red Dimensions", 350, 320);
  text("L = R + Sa + 2*Sb", 350, 380);
  text("0 = Va + 2*Vb", 350, 400);
  text("0 = Aa + 2*Ab", 350, 420);
}

/**
 * This function draws the configuration with 3 pulleys
 */
function drawP3() {
  // updates to positions
  if (pulleyRope.dragging) {
    pulleyRope.update(mouseX, mouseY);
  }
  pulley1.update(pulleyRope.defaultLength, 0, 1);
  pulley2.update(pulleyRope.defaultLength, 1/3, 2/3);
  pulley3.update(pulleyRope.defaultLength, 0, 1/3);
  weight.update(pulleyRope.defaultLength, 1/3);

  // drawing ropes that connect objects
  stroke(0);
  strokeWeight(1);
  line(pulley1.x-pulley1.radius, pulley1.y, pulley2.x-pulley2.radius, pulley2.y); // rope from pulley1 to pulley2
  line(pulley2.x+pulley2.radius, pulley2.y, pulley3.x+pulley3.radius, pulley3.y); // rope from pulley2 to pulley3
  line(pulley3.x-pulley3.radius, pulley3.y, pulley3.x-pulley3.radius, pulley2.y-pulley2.radius*2); // rope from pulley3 to support

  // drawing objects
  pulleyRope.show();
  pulley1.show();
  pulley2.show();
  pulley3.show();
  weight.show();

  // drawing frame
  fill(0);
  circle(pulley1.x, pulley1.y, 10);
  circle(pulley2.x, pulley2.y, 10);
  circle(pulley3.x, pulley3.y, 10);
  circle(pulley3.x-pulley3.radius, pulley2.y-pulley2.radius*2, 10);
  strokeWeight(6);
  line(pulley1.x, 0, pulley1.x, pulley3.y);
  line(weight.x, weight.y, weight.x, pulley2.y-pulley2.radius*2);
  line(pulley2.x, pulley2.y-pulley2.radius*2, pulley3.x-pulley3.radius, pulley2.y-pulley2.radius*2);
  strokeWeight(1);
  rect(0, 750, 600, 800);

  // drawing dimensions
  drawDimension(pulley3.y, pulley2.y-pulley2.radius*2, pulley1.x-pulley1.radius-30, "S", "b");
  drawDimension(pulley1.y, pulley1.y+pulleyRope.defaultLength+50, pulley1.x+pulley1.radius+30, "S", "a");
  drawArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, 0, pulley1.radius*2);
  drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI, -pulley2.radius*2, -pulley2.radius*2);
  drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0);

  // drawing equations
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(120, 0, 120);
  stroke(120, 0, 120);
  text("L = Rope Length", 350, 300);
  text("R = Red Dimensions", 350, 320);
  text("L = R + Sa + 3*Sb", 350, 380);
  text("0 = Va + 3*Vb", 350, 400);
  text("0 = Aa + 3*Ab", 350, 420);
}

/**
 * This function draws the configuration with 4 pulleys
 */
function drawP4() {
  // updates to positions
  if (pulleyRope.dragging) {
    pulleyRope.update(mouseX, mouseY);
  }
  pulley1.update(pulleyRope.defaultLength, 0, 1);
  pulley2.update(pulleyRope.defaultLength, 1/4, 3/4);
  pulley3.update(pulleyRope.defaultLength, 0, 2/4);
  pulley4.update(pulleyRope.defaultLength, 1/4, 1/4);
  weight.update(pulleyRope.defaultLength, 1/4);

  // drawing ropes that connect objects
  stroke(0);
  strokeWeight(1);
  line(pulley1.x-pulley1.radius, pulley1.y, pulley2.x-pulley2.radius, pulley2.y); // rope from pulley1 to pulley2
  line(pulley2.x+pulley2.radius, pulley2.y, pulley3.x+pulley3.radius, pulley3.y); // rope from pulley2 to pulley3
  line(pulley3.x-pulley3.radius, pulley3.y, pulley4.x-pulley4.radius, pulley4.y); // rope from pulley3 to pulley4
  line(pulley4.x+pulley4.radius, pulley4.y, pulley4.x+pulley4.radius, pulley3.y+pulley3.radius*2); // rope from pulley4 to support

  // drawing objects
  pulleyRope.show();
  pulley1.show();
  pulley2.show();
  pulley3.show();
  pulley4.show();
  weight.show();

  // drawing frame
  fill(0);
  circle(pulley1.x, pulley1.y, 10);
  circle(pulley3.x, pulley3.y, 10);
  circle(pulley2.x, pulley2.y, 10);
  circle(pulley4.x, pulley4.y, 10);
  circle(pulley4.x+pulley4.radius, pulley3.y+pulley3.radius*2, 10);
  strokeWeight(6);
  line(pulley1.x, 0, pulley1.x, pulley3.y+pulley3.radius*2);
  line(pulley1.x, pulley3.y+pulley3.radius*2, pulley4.x+pulley4.radius, pulley3.y+pulley3.radius*2);
  line(weight.x, weight.y, weight.x, pulley4.y);
  strokeWeight(1);
  rect(0, 750, 600, 800);

  // drawing dimensions
  drawDimension(pulley3.y+pulley3.radius*2, pulley2.y-pulley2.radius*2, pulley1.x-pulley1.radius-30, "S", "b");
  drawDimension(pulley1.y, pulley1.y+pulleyRope.defaultLength+50, pulley1.x+pulley1.radius+30, "S", "a");
  drawArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, 0, pulley1.radius*2+pulley3.radius*2);
  drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI, -pulley2.radius*2, -pulley2.radius*2);
  drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0, pulley3.radius*2, pulley3.radius*2);
  drawArc(pulley4.x, pulley4.y, pulley4.radius+10, 0, PI);

  // drawing equations
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(120, 0, 120);
  stroke(120, 0, 120);
  text("L = Rope Length", 350, 300);
  text("R = Red Dimensions", 350, 320);
  text("L = R + Sa + 4*Sb", 350, 380);
  text("0 = Va + 4*Vb", 350, 400);
  text("0 = Aa + 4*Ab", 350, 420);
}

/**
 * This function draws the configuration with 4.2 pulleys
 */
 function drawP42() {
  // updates to positions
  if (pulleyRope.dragging) {
    pulleyRope.linearUpdate(pulleyRope.pulleyX, map(mouseY, pulleyRope.dragPoint-200, pulleyRope.dragPoint+200, pulleyRope.dragPoint-30, pulleyRope.dragPoint+30));
  }
  pulley1.update(pulleyRope.defaultLength, -1, -1);
  pulley2.update(pulleyRope.defaultLength, 0, 2);
  pulley3.update(pulleyRope.defaultLength, 2, 4);
  pulley4.update(pulleyRope.defaultLength, 4, 8);
  weight.update(pulleyRope.defaultLength, 8);

  // drawing ropes that connect objects
  stroke(0);
  strokeWeight(1);
  line(pulley1.x-pulley1.radius, pulley1.y, pulley2.x+pulley2.radius, pulley2.y); // rope from pulley1 to pulley2
  line(pulley2.x-pulley2.radius, pulley2.y, pulley3.x, pulley3.y); // rope from pulley2 to pulley3
  line(pulley3.x-pulley3.radius, pulley3.y, pulley4.x, pulley4.y); // rope from pulley3 to pulley4
  line(pulley4.x-pulley4.radius, pulley4.y, weight.x, weight.y); // rope from pulley4 to weight
  line(pulley1.x+pulley1.radius, pulley1.y, pulley1.x+pulley1.radius, 0); // rope from pulley1 to support
  line(pulley3.x+pulley3.radius, pulley3.y, pulley3.x+pulley3.radius, 750); // rope from pulley3 to support
  line(pulley4.x+pulley4.radius, pulley4.y, pulley4.x+pulley4.radius, 750); // rope from pulley4 to support

  // drawing objects
  pulleyRope.show();
  pulley1.show();
  pulley2.show();
  pulley3.show();
  pulley4.show();
  weight.show();

  // drawing frame
  fill(0);
  circle(pulley1.x, pulley1.y, 10);
  circle(pulley3.x, pulley3.y, 10);
  circle(pulley2.x, pulley2.y, 10);
  circle(pulley4.x, pulley4.y, 10);
  circle(pulley1.x+pulley1.radius, 0, 10);
  circle(pulley3.x+pulley3.radius, 750, 10);
  circle(pulley4.x+pulley4.radius, 750, 10);
  strokeWeight(6);
  line(pulley2.x, 0, pulley2.x, pulley2.y);
  strokeWeight(1);
  rect(0, 750, 600, 800);
  line(pulley1.x, pulley1.y, pulley1.x, pulley1.y+pulley1.radius);
  line(pulley3.x, pulley3.y, pulley3.x, pulley3.y-pulley3.radius);
  line(pulley4.x, pulley4.y, pulley4.x, pulley4.y-pulley4.radius);

  /*
  // drawing dimensions
  drawDimension(pulley3.y+pulley3.radius*2, pulley2.y-pulley2.radius*2, pulley1.x-pulley1.radius-30, "S", "b");
  drawDimension(pulley1.y, pulley1.y+pulleyRope.defaultLength+50, pulley1.x+pulley1.radius+30, "S", "a");
  drawArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, 0, pulley1.radius*2+pulley3.radius*2);
  drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI, -pulley2.radius*2, -pulley2.radius*2);
  drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0, pulley3.radius*2, pulley3.radius*2);
  drawArc(pulley4.x, pulley4.y, pulley4.radius+10, 0, PI);
  */

  /*
  // drawing equations
  textAlign(LEFT, CENTER);
  textSize(14);
  fill(120, 0, 120);
  stroke(120, 0, 120);
  text("L = Rope Length", 350, 300);
  text("R = Red Dimensions", 350, 320);
  text("L = R + Sa + 4*Sb", 350, 380);
  text("0 = Va + 4*Vb", 350, 400);
  text("0 = Aa + 4*Ab", 350, 420);
  */
}





function mousePressed() {
  if (pulleyRope.grabAreaHover(mouseX, mouseY)) {
    pulleyRope.dragging = true;
    pulleyRope.dragPoint = mouseY;
  }
}

function mouseReleased() {
  pulleyRope.dragging = false;
}





/**
 * This function draws the scale.
 * @param {number} groundLevel The position of the ground from the top of the canvas in pixels.
 */
function drawScale(groundLevel) {
  strokeWeight(1);
  stroke(0);

  line(0, groundLevel, width, groundLevel);

  line(0, groundLevel-25, 5, groundLevel-25);
  line(0, groundLevel-50, 5, groundLevel-50);
  line(0, groundLevel-75, 5, groundLevel-75);

  line(0, groundLevel-100, 10, groundLevel-100);

  line(0, groundLevel-125, 5, groundLevel-125);
  line(0, groundLevel-150, 5, groundLevel-150);
  line(0, groundLevel-175, 5, groundLevel-175);

  line(0, groundLevel-200, 10, groundLevel-200);

  line(0, groundLevel-225, 5, groundLevel-225);
  line(0, groundLevel-250, 5, groundLevel-250);
  line(0, groundLevel-275, 5, groundLevel-275);

  line(0, groundLevel-300, 10, groundLevel-300);

  line(0, groundLevel-325, 5, groundLevel-325);
  line(0, groundLevel-350, 5, groundLevel-350);
  line(0, groundLevel-375, 5, groundLevel-375);

  line(0, groundLevel-400, 10, groundLevel-400);

  line(0, groundLevel-425, 5, groundLevel-425);
  line(0, groundLevel-450, 5, groundLevel-450);
  line(0, groundLevel-475, 5, groundLevel-475);

  line(0, groundLevel-500, 10, groundLevel-500);
}

/**
 * This function draws a dimension.
 * @param {number} yStart The position of the top of the dimension from the top of the canvas in pixels.
 * @param {number} yEnd The position of the bottom of the dimension from the top of the canvas in pixels.
 * @param {number} x The position of the dimension from the left side of the canvas in pixels.
 * @param {string} name The name of the dimension.
 * @param {string} subscript The subscript of the name of the dimension.
 * @param {Color} colour The colour of the dimension.
 * @param {number} midSpacing The length of the empty space in the middle of the dimension.
 * @param {number} tailLength The length of the tails on the end of the dimension.
 */
function drawDimension(yStart, yEnd, x, name, subscript, colour = color(120, 0, 120), midSpacing = 15, tailLength = 5) {
  strokeWeight(1);
  stroke(colour);
  fill(colour);

  let dimMiddle = yStart + (yEnd - yStart)/2;
  line(x, yStart, x, dimMiddle-midSpacing);
  line(x, dimMiddle+midSpacing, x, yEnd);
  line(x-tailLength, yStart, x+tailLength, yStart);
  line(x-tailLength, yEnd, x+tailLength, yEnd);

  textAlign(LEFT, CENTER);
  textSize(14);
  text(name, x-5, dimMiddle);
  textSize(10)
  text(subscript, x+3, dimMiddle+3);
}

/**
 * This function draws an arc.
 * @param {number} x The position of the arc from the left side of the canvas in pixels.
 * @param {number} y The position of the arc from the top of the canvas in pixels.
 * @param {number} size The radius of the arc.
 * @param {number} start The start of the arc in radians.
 * @param {number} end The end of the arc in radians.
 * @param {number} left The length to extend the arc on the left side.
 * @param {number} right The length to extend the arc on the right side.
 * @param {Color} colour The colour of the arc.
 * @param {number} tailLength The length of the tails on the end of the arc.
 */
function drawArc(x, y, size, start, end, left = 0, right = 0, colour = color(200, 0, 0), tailLength = 5) {
  strokeWeight(1);
  stroke(colour);
  noFill();

  arc(x, y, size*2, size*2, start, end);
  line(x-size-tailLength, y+left, x-size+tailLength, y+left);
  line(x-size, y, x-size, y+left);
  line(x+size-tailLength, y+right, x+size+tailLength, y+right);
  line(x+size, y, x+size, y+right);
}





class Weight {
  constructor(startX, startY, size, mass) {
    this.startX = startX;
    this.startY = startY;

    this.x = startX;
    this.y = startY;

    this.size = size;
    this.mass = mass;

    this.yVel = 0;
    this.yAcc = 0;
  }

  show() {
    stroke(0);
    fill(0);
    circle(this.x, this.y, 10);
    rect(this.x-this.size, this.y, this.x+this.size, this.y+this.size*2);
  }

  update(pulledLength, movementMultiplier) {
    let yOld = this.y;
    let yVelOld = this.yVel;

    this.y = this.startY - pulledLength*movementMultiplier;
    this.yVel = this.y - yOld;
    this.yAcc = this.yVel - yVelOld;
  }
}

class Pulley {
  constructor(startX, startY, radius, free) {
    this.startX = startX;
    this.startY = startY;

    this.x = startX;
    this.y = startY;
    this.radius = radius;
    this.diameter = radius*2;
    this.circumference = Math.PI*radius*2;

    this.indicatorX = startX+radius/2;
    this.indicatorY = startY;
    this.indicatorRadius = radius/4;
    this.indicatorDiameter = radius/2;
  }

  show() {
    stroke(0);
    fill(255);
    circle(this.x, this.y, this.diameter);
    circle(this.indicatorX, this.indicatorY, this.indicatorDiameter);
  }

  update(pulledLength, movementMultiplier, rotationMultiplier) {
    let pulledArc = (pulledLength*rotationMultiplier)%this.circumference;
    let pulledAngle = pulledArc/this.radius;

    this.y = this.startY - pulledLength*movementMultiplier;

    this.indicatorX = this.x + Math.cos(pulledAngle)*this.radius/2;
    this.indicatorY = this.y + Math.sin(pulledAngle)*this.radius/2;
  }
}

class PulleyRope {
  constructor(pulleyX, pulleyY, pulleyRadius, minRopeLength, maxRopeLength, linear = false) {
    this.pulleyX = pulleyX;
    this.pulleyY = pulleyY;
    this.pulleyRadius = pulleyRadius;
    this.minRopeLength = minRopeLength;
    this.maxRopeLength = maxRopeLength;

    this.dragging = false;
    this.dragPoint = 0;
    this.grabArea = 10;

    this.endX;
    this.endY;
    this.startX;
    this.startY;
    this.defaultLength;

    if (linear) {
      this.linearUpdate(pulleyX, 0);
    } else {
      this.update(0, 0);
    }

    this.ropeLength = minRopeLength;
    this.ropeVel = 0;
    this.ropeAcc = 0;
  }

  show() {
    stroke(0);
    fill(255);
    line(this.startX, this.startY, this.endX, this.endY);
    if (this.dragging) {
      fill(100);
    }
    circle(this.endX, this.endY, this.grabArea);
  }

  update(x, y) {
    let lenOld = this.ropeLength;
    let velOld = this.ropeVel;

    this.endX = constrain(x, this.pulleyX + this.pulleyRadius, width);
    this.endY = constrain(y, this.pulleyY - this.pulleyRadius, height);

    let innerAngle = Math.acos(this.pulleyRadius/Math.sqrt((this.endX-this.pulleyX)*(this.endX-this.pulleyX)+(this.endY-this.pulleyY)*(this.endY-this.pulleyY)));
    let lowerAngle;
    if (this.endY > this.pulleyY) {
      lowerAngle = Math.atan((this.endX-this.pulleyX)/(this.endY-this.pulleyY));
    } else {
      lowerAngle = Math.PI - Math.atan((this.endX-this.pulleyX)/(this.pulleyY - this.endY));
    }
    let upperAngle = Math.PI - innerAngle - lowerAngle;

    this.startX = this.pulleyX + Math.abs(this.pulleyRadius*Math.sin(upperAngle));
    this.startY = this.pulleyY - Math.abs(this.pulleyRadius*Math.cos(upperAngle));

    let exitRopeLength = Math.sqrt((this.endX-this.startX)*(this.endX-this.startX)+(this.endY-this.startY)*(this.endY-this.startY));
    this.ropeLength = constrain(this.pulleyRadius*upperAngle + exitRopeLength, this.minRopeLength, this.maxRopeLength);
    this.defaultLength = this.ropeLength - this.minRopeLength;

    this.endX = this.startX + (this.ropeLength - this.pulleyRadius*upperAngle)*cos(upperAngle);
    this.endY = this.startY + (this.ropeLength - this.pulleyRadius*upperAngle)*sin(upperAngle);

    this.ropeVel = this.ropeLength - lenOld;
    this.ropeAcc = this.ropeVel - velOld;
  }

  linearUpdate(x, y) {
    let lenOld = this.ropeLength;
    let velOld = this.ropeVel;

    this.endX = x;
    this.endY = constrain(y, this.pulleyY+this.minRopeLength, this.pulleyY+this.maxRopeLength);

    this.startX = this.pulleyX;
    this.startY = this.pulleyY;

    this.ropeLength = constrain(this.endY - this.startY, this.minRopeLength, this.maxRopeLength);
    this.defaultLength = this.ropeLength - this.minRopeLength;

    this.ropeVel = this.ropeLength - lenOld;
    this.ropeAcc = this.ropeVel - velOld;
  }

  grabAreaHover(x, y) {
    return x < this.endX+this.grabArea && x > this.endX-this.grabArea && y < this.endY+this.grabArea && y > this.endY-this.grabArea;
  }
}
