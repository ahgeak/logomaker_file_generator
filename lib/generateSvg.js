const { Circle, Triangle, Square } = require("./shapes");

// SVG class constructor will take the text and the text color to render the data for the SVG file
class SVG {
  constructor() {
    this.text = "";
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="24" font-family="Serif" fill="${this.textColor}">${this.text}</text>`;
  }
}

// renderShape will use a swtich case to run through the shapes until the correct shape is returned. Each case will log the selected shape, set the colors, shape and text for the logo. If no shape is selected the user will be prompted to select a shape
function renderShape(answers) {
  let shape = answers.shape.toString();
  switch (shape) {
    case "Circle":
      console.log("You selected circle");
      const circle = new Circle();
      circle.setColor(answers.shapeColor);

      const svgCircle = new SVG();
      svgCircle.setText(answers.text, answers.textColor);

      return [circle.render(), svgCircle.render()];
    case "Triangle":
      console.log("You selected triangle");
      const triangle = new Triangle();
      triangle.setColor(answers.shapeColor);

      const svgTriangle = new SVG();
      svgTriangle.setText(answers.text, answers.textColor);

      return [triangle.render(), svgTriangle.render()];
    case "Square":
      console.log("You selected square");
      const square = new Square();
      square.setColor(answers.shapeColor);

      const svgSquare = new SVG();
      svgSquare.setText(answers.text, answers.textColor);

      return [square.render(), svgSquare.render()];
    default:
      console.log("You need to select a shape");
  }
}

// generateSvg will compose the logo using all elements. First it will have the base shape which includes the color of the shape, then it will have the text on top which includes the text color
function generateSvg(answers) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${renderShape(answers)}

</svg>`;
}

module.exports = generateSvg;
