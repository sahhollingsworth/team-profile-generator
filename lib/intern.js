const Employee = require("./employee");

// Template for Intern objects
class Intern extends Employee {
    // initialize the Intern object
    constructor(name, id, email, school) {
        // call the parent class' (Employee) constructor
        super(name, id, email);
        this.school = school;
    }
    // Methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;