let numSelect;
let dimSwitch;
let equSwitch;
let forSwitch;

let massInput;
let massSlider;
let massValue;
let massMin;
let massMax;

window.onload = () => {
  numSelect = document.querySelector("#num-select");
  dimSwitch = document.querySelector("#Dim-Switch");
  equSwitch = document.querySelector("#Equ-Switch");
  forSwitch = document.querySelector("#For-Switch");

  massInput = document.querySelector("#input-mass");
  massSlider = document.querySelector("#slider-mass");
  massValue = parseFloat(massInput.value);
  massMax = 100;
  massMin = 0;

  plot1 = new Plot(10, 100, 182, 50, color(0, 0, 200));
  plot2 = new Plot(10, 200, 182, 150, color(0, 200, 0));
  plot3 = new Plot(10, 300, 182, 250, color(200, 0, 0));

  plot4 = new Plot(202, 100, 374, 50, color(0, 0, 200));
  plot5 = new Plot(202, 200, 374, 150, color(0, 200, 0));
  plot6 = new Plot(202, 300, 374, 250, color(200, 0, 0));

  // the functionality of the drop down menus
  numSelect.onchange = () => {
    switch (numSelect.value) {
      case "1":
        weight = new Weight(100, 650, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60);
        pulley2 = new Pulley();
        pulley3 = new Pulley();
        pulley4 = new Pulley();
        break;
      case "2":
        weight = new Weight(150, 650, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60);
        pulley2 = new Pulley(150, 550, 50);
        pulley3 = new Pulley();
        pulley4 = new Pulley();
        break;
      case "3":
        weight = new Weight(150, 650, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60);
        pulley2 = new Pulley(150, 550, 50);
        pulley3 = new Pulley(160, 220, 40);
        pulley4 = new Pulley();
        break;
      case "4":
        weight = new Weight(150, 650, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60);
        pulley2 = new Pulley(150, 550, 50);
        pulley3 = new Pulley(160, 220, 40);
        pulley4 = new Pulley(150, 450, 30);
        break;
      case "4.2":
        weight = new Weight(100, 650, 50);
        pulleyRope = new PulleyRope(300, 400, 0.1, 150, 175, true);
        pulley1 = new Pulley(300, 400, 40);
        pulley2 = new Pulley(220, 100, 40);
        pulley3 = new Pulley(180, 250, 40);
        pulley4 = new Pulley(140, 400, 40);
        break;
    }
  }
  numSelect.onchange();

  // the functionality of the inputs and sliders
  massInput.onchange = () => {
    massInput.value = validateInput(massInput.value, massMin, massMax);
    massValue = parseFloat(validateInput(massInput.value, massMin, massMax));
    massSlider.value = massInput.value;
  }
  massSlider.addEventListener("input", () => {
    massInput.value = validateInput(massSlider.value, massMin, massMax);
    massValue = parseFloat(validateInput(massSlider.value, massMin, massMax));
  })
}

/**
 * This function constrains and rounds a value.
 * @param {number} input The number to constrain and round.
 * @param {number} min The upper limit.
 * @param {number} max The lower limit.
 * @returns {number} The scaled and rounded number.
 */
 function validateInput(input, min, max) {
  if (isNaN(input) || input.toString() == "") {
    return max;
  } else if (input > max) {
    return max;
  } else if (input < min) {
    return min;
  }
  return Math.round(input*100)/100;
}
