const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const generateSvg = require("./lib/generateSvg");

// createSvgFile creates the svg file using generateSvg fuction
function createSvgFile(answers) {
  const fileName = "logo.svg";
  fs.writeFile(fileName, generateSvg(answers), (err) =>
    err
      ? console.log(err)
      : console.log("Succuess! Generated logo.svg")
  );
}

// Init function calls inqurirer to ask the user the array of questions for the logo then alls createSvgFile() to create the file
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    createSvgFile(answers);
  });
}

init();
