// create a class for SVG with this.text and this.shape with a function to set text and a function to set shape just like shape class
// Use SVG.setText to set

const { Circle, Triangle, Square } = require("./shapes");

class SVG {
  constructor() {
    this.text = "";
    // this.shape = "";
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<text x="50%" y="50%" class="heavy" color="${this.textColor}">${this.text}</text>`
  }
}

function renderShape(answers) {
    let shape = answers.shape.toString();
  switch (shape) {
    case "Circle":
      // call Circle class
      console.log("You selected circle");
      const circle = new Circle();
      circle.setColor(answers.shapeColor);

      const svg = new SVG();
      svg.setText(answers.text, answers.textColor);
      
      return [circle.render(), svg.render()];
      break;
    case "Triangle":
      // call Triangle class
      console.log("You selected triangle");
      break;
    case "Square":
      // call Square class
      console.log("You selected square");
      break;
    default:
      console.log("You need to select a shape");
  }
}

// generateSvg will compose the logo using all elements. First it will have the base shape which includes the color of the shape, then it will have the text on top which includes the text color
function generateSvg(answers) {
  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${renderShape(answers)}

</svg>`;
}

module.exports = generateSvg;
