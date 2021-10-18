// Calling the Inquirer module for command line user input interface
const inquirer = require("inquirer");
// Access file system to write data to (or create) html file
const fs = require("fs");
// Responsible for formatting HTML file output with user input values
const generateHTML = require("./lib/generateHTML.js");

// Calling the team person object modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("/lib/Engineer");
const Intern = require("./lib/Intern");

// Empty Array to store all team person objects created from user input
var team = [];

// Function to prompt Manager-specific questions
function addManager() {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the Manager's employee ID number?",
                name: "employeeId",
            },
            {
                type: "input",
                message: "What is the Manager's ID email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the Manager's ID office number?",
                name: "officeNum",
            },
        ])
        .then(response => {
            // create a Manager object with information from prompt
            const employeeManager = new Manager(response.name, response.id, response.email, response.officeNum);
            // Add this Manager person object to the team array
            team.push(employeeManager);
            // call function that prompts if user done or wants to add another employee
            addAnother();
        })
}

// Functionn to prompt for employee information, used for all non-Manager team additions
function addEmployee () {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is this team member's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is this team member's employee ID number?",
            name: "employeeId",
        },
        {
            type: "input",
            message: "What is this team member's ID email address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is this team member's role?",
            choices: ["Engineer", "Intern"],
            name: "role",
        },
    ])
    // Evaluate user input (response)
    .then(response => {
        // if employee is Engineer, then ask additionl Engineer-specific prompt(s)
        if(response.role === "Engineer") { 
            addEngineer(response.name, response.id, response.email);
        }
        // if employee is Inter, then ask additionl Intern-specific prompt(s)
        else if (response.role === "Intern") {
            addIntern(response.name, response.id, response.email);
        }
    })
}

// Function to prompt engineer-specific questions in addition to employee questions
function addEngineer () {
    inquirer
    // User input prompts
    .prompt([
        {
            type: "input",
            message: "What is this team member's GitHub username?",
            name: "githubUser",
        },
    ])
    // Evaluate user input (response)
    .then(response => {
        // create a Engineer object with information from prompt
        const employeeEngineer = new Engineer(response.name, response.id, response.email, response.githubUser);
        // Add this Engineer person object to the team array
        team.push(employeeEngineer);
        // call function that prompts if user done or wants to add another employee
        addAnother();
    })
}

// Function to prompt intern-specific questions in addition to standard employee questions
function addIntern () {
    inquirer
    // User input prompts
    .prompt([
        {
            type: "input",
            message: "What school does this team member attend?",
            name: "school",
        },
    ])
    // Evaluate user input (response)
    .then(response => {
        // create a Intern object with information from prompt
        const employeeIntern = new Intern(response.name, response.id, response.email, response.school);
        // Add this Intern person object to the team array
        team.push(employeeIntern);
        // call function that prompts if user done or wants to add another employee
        addAnother();
    })
}

// Function to either complete user prompts or restart add employee prompts to add another teammate to the team array
function addAnother() {
    inquirer
    // User input prompts
    .prompt([
        {
            type:"confirm",
            message:"Would you like to add another team member to the team?",
            name: "addAnother",
        },
    ])
    // Evaluate user input (response)
    .then (response => {
        // If more employees to add, run addEmployee prompts
        if(response.addAnother === true) {
            addEmployee();
        }
        // if no more employees to add, call function to build index.html with completed team array
        else {
            buildPage("./dist/teampage.html", team);
        }
    })
}

// Using formatting in generateHTML.js, generate teamprofilepage.html file with data from the user response array (team array).
function buildPage(file, data) {
    // Create a file called teamprofilepage.html, adding the input data transformed by generateHTML.js formatting.
    fs.writeFile("./dist/teamprofilepage.html", generateHTML(data), function (error) {
        // If file created successfull, notify user of success in the command line interface. If error, notify user in the command line interface.
        if(error) {
            console.log("An unknown error occurred.")
        }
        else {
            console.log("Your Team Profile page has been created successfully!")
        }
    })
}

// Start app logic, assumption is user is Manager
addManager();