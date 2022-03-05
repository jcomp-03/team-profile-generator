// Require the class Employee so Player
// can extend it below
const Employee = require('./Employee.js');

// using keyword 'extends' we can inherit all
// the methods of class Employee
class Manager extends Employee {
    constructor(officeNumber, role) {
        // call parent constructor here
        // with 'super' to inherit properties
        super();

        this.officeNumber = officeNumber;
        this.role = role;
    }

}

module.exports = Manager;