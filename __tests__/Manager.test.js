// Require the Manager module
const Manager = require('../lib/Manager.js');

// Test #1
test('creates a Manager object with an office number and role', () => {
    // instantiate a manager
    const manager = new Manager(413, 'Manager');

    // check that the property 'officeNumber' is any number
    expect(manager.officeNumber).toEqual(expect.any(Number));
    // check that the property 'role' is the string 'Manager'
    expect(manager.role).toBe('Manager');
});


