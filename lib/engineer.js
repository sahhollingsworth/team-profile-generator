const Employee = require("./employee");

// Template for Engineer objects
class Engineer extends Employee {
    // initialize the Engineer object
    constructor(name, id, email, githubUser) {
        // call the parent class' (Employee) constructor
        super(name, id, email);
        this.githubUser = githubUser;
    }
    // Methods
    getGithubUser() {
        return this.githubUser;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;