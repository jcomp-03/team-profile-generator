// Parent class from which the other three
// classes Engineer, Intern, and Manager will extend
class Employee {
    // constructor function here
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    // I opt to include getRole method in the parent class Employee
    // It makes the most sense instead of creating that method for
    // each child class that extends from Employee
    getRole() {
        // console.log(`Employee's role is ${this.role}.`);
        return this.role;
    };
}

module.exports = Employee;