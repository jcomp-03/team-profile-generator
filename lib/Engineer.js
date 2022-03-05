// Require the class Employee so Engineer
// can extend from it below
const Employee = require('./Employee.js');

// using keyword 'extends' we can inherit all
// the methods of class Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor here
        // with 'super' to inherit properties
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    };

    // method unique to this class Engineer
    getGithub() {
        return this.github;
    };

}

module.exports = Engineer;