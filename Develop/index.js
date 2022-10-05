// node modules
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

// page creation
const { generateHTML } = require("./utils/generateHTML");
const { generateCSS } = require("./utils/generateCSS");

// team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// team array
const teamArray = [];

// manager prompts
const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team managers name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(" Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the team managers id?",
      validate: (numInput) => {
        if (isNaN(numInput)) {
          console.log(" Please enter a number!");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the team managers email?",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (isNaN(numInput)) {
          return true;
        } else {
          console.log(" Please enter an email!");
          return false;
        }
      },
    },
  ])
  .then(ManagerInput => {
    const {name, id, email} = ManagerInput;
    // add code here
  })
};

// employee prompts
const addEmployee = () => {
    
}
