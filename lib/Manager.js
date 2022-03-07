// Require the class Employee so Manager
// can extend from it below
const Employee = require('./Employee.js');

// using keyword 'extends' we can inherit all
// the methods of class Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here
        // with 'super' to inherit properties
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'; 
    };

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;