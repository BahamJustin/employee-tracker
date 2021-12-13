const inquirer = require("inquirer");

const questions = [{}];

function init() {
  return inquirer.prompt(questions).then((answerData) => {
    return answerData;
  });
}

init();
