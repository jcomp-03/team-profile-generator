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
    
}

module.exports = Employee;