const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const generateSvg = require("./lib/generateSvg");

// createSvgFile creates the svg file using generateSvg fuction with the values the user has entered in the inquirer questions. 
function createSvgFile(answers) {
  const fileName = "logo.svg";
  fs.writeFile(fileName, generateSvg(answers), (err) =>
    err
      ? console.log(err)
      : console.log("Succuess! Generated logo.svg")
  );
}

// Init function calls inqurirer to ask the user the array of questions needed for the logo then calls createSvgFile() to create the file
function init() {
  inquirer.prompt(questions).then((answers) => {
    createSvgFile(answers);
  });
}

init();
