// Template for Employee object
class Employee {
    //Initialize Employee object
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Methods
    getName() {
        return this.name ;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;