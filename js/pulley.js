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
  if (dimSwitch.checked) {
    drawDimension(pulley1.y, weight.y-10, pulley1.x-pulley1.radius-30, "S", "b");
    drawUniversalDimension(pulleyRope.dimensionStartX, pulleyRope.dimensionStartY, pulleyRope.dimensionEndX, pulleyRope.dimensionEndY, "S", "a");
    drawUniversalArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, findAngle(pulleyRope.startX-pulleyRope.pulleyX, pulleyRope.startY-pulleyRope.pulleyY), 0, pulleyRope.arcLength-95);
  }

  // drawing equations
  if (equSwitch.checked) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(120, 0, 120);
    stroke(120, 0, 120);
    text("L = Rope Length", 420, 300);
    text("R = Red Dimensions", 420, 320);

    let textPosition;
    let posHeight = 380;
    let velHeight = 420;
    let accHeight = 460;

    textPosition = textLine("L = R + S", 420, posHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + S", textPosition, posHeight, 14, NORMAL);
    textLine("b", textPosition, posHeight+3, 10, NORMAL);

    textPosition = textLine("0 = V", 420, velHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine(" + V", textPosition, velHeight, 14, NORMAL);
    textLine("b", textPosition, velHeight+3, 10, NORMAL);
    
    textPosition = textLine("0 = A", 420, accHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine(" + A", textPosition, accHeight, 14, NORMAL);
    textLine("b", textPosition, accHeight+3, 10, NORMAL);
  }

  // drawing forces
  if (forSwitch.checked) {
    drawArrow(pulleyRope.arrowStartX, pulleyRope.arrowStartY, pulleyRope.arrowEndX, pulleyRope.arrowEndY);
    drawArrow(weight.x+20, weight.y-10, weight.x+20, weight.y-80);
  }
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
  if (dimSwitch.checked) {
    drawDimension(pulley1.y+pulley1.radius*2, pulley2.y, pulley1.x-pulley1.radius-30, "S", "b");
    drawUniversalDimension(pulleyRope.dimensionStartX, pulleyRope.dimensionStartY, pulleyRope.dimensionEndX, pulleyRope.dimensionEndY, "S", "a");
    drawUniversalArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, findAngle(pulleyRope.startX-pulleyRope.pulleyX, pulleyRope.startY-pulleyRope.pulleyY), pulley1.radius*2, pulleyRope.arcLength-95);
    drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI);
  }

  // drawing equations
  if (equSwitch.checked) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(120, 0, 120);
    stroke(120, 0, 120);
    text("L = Rope Length", 420, 300);
    text("R = Red Dimensions", 420, 320);

    let textPosition;
    let posHeight = 380;
    let velHeight = 420;
    let accHeight = 460;

    textPosition = textLine("L = R + S", 420, posHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + 2S", textPosition, posHeight, 14, NORMAL);
    textLine("b", textPosition, posHeight+3, 10, NORMAL);

    textPosition = textLine("0 = V", 420, velHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine(" + 2V", textPosition, velHeight, 14, NORMAL);
    textLine("b", textPosition, velHeight+3, 10, NORMAL);
    
    textPosition = textLine("0 = A", 420, accHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine(" + 2A", textPosition, accHeight, 14, NORMAL);
    textLine("b", textPosition, accHeight+3, 10, NORMAL);
  }

  // drawing forces
  if (forSwitch.checked) {
    drawArrow(pulleyRope.arrowStartX, pulleyRope.arrowStartY, pulleyRope.arrowEndX, pulleyRope.arrowEndY);
    drawArrow(weight.x-70, weight.y+80, weight.x-70, weight.y+10);
  }
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
  if (dimSwitch.checked) {
    drawDimension(pulley3.y, pulley2.y-pulley2.radius*2, pulley1.x-pulley1.radius-30, "S", "b");
    drawUniversalDimension(pulleyRope.dimensionStartX, pulleyRope.dimensionStartY, pulleyRope.dimensionEndX, pulleyRope.dimensionEndY, "S", "a");
    drawUniversalArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, findAngle(pulleyRope.startX-pulleyRope.pulleyX, pulleyRope.startY-pulleyRope.pulleyY), pulley1.radius*2, pulleyRope.arcLength-95);
    drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI, -pulley2.radius*2, -pulley2.radius*2);
    drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0);
  }

  // drawing equations
  if (equSwitch.checked) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(120, 0, 120);
    stroke(120, 0, 120);
    text("L = Rope Length", 420, 300);
    text("R = Red Dimensions", 420, 320);

    let textPosition;
    let posHeight = 380;
    let velHeight = 420;
    let accHeight = 460;

    textPosition = textLine("L = R + S", 420, posHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + 3S", textPosition, posHeight, 14, NORMAL);
    textLine("b", textPosition, posHeight+3, 10, NORMAL);

    textPosition = textLine("0 = V", 420, velHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine(" + 3V", textPosition, velHeight, 14, NORMAL);
    textLine("b", textPosition, velHeight+3, 10, NORMAL);
    
    textPosition = textLine("0 = A", 420, accHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine(" + 3A", textPosition, accHeight, 14, NORMAL);
    textLine("b", textPosition, accHeight+3, 10, NORMAL);
  }

  // drawing forces
  if (forSwitch.checked) {
    drawArrow(pulleyRope.arrowStartX, pulleyRope.arrowStartY, pulleyRope.arrowEndX, pulleyRope.arrowEndY);
    drawArrow(weight.x-70, weight.y+80, weight.x-70, weight.y+10);
  }
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
  if (dimSwitch.checked) {
    drawDimension(pulley3.y+pulley3.radius*2, pulley2.y-pulley2.radius*2, pulley1.x-pulley1.radius-30, "S", "b");
    drawUniversalDimension(pulleyRope.dimensionStartX, pulleyRope.dimensionStartY, pulleyRope.dimensionEndX, pulleyRope.dimensionEndY, "S", "a");
    drawUniversalArc(pulley1.x, pulley1.y, pulley1.radius+10, PI, findAngle(pulleyRope.startX-pulleyRope.pulleyX, pulleyRope.startY-pulleyRope.pulleyY), pulley1.radius*2+pulley3.radius*2, pulleyRope.arcLength-95);
    drawArc(pulley2.x, pulley2.y, pulley2.radius+10, 0, PI, -pulley2.radius*2, -pulley2.radius*2);
    drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0, pulley3.radius*2, pulley3.radius*2);
    drawArc(pulley4.x, pulley4.y, pulley4.radius+10, 0, PI);
  }

  // drawing equations
  if (equSwitch.checked) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(120, 0, 120);
    stroke(120, 0, 120);
    text("L = Rope Length", 420, 300);
    text("R = Red Dimensions", 420, 320);

    let textPosition;
    let posHeight = 380;
    let velHeight = 420;
    let accHeight = 460;

    textPosition = textLine("L = R + S", 420, posHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + 4S", textPosition, posHeight, 14, NORMAL);
    textLine("b", textPosition, posHeight+3, 10, NORMAL);

    textPosition = textLine("0 = V", 420, velHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine(" + 4V", textPosition, velHeight, 14, NORMAL);
    textLine("b", textPosition, velHeight+3, 10, NORMAL);
    
    textPosition = textLine("0 = A", 420, accHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine(" + 4A", textPosition, accHeight, 14, NORMAL);
    textLine("b", textPosition, accHeight+3, 10, NORMAL);
  }

  // drawing forces
  if (forSwitch.checked) {
    drawArrow(pulleyRope.arrowStartX, pulleyRope.arrowStartY, pulleyRope.arrowEndX, pulleyRope.arrowEndY);
    drawArrow(weight.x-70, weight.y+80, weight.x-70, weight.y+10);
  }
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
  stroke(0);
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

  // drawing dimensions
  if (dimSwitch.checked) {
    stroke(0);
    fill(0);
    textSize(14);
    textAlign(LEFT, CENTER);
    text("L", pulley1.x+pulley1.radius-20, 10);
    text("L", pulley3.x+pulley3.radius-20, 740);
    text("L", pulley4.x+pulley4.radius-20, 740);
    textSize(10);
    text("1", pulley1.x+pulley1.radius-20+10, 10+3);
    text("2", pulley3.x+pulley3.radius-20+10, 740+3);
    text("3", pulley4.x+pulley4.radius-20+10, 740+3);
    drawDimension(pulley2.y, pulley1.y, pulley1.x+pulley1.radius+30, "S", "a");
    drawDimension(pulley2.y, pulley3.y, pulley2.x-pulley2.radius-30, "S", "b");
    drawDimension(pulley2.y, pulley4.y, pulley3.x-pulley3.radius-30, "S", "c");
    drawDimension(pulley2.y, weight.y-10, pulley4.x-pulley4.radius-30, "S", "d");
    drawArc(pulley1.x, pulley1.y, pulley1.radius+10, 0, PI);
    drawArc(pulley2.x, pulley2.y, pulley2.radius+10, PI, 0);
    drawArc(pulley3.x, pulley3.y, pulley3.radius+10, PI, 0);
    drawArc(pulley4.x, pulley4.y, pulley4.radius+10, PI, 0);
    drawDimension(10, pulley2.y, pulley1.x+pulley1.radius+10, "", "", color(200, 0, 0), 0, 5);
    drawDimension(pulley2.y, 740, 30, "h", "");
  }

  // drawing equations
  if (equSwitch.checked) {
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(120, 0, 120);
    stroke(120, 0, 120);
    text("L = Rope Length", 420, 300);
    text("R = Red Dimensions", 420, 320);

    let textPosition;
    let posHeight = 380;
    let velHeight = 460;
    let accHeight = 540;

    textPosition = textLine("L", 420, posHeight, 14, NORMAL);
    textPosition = textLine("1", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" = R", textPosition, posHeight, 14, NORMAL);
    textPosition = textLine("1", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + 2S", textPosition, posHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine(" + S", textPosition, posHeight, 14, NORMAL);
    textLine("b", textPosition, posHeight+3, 10, NORMAL);
    textPosition = textLine("L", 420, posHeight+20, 14, NORMAL);
    textPosition = textLine("2", textPosition, posHeight+23, 10, NORMAL);
    textPosition = textLine(" = R", textPosition, posHeight+20, 14, NORMAL);
    textPosition = textLine("2", textPosition, posHeight+23, 10, NORMAL);
    textPosition = textLine(" + (h - S", textPosition, posHeight+20, 14, NORMAL);
    textPosition = textLine("b", textPosition, posHeight+23, 10, NORMAL);
    textPosition = textLine(") + (S", textPosition, posHeight+20, 14, NORMAL);
    textPosition = textLine("c", textPosition, posHeight+23, 10, NORMAL);
    textPosition = textLine(" - S", textPosition, posHeight+20, 14, NORMAL);
    textPosition = textLine("b", textPosition, posHeight+23, 10, NORMAL);
    textLine(")", textPosition, posHeight+20, 14, NORMAL);
    textPosition = textLine("L", 420, posHeight+40, 14, NORMAL);
    textPosition = textLine("2", textPosition, posHeight+43, 10, NORMAL);
    textPosition = textLine(" = R", textPosition, posHeight+40, 14, NORMAL);
    textPosition = textLine("2", textPosition, posHeight+43, 10, NORMAL);
    textPosition = textLine(" + (h - S", textPosition, posHeight+40, 14, NORMAL);
    textPosition = textLine("b", textPosition, posHeight+43, 10, NORMAL);
    textPosition = textLine(") + (S", textPosition, posHeight+40, 14, NORMAL);
    textPosition = textLine("c", textPosition, posHeight+43, 10, NORMAL);
    textPosition = textLine(" - S", textPosition, posHeight+40, 14, NORMAL);
    textPosition = textLine("b", textPosition, posHeight+43, 10, NORMAL);
    textLine(")", textPosition, posHeight+40, 14, NORMAL);

    textPosition = textLine("0 = 2V", 420, velHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine(" + V", textPosition, velHeight, 14, NORMAL);
    textLine("b", textPosition, velHeight+3, 10, NORMAL);
    textPosition = textLine("0 = V", 420, velHeight+20, 14, NORMAL);
    textPosition = textLine("c", textPosition, velHeight+23, 10, NORMAL);
    textPosition = textLine(" - 2V", textPosition, velHeight+20, 14, NORMAL);
    textLine("b", textPosition, velHeight+23, 10, NORMAL);
    textPosition = textLine("0 = V", 420, velHeight+40, 14, NORMAL);
    textPosition = textLine("d", textPosition, velHeight+43, 10, NORMAL);
    textPosition = textLine(" + 2V", textPosition, velHeight+40, 14, NORMAL);
    textLine("c", textPosition, velHeight+43, 10, NORMAL);

    textPosition = textLine("0 = 2A", 420, accHeight, 14, NORMAL);
    textPosition = textLine("a", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine(" + A", textPosition, accHeight, 14, NORMAL);
    textLine("b", textPosition, accHeight+3, 10, NORMAL);
    textPosition = textLine("0 = A", 420, accHeight+20, 14, NORMAL);
    textPosition = textLine("c", textPosition, accHeight+23, 10, NORMAL);
    textPosition = textLine(" - 2A", textPosition, accHeight+20, 14, NORMAL);
    textLine("b", textPosition, accHeight+23, 10, NORMAL);
    textPosition = textLine("0 = A", 420, accHeight+40, 14, NORMAL);
    textPosition = textLine("d", textPosition, accHeight+43, 10, NORMAL);
    textPosition = textLine(" + 2A", textPosition, accHeight+40, 14, NORMAL);
    textLine("c", textPosition, accHeight+43, 10, NORMAL);
  }

  // drawing forces
  if (forSwitch.checked) {
    drawArrow(pulleyRope.arrowStartX, pulleyRope.arrowStartY, pulleyRope.arrowEndX, pulleyRope.arrowEndY);
    drawArrow(weight.x+20, weight.y-10, weight.x+20, weight.y-80);
  }
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
 * This function draws a dimension in a vertical orientation.
 * @param {number} yStart The position of the top of the dimension from the top of the canvas in pixels.
 * @param {number} yEnd The position of the bottom of the dimension from the top of the canvas in pixels.
 * @param {number} x The position of the dimension from the left side of the canvas in pixels.
 * @param {string} name The name of the dimension.
 * @param {string} subscript The subscript for the name of the dimension.
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
 * This function draws a dimension in any orientation.
 * @param {number} xStart The position of the start of the dimension from the left side of the canvas in pixels.
 * @param {number} yStart The position of the start of the dimension from the top of the canvas in pixels.
 * @param {number} xEnd The position of the end of the dimension from the left side of the canvas in pixels.
 * @param {number} yEnd The position of the end of the dimension from the top of the canvas in pixels.
 * @param {string} name The name of the dimension.
 * @param {string} subscript The subscript for the name of the dimension.
 * @param {Color} colour The colour of the dimension.
 * @param {number} midSpacing The length of the empty space in the middle of the dimension.
 * @param {number} tailLength The length of the tails on the end of the dimension.
 */
 function drawUniversalDimension(xStart, yStart, xEnd, yEnd, name, subscript, colour = color(120, 0, 120), midSpacing = 15, tailLength = 5) {
  strokeWeight(1);
  stroke(colour);
  fill(colour);

  let dx = xStart - xEnd;
  let dy = yStart - yEnd;
  let angle = findAngle(dx, dy);
  let length = Math.sqrt(dx*dx+dy*dy);
  let halfLength = length/2 - midSpacing;

  let xText = xEnd + (length/2)*Math.cos(angle);
  let yText = yEnd + (length/2)*Math.sin(angle);

  let xStartMid = xStart - halfLength*Math.cos(angle);
  let yStartMid = yStart - halfLength*Math.sin(angle);
  let xEndMid = xEnd + halfLength*Math.cos(angle);
  let yEndMid = yEnd + halfLength*Math.sin(angle);

  let xStartCorner1 = xStart - tailLength*Math.sin(angle);
  let yStartCorner1 = yStart + tailLength*Math.cos(angle);
  let xStartCorner2 = xStart + tailLength*Math.sin(angle);
  let yStartCorner2 = yStart - tailLength*Math.cos(angle);

  let xEndCorner1 = xEnd - tailLength*Math.sin(angle);
  let yEndCorner1 = yEnd + tailLength*Math.cos(angle);
  let xEndCorner2 = xEnd + tailLength*Math.sin(angle);
  let yEndCorner2 = yEnd - tailLength*Math.cos(angle);

  line(xStart, yStart, xStartMid, yStartMid);
  line(xEndMid, yEndMid, xEnd, yEnd);
  line(xStartCorner1, yStartCorner1, xStartCorner2, yStartCorner2);
  line(xEndCorner1, yEndCorner1, xEndCorner2, yEndCorner2);

  textAlign(LEFT, CENTER);
  textSize(14);
  text(name, xText-5, yText);
  textSize(10)
  text(subscript, xText+3, yText+3);
}

/**
 * This function draws an arc in a strict fashion.
 * @param {number} x The position of the arc from the left side of the canvas in pixels.
 * @param {number} y The position of the arc from the top of the canvas in pixels.
 * @param {number} radius The radius of the arc.
 * @param {number} angleStart The start of the arc in radians.
 * @param {number} angleEnd The end of the arc in radians.
 * @param {number} left The vertical length to extend the arc on the left side.
 * @param {number} right The vertical length to extend the arc on the right side.
 * @param {Color} colour The colour of the arc.
 * @param {number} tailLength The length of the tails on the end of the arc.
 */
function drawArc(x, y, radius, angleStart, angleEnd, left = 0, right = 0, colour = color(200, 0, 0), tailLength = 5) {
  strokeWeight(1);
  stroke(colour);
  noFill();

  arc(x, y, radius*2, radius*2, angleStart, angleEnd);
  line(x-radius-tailLength, y+left, x-radius+tailLength, y+left);
  line(x-radius, y, x-radius, y+left);
  line(x+radius-tailLength, y+right, x+radius+tailLength, y+right);
  line(x+radius, y, x+radius, y+right);
}

/**
 * This function draws an arc in a dynamic fashion.
 * @param {number} x The position of the arc from the left side of the canvas in pixels.
 * @param {number} y The position of the arc from the top of the canvas in pixels.
 * @param {number} radiusArc The radius of the arc.
 * @param {number} angleStartArc The start of the arc in radians.
 * @param {number} angleEndArc The end of the arc in radians.
 * @param {number} startExt The linear length to extend the arc from the start of the arc.
 * @param {number} endExt The linear length to extend the arc from the end of the arc.
 * @param {Color} colour The colour of the arc.
 * @param {number} tailLength The length of the tails on the end of the arc.
 */
 function drawUniversalArc(x, y, radiusArc, angleStartArc, angleEndArc, startExt = 0, endExt = 0, colour = color(200, 0, 0), tailLength = 5) {
  strokeWeight(1);
  stroke(colour);
  noFill();

  let xStartArc = x + radiusArc*Math.cos(angleStartArc);
  let yStartArc = y + radiusArc*Math.sin(angleStartArc);
  let xEndArc = x + radiusArc*Math.cos(angleEndArc);
  let yEndArc = y + radiusArc*Math.sin(angleEndArc);

  let angleStartExt = Math.atan(startExt/radiusArc);
  let angleEndExt = Math.atan(endExt/radiusArc);
  let radiusStartExt = Math.sqrt(startExt*startExt+radiusArc*radiusArc);
  let radiusEndExt = Math.sqrt(endExt*endExt+radiusArc*radiusArc);

  let xStartExt = x + radiusStartExt*Math.cos(angleStartArc - angleStartExt);
  let yStartExt = y + radiusStartExt*Math.sin(angleStartArc - angleStartExt);
  let xEndExt = x + radiusEndExt*Math.cos(angleEndArc - angleEndExt);
  let yEndExt = y + radiusEndExt*Math.sin(angleEndArc - angleEndExt);
  
  let xStartCorner1 = xStartExt + tailLength*Math.cos(angleStartArc);
  let yStartCorner1 = yStartExt + tailLength*Math.sin(angleStartArc);
  let xStartCorner2 = xStartExt - tailLength*Math.cos(angleStartArc);
  let yStartCorner2 = yStartExt - tailLength*Math.sin(angleStartArc);
  let xEndCorner1 = xEndExt + tailLength*Math.cos(angleEndArc);
  let yEndCorner1 = yEndExt + tailLength*Math.sin(angleEndArc);
  let xEndCorner2 = xEndExt - tailLength*Math.cos(angleEndArc);
  let yEndCorner2 = yEndExt - tailLength*Math.sin(angleEndArc);

  line(xStartCorner1, yStartCorner1, xStartCorner2, yStartCorner2);
  line(xEndCorner1, yEndCorner1, xEndCorner2, yEndCorner2);
  line(xStartArc, yStartArc, xStartExt, yStartExt);
  line(xEndArc, yEndArc, xEndExt, yEndExt);
  arc(x, y, radiusArc*2, radiusArc*2, angleStartArc, angleEndArc);
}

/**
 * This function draws an arrow.
 * @param {number} xStart The position of the tip of the arrow from the left side of the canvas in pixels.
 * @param {number} yStart The position of the tip of the arrow from the top of the canvas in pixels.
 * @param {number} xTail The position of the tail of the arrow from the left side of the canvas in pixels.
 * @param {number} yTail The position of the tail of the arrow from the top of the canvas in pixels.
 * @param {Color} colour The colour of the arrow.
 */
function drawArrow(xStart, yStart, xEnd, yEnd, colour = color(200, 0, 0)) {
  strokeWeight(1);
  stroke(colour);
  fill(colour);

  let dx = xStart - xEnd;
  let dy = yStart - yEnd;
  let angle = findAngle(dx, dy);
  let length = Math.sqrt(dx*dx+dy*dy);
  let arrowHeight = length*0.8;
  let arrowWidth = length*0.1;

  let dxArrowHeight = arrowHeight*Math.cos(angle);
  let dyArrowHeight = arrowHeight*Math.sin(angle);

  let xCorner1 = xEnd + dxArrowHeight - arrowWidth*Math.sin(angle);
  let yCorner1 = yEnd + dyArrowHeight + arrowWidth*Math.cos(angle);
  let xCorner2 = xEnd + dxArrowHeight + arrowWidth*Math.sin(angle);
  let yCorner2 = yEnd + dyArrowHeight - arrowWidth*Math.cos(angle);

  triangle(xStart, yStart, xCorner1, yCorner1, xCorner2, yCorner2);
  line(xStart, yStart, xEnd, yEnd);
}

/**
 * This function finds an angle.
 * @param {number} dx The x component of the angle.
 * @param {number} dy The y component of the angle.
 * @returns The angle in radians.
 */
function findAngle(dx, dy) {
  if (dx == 0 && dy == 0) {
    return 0;
  } else if (dx == 0 && dy > 0) {
    return PI/2;
  } else if (dx == 0 && dy < 0) {
    return 3*PI/2;
  } else if (dx > 0 && dy == 0) {
    return 0;
  } else if (dx < 0 && dy == 0) {
    return PI;
  } else if (dx > 0 && dy > 0) {
    return Math.atan(abs(dy/dx));
  } else if (dx < 0 && dy > 0) {
    return PI - Math.atan(abs(dy/dx));
  } else if (dx > 0 && dy < 0) {
    return 2*PI - Math.atan(abs(dy/dx));
  } else if (dx < 0 && dy < 0) {
    return PI + Math.atan(abs(dy/dx));
  } else {
    return 0 ;
  }
}

/**
 * This function draws text.
 * @param {string} content The text to draw.
 * @param {number} xPosition The position of the text from the left side of the canvas in pixels.
 * @param {number} yPosition The position of the text from the top of the canvas in pixels.
 * @param {number} size The size of the text.
 * @param {string} stlye The style of the text.
 * @returns {number} The position at the end of the drawn text.
 */
 function textLine(content, xPosition, yPosition, size, style) {
  textStyle(style);
  textSize(size);
  text(content, xPosition, yPosition);
  return xPosition += textWidth(content);
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

    this.arcLength = 0;
    this.dragging = false;
    this.dragPoint = 0;
    this.grabArea = 10;

    this.endX;
    this.endY;
    this.startX;
    this.startY;
    this.defaultLength;

    this.arrowStartX;
    this.arrowStartY;
    this.arrowEndX;
    this.arrowEndY;

    this.dimensionStartX;
    this.dimensionStartY;
    this.dimensionEndX;
    this.dimensionEndY;

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
    this.arcLength = upperAngle*this.pulleyRadius;

    this.ropeVel = this.ropeLength - lenOld;
    this.ropeAcc = this.ropeVel - velOld;

    this.arrowPositionUpdate(upperAngle, 70, 15, 40);
    this.dimensionPositionUpdate(upperAngle, this.defaultLength+55, 30);
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

    this.arrowPositionUpdate(PI/2, 70, 15, 40);
  }

  arrowPositionUpdate(angle, arrowLength, arrowSpacing, arrowOffset) {
    this.arrowStartX = this.endX + arrowSpacing*Math.sin(angle) + arrowOffset*Math.cos(angle);
    this.arrowStartY = this.endY - arrowSpacing*Math.cos(angle) + arrowOffset*Math.sin(angle);
    this.arrowEndX = this.endX - arrowLength*Math.cos(angle) + arrowSpacing*Math.sin(angle) + arrowOffset*Math.cos(angle);
    this.arrowEndY = this.endY - arrowLength*Math.sin(angle) - arrowSpacing*Math.cos(angle) + arrowOffset*Math.sin(angle);
  }

  dimensionPositionUpdate(angle, dimensionLength, dimensionSpacing) {
    this.dimensionStartX = this.endX + dimensionSpacing*Math.sin(angle);
    this.dimensionStartY = this.endY - dimensionSpacing*Math.cos(angle);
    this.dimensionEndX = this.endX - dimensionLength*Math.cos(angle) + dimensionSpacing*Math.sin(angle);
    this.dimensionEndY = this.endY - dimensionLength*Math.sin(angle) - dimensionSpacing*Math.cos(angle);
  }

  grabAreaHover(x, y) {
    return x < this.endX+this.grabArea && x > this.endX-this.grabArea && y < this.endY+this.grabArea && y > this.endY-this.grabArea;
  }
}
