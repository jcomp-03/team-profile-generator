// Require the class Employee so Intern
// can extend from it below
const Employee = require('./Employee.js');

// using keyword 'extends' we can inherit all
// the methods of class Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here
        // with 'super' to inherit properties
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    };

    // method unique to this class Intern
    getSchool() {
        return this.school;
    };
}

module.exports = Intern;