// Require the Employee module
const Employee = require('../lib/Employee.js');

// Test #1
test('creates an Employee object with name, id, and email properties', () => {
    // instantiate an employee
    const employee = new Employee('James', 123, 'me@me.com'); 

    // check that the property 'name' is any string
    expect(employee.name).toEqual(expect.any(String));
    // check that the property 'id' is any number
    expect(employee.id).toEqual(expect.any(Number));
    // check that the property 'email' matches the regex below. Found on Internet.
    expect(employee.email).toMatch(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
})

// Test #2
test('getName gets the employee\'s name', () => {
    // instantiate an employee
    const employee = new Employee('James', 123, 'me@me.com');

    // check that the method getName returns a string
    expect(employee.getName()).toEqual(expect.any(String));
});

// Test #3
test('getId gets the employee\'s id number', () => {
    // instantiate an employee
    const employee = new Employee('James', 123, 'me@me.com');

    // check that the method getId returns a number
    expect(employee.getId()).toEqual(expect.any(Number));
});

// Test #4
test('getEmail gets the employee\'s email address', () => {
    // instantiate an employee
    const employee = new Employee('James', 123, 'me@me.com');

    // check that the method getEmail returns a string
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Test #5
test('getRole gets the employee\'s role', () => {
    // instantiate an employee
    const employee = new Employee('James', 123, 'me@me.com');

    // check that the method getRole returns a string
    expect(employee.getRole()).toBe('Employee'); //expect.any(String));
});

