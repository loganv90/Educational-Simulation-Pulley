let plot1;
let plot2;
let plot3;
let plot4;
let plot5;
let plot6;

const s = ( pulleyGraph ) => {
    pulleyGraph.setup = () => {
        pulleyGraph.createCanvas(394, 500);
        pulleyGraph.frameRate(60);
        pulleyGraph.rectMode(CORNERS);
        pulleyGraph.textFont('TimesNewRoman');
    };

    pulleyGraph.draw = () => {
        pulleyGraph.background(200);

        switch (numSelect.value) {
            case "1":
            case "2":
            case "3":
            case "4":
                plot1.update(pulleyRope.ropeLength, 550, 150);
                plot2.update(weight.y, 250, 650);
                plot3.update(0, 1, 0);
                plot4.update(0, 1, 0);
                break;
            case "4.2":
                plot1.update(pulleyRope.ropeLength, 550, 150);
                plot2.update(pulley3.y, -250, 250);
                plot3.update(pulley4.y, 0, 400);
                plot4.update(weight.y, 250, 650);
                break;
        }

        plot1.show();
        plot2.show();
        plot3.show();
        plot4.show();

        let textPosition;
        graph.textAlign(LEFT, CENTER);
        graph.fill(0);
        graph.stroke(0);
        textPosition = graphTextLine("s", 140, plot1.yEnd-15, 17, NORMAL);
        textPosition = graphTextLine("a", textPosition, plot1.yEnd-11, 12, NORMAL);
        graphTextLine("  Displacement", textPosition, plot1.yEnd-15, 14, NORMAL);
        textPosition = graphTextLine("s", 140, plot2.yEnd-15, 17, NORMAL);
        textPosition = graphTextLine("b", textPosition, plot2.yEnd-11, 12, NORMAL);
        graphTextLine("  Displacement", textPosition, plot2.yEnd-15, 14, NORMAL);
        textPosition = graphTextLine("s", 140, plot3.yEnd-15, 17, NORMAL);
        textPosition = graphTextLine("c", textPosition, plot3.yEnd-11, 12, NORMAL);
        graphTextLine("  Displacement", textPosition, plot3.yEnd-15, 14, NORMAL);
        textPosition = graphTextLine("s", 140, plot4.yEnd-15, 17, NORMAL);
        textPosition = graphTextLine("d", textPosition, plot4.yEnd-11, 12, NORMAL);
        graphTextLine("  Displacement", textPosition, plot4.yEnd-15, 14, NORMAL);
    };
}

let graph = new p5(s, 'p5-graph-container');

/**
 * This function draws text.
 * @param {string} content The text to draw.
 * @param {number} xPosition The position of the text from the left side of the canvas in pixels.
 * @param {number} yPosition The position of the text from the top of the canvas in pixels.
 * @param {number} size The size of the text.
 * @param {string} stlye The style of the text.
 * @returns {number} The position at the end of the drawn text.
 */
function graphTextLine(content, xPosition, yPosition, size, style) {
    graph.textStyle(style);
    graph.textSize(size);
    graph.text(content, xPosition, yPosition);
    return xPosition += graph.textWidth(content);
}

class Plot {
    constructor(xStart, yStart, xEnd, yEnd, colour, title) {
      this.xStart = xStart;
      this.yStart = yStart;
      this.xEnd = xEnd;
      this.yEnd = yEnd;

      this.points = new Array(xEnd-xStart).fill(0);
      this.colour = colour;
      this.title = title;
    }

    show() {
        graph.stroke(0);
        graph.line(this.xStart, this.yStart, this.xEnd, this.yStart);
        graph.line(this.xStart, this.yStart, this.xStart, this.yEnd);
    }
  
    update(newPoint, max, min) {
        if (!isNaN(newPoint)) {
            newPoint = graph.map(newPoint, max, min, this.yEnd - this.yStart, 0, true);
        } else {
            newPoint = 0;
        }

        this.points.shift();
        this.points.push(newPoint);

        graph.fill(this.colour);
        graph.stroke(this.colour);
        graph.beginShape();
        graph.vertex(this.xStart, this.yStart);
        for (let i=0; i<=this.points.length; i++) {
            graph.vertex(this.xStart+i, this.yStart+this.points[i]);
        }
        graph.vertex(this.xEnd, this.yStart);
        graph.endShape();
    }
  }