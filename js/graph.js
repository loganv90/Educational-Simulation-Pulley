let plot1;
let plot2;
let plot3;
let plot4;
let plot5;
let plot6;

const s = ( pulleyGraph ) => {
    pulleyGraph.setup = () => {
        pulleyGraph.createCanvas(394, 474);
        pulleyGraph.frameRate(60);
        pulleyGraph.rectMode(CORNERS);
        pulleyGraph.textFont('TimesNewRoman');
    };

    pulleyGraph.draw = () => {
        pulleyGraph.background(200);

        plot1.update(parseInt(weight.y), 250, 650);
        plot1.show();
        plot2.update(parseInt(weight.yVel), -20, 20);
        plot2.show();
        plot3.update(parseInt(weight.yAcc), -10, 10);
        plot3.show();
        
        plot4.update(parseInt(pulleyRope.ropeLength), 150, 550);
        plot4.show();
        plot5.update(parseInt(pulleyRope.ropeVel), -20, 20);
        plot5.show();
        plot6.update(parseInt(pulleyRope.ropeAcc), -10, 10);
        plot6.show();
    };
}

let graph = new p5(s, 'p5-graph-container');





class Plot {
    constructor(xStart, yStart, xEnd, yEnd, colour) {
      this.xStart = xStart;
      this.yStart = yStart;
      this.xEnd = xEnd;
      this.yEnd = yEnd;

      this.points = new Array(xEnd-xStart).fill(0);
      this.colour = colour;
    }

    show() {
        graph.stroke(0);
        graph.line(this.xStart, this.yStart, this.xEnd, this.yStart);
        graph.line(this.xStart, this.yStart, this.xStart, this.yEnd);
    }
  
    update(newPoint, min, max) {
        if (!isNaN(newPoint)) {
            newPoint = graph.map(newPoint, min, max, this.yEnd - this.yStart, 0, true);
        } else {
            newPoint = 0;
        }

        this.points.shift();
        this.points.push(newPoint);

        graph.noFill();
        graph.stroke(this.colour);
        graph.beginShape();
        for (let i=0; i<=this.points.length; i++) {
            vertex(this.xStart+i, this.yStart+this.points[i]);
        }
        graph.endShape();
    }
  }