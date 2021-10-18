# Team Profile Generator
The TeamProfile Generator is a command line application that takes in user input and generates an interactable web application for all members of any given team. Using the commandline to generate team member profiles expedites the process and allows users to leverage stanard templates for required information, by role. 

This information is then added to a template to produce a web page that makes accessing any team member's GitHub or email quick and simple.

## Application
Demo of Team Profile Generator application. [See a higher quality video here.](link).
![GIF Team Profile Generator application demo](./pathtogif)

### Command Line Interface
Command line interface - Mid-prompt question set, possibly multiple, 1 per path
![Image UI command line during user input](./pathtoimage)

Command line interface - Questions completed, Team Profile Page HTML file generated successfully.
![Image UI command line user input complete](./pathtoimage)

### README.md Output
Team Profile Page HTML file created from user input
![Image teamprofilepage.html generated by application](./pathtoimage)

Team Profile page file rendered in browser
![Image teamprofilepage.html generated by application](./pathtoimage)


## Summary
* WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input.
* The application supports 4 role types, with role-specific questions: 
  * Employee (core class, not used independently of any of the extensions)
  * Manager (extension of Employee)
  * Engineer (extension of Employee)
  * Intern (extension of Employee)

### Command Line Interface
* Upon application start via - `node index.js` - the user is prompted to enter the team manager’s name, employee ID, email address, and office number.
* After entering the manager's information, the user is presented with a menu with the option to add an engineer or an intern or to finish building their team.
* If the engineer option is selected, the user is prompted to enter the engineer’s name, ID, email, and GitHub username. After which, the user is taken back to the menu.
* If the intern option is selected, the user is prompted to enter the intern’s name, ID, email, and school. After which, the user is taken back to the menu.
* When the user finishes building their team and exits the application, the Team Profile Page HTML is generated with all team members.

### Web Page 
* Email addresses in the Team Page web interface are visibly clickable and open the default email program of the user to populate the "TO" field of the email with the email address.
* GitHub usernames in the Team Page web interface are visibly clickable and open the GitHub profile in a new tab in the browser.

## Installation
Ensure you have Node.js installed locally to install packages to and from the public npm registry. [Node.js installation documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

This project requires NPMjs, the Inquirer.js package, and Jest testing framework. Once you have clone to repo to your local maching, navigate to the root folder in your command line terminal. Then:
1. `npm install`
Required when when you first set up the project for local development or use OR if any changes are made to the project's dependencies. [More Node information here.](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

2. `npm install inquirer`

3. `npm install --save-dev jest`


## Usage
Run this application by:
1. Cloning the repository to your local machine.

2. Once in the root folder in your command line interface, start the application by entering `node index.js`

## Built with
* [Jest javascript testing framework](https://jestjs.io/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer) - Package for common interactive command line user interfaces. 
* [NPM](https://www.npmjs.com/) - Node package manager, used in conjunction with JS and Inquirer to support application logic and Command Line interface.
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [Git](https://git-scm.com/doc) - Version control system to track changes to source code
* [GitHub](https://docs.github.com/en) - Hosts the code repository

## Authors
Sarah Hollingsworth
* [Github](https://github.com/sahhollingsworth)
* [LinkedIn](https://www.linkedin.com/in/sarahhollingsworth/)

## Acknowledgments