// Calling the Inquirer module for command line user input interface
const inquirer = require("inquirer");
// Access file system to write data to (or create) html file
const fs = require("fs");
// Responsible for formatting HTML file output with user input values
const generateHTMLTemplate = require("./lib/generateHTMLTemplate.js");

// Calling the team object modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("/lib/Engineer");
const Intern = require("./lib/Intern");

inquirer
    // questions for employee class
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
        {
            type:"confirm",
            message:"Would you like to add another team member to the team?",
            name: "addTeammate",
        },
    ])
    //
    .then (response => {
        // if response to addTeammate is true, then ask questions related to that team member type
        // if response to addTeammate is false, then write to thh html file using the template file
    })