// Require the Employee module
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    // instantiate an employee
    const employee = new Employee();

    // check that the property 'name' is any string
    expect(employee.name).toEqual(expect.any(String));
    // check that the property 'id' is any number
    expect(employee.id).toEqual(expect.any(Number));
    // check that the property 'email' contains at least an '@' symbol...improve later on
    expect(employee.email).toMatch(/@/);
    //
})