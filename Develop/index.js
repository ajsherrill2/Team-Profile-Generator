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
const addManager = async () => {
  try {
    const answers = await inquirer
    .prompt([
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
          if (valid) {
            return true;
          } else {
            console.log(" Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number?",
        validate: (numInput) => {
          if (isNaN(numInput)) {
            console.log(" Please enter a number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    console.log(answers);
  } catch (error) {
    console.log(error);
  }
  
};

// employee prompts
const addEmployee = async () => {
    try {
        await addManager();
        inquirer
        .prompt([
            {
              type: "list",
              name: "role",
              message: "Which type of team member would you like to add?",
              choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more team members",
              ],
            },
            {
              type: "input",
              name: "name",
              message: "What is your team member's name?",
              when: (input) => input.role === 'Engineer' || input.role === 'Intern',
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter an employee's name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is the team member's id?",
              when: (input) => input.role === 'Engineer' || input.role === 'Intern',
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
              message: "What is the team member's email?",
              when: (input) => input.role === 'Engineer' || input.role === 'Intern',
              validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                  return true;
                } else {
                  console.log(" Please enter an email!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "github",
              message: "What is your team member's GitHub username?",
              when: (input) => input.role === 'Engineer',
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter employee's username!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "school",
              message: "What is your team member's school?",
              when: (input) => input.role === 'Intern',
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter interns's school!");
                  return false;
                }
              },
            },
          ]);
    } catch (error) {
        console.log(error);
    }
};
addEmployee();

