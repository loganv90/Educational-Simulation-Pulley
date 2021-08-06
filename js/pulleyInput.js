let numSelect;
let dimSwitch;
let equSwitch;
let forSwitch;

window.onload = () => {
  numSelect = document.querySelector("#num-select");
  dimSwitch = document.querySelector("#Dim-Switch");
  equSwitch = document.querySelector("#Equ-Switch");
  forSwitch = document.querySelector("#For-Switch");

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
        weight = new Weight(100, 650, 50, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60, false);
        pulley2 = new Pulley();
        pulley3 = new Pulley();
        pulley4 = new Pulley();
        break;
      case "2":
        weight = new Weight(150, 650, 50, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60, false);
        pulley2 = new Pulley(150, 550, 50, true);
        pulley3 = new Pulley();
        pulley4 = new Pulley();
        break;
      case "3":
        weight = new Weight(150, 650, 50, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60, false);
        pulley2 = new Pulley(150, 550, 50, true);
        pulley3 = new Pulley(160, 220, 40, false);
        pulley4 = new Pulley();
        break;
      case "4":
        weight = new Weight(150, 650, 50, 50);
        pulleyRope = new PulleyRope(160, 100, 60, 150, 550);
        pulley1 = new Pulley(160, 100, 60, false);
        pulley2 = new Pulley(150, 550, 50, true);
        pulley3 = new Pulley(160, 220, 40, false);
        pulley4 = new Pulley(150, 450, 30, true);
        break;
      case "4.2":
        weight = new Weight(100, 650, 50, 50);
        pulleyRope = new PulleyRope(300, 400, 0.1, 150, 175, true);
        pulley1 = new Pulley(300, 400, 40, false);
        pulley2 = new Pulley(220, 100, 40, true);
        pulley3 = new Pulley(180, 250, 40, false);
        pulley4 = new Pulley(140, 400, 40, true);
        break;
    }
  }

  numSelect.onchange();
}
