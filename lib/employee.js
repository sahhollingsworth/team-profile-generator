// Template for Employee object
class Employee {
    //Initialize Employee object
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Methods
    getName(){
        return this.Name ;
    }
    getId(){
        return this.Id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;