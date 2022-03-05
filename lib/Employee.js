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

    getRole() {
        console.log(`Employee's role is ${this.role}.`);
        return this.role;
    };
}

module.exports = Employee;