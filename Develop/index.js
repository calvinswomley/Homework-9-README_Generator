// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const promptUser = () => {
  return inquirer.prompt([
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
      name: 'license',
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
}

const generateReadme = ({ name, description, installation, use, license, contributors, tests, github, email }) =>
 `${name}
  ## Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Use](#Use)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](Tests)
  - [Contacts](#Contacts)

  ## Description:
    ${description}
  ## Installation
    ${installation}
  ## Use
    ${use}
  ## License
    ${license}
  ## Contributors
    ${contributors}
  ## Tests:
    ${tests}
  ## Contact:
    ${github} | ${email}`;

const init = () => {
  promptUser()
  //console.log(response)
  .then((response) => {
    console.log(generateReadme(response))
    fs.writeFile('README.md', generateReadme(response), (appendErr) => appendErr ? console.error(appendErr) : console.info('Success'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There is an error.")
    } else {
      console.log("Something went wrong.")
    }
  })
};

// Function call to initialize app
init();
