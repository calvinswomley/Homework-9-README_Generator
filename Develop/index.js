console.log("Hello world!")

// TODO: Include packages needed for this application
var input = process.argv

var inquirer = require('inquirer');
var fs = require('fs');


// TODO: Create an array of questions for user input
//var questions = ["What is the title of your project?", "Describe the project.", "How do you install the app?", "How do you use the app?", "What type of license?", "Who are the contributors?", "How is the app tested?", "GitHub Username?", "Email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile('README.md', `${JSON.stringify(fileName, data)}\n`, (err) =>
    console.log("the file name: " + fileName + " data: " + data)
  );

}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the app?',
    },
    {
      type: 'input',
      name: 'use',
      message: 'How do you use the app?',
    },
    {
      type: 'checkbox',
      message: 'What type of license?',
      name: 'liscense',
      choices: ['MIT', 'CC', 'GPL', 'ISC'],
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are the contributors?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How is the app tested?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address?',
    },
  ])
  .then((response) => 
      fs.appendFile('README.md', `${JSON.stringify(response)}\n`, (err) =>
      console.log("An error occured: " + err)
      )
      //writeToFile(fileName, data)
  )
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There is an error.")
    } else {
      console.log("Something went wrong.")
    }
  })
}

// Function call to initialize app
init();
