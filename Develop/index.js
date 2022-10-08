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
const Employee = require("./lib/employee");

// team array
const teamArray = [];

// manager prompts
const addManager = () => {
  inquirer
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
    .then((managerInputs) => {
      const { name, id, email, officeNumber } = managerInputs;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);

      chooseRole();
    });
};

// Employee Role
const chooseRole = () => {
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
    ])
    .then((input) => {
      if (input.role === "Engineer") {
        addEngineer();
      } else if (input.role === "Intern") {
        addIntern();
      } else {
        console.log(teamArray);
        return;
      }
    });
};

// engineer prompts
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
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
        message: "What is the engineer's id?",
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
        message: "What is the engineer's email?",
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
        message: "What is your engineer's GitHub username?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's username!");
            return false;
          }
        },
      },
    ])
    .then((engineerInputs) => {
      let { name, id, email, github } = engineerInputs;
      const engineer = new Engineer(name, id, email, github);

      teamArray.push(engineer);
      console.log(engineer);

      chooseRole()
    });
};

// intern prompts
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
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
        message: "What is the intern's id?",
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
        message: "What is the intern's email?",
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
        name: "school",
        message: "What is your intern's school?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter interns's school!");
            return false;
          }
        },
      },
    ])
    .then((internInputs) => {
      let { name, id, email, school } = internInputs;
      const intern = new Intern(name, id, email, school);

      teamArray.push(intern);
      console.log(intern);

      chooseRole()
    });
};

addManager();
