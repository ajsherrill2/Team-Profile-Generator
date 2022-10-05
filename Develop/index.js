// node modules
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

// page creation
const { generateHTML } = require("./utils/generateHTML");
const { generateCSS } = require("./utils/generateCSS");

// team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team array
const teamArray = [];
