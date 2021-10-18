const Employee = require("./employee");

// Template for Manager objects
class Manager extends Employee {
    // initialize the Manager object
    constructor(name, id, email, officeNumber) {
        // call the parent class' (Employee) constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Methods
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;