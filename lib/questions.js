const questions = [
  {
    type: "checkbox",
    name: "shape",
    message: "What shape would you like on your logo?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like for your shape?",
  },
  {
    type: "input",
    name: "textColor",
    message: "What color would you like for your text color?",
  },
  {
    type: "input",
    name: "text",
    message: "What 3 characters would you like on your logo?",
  },
];

module.exports = questions;