// Require the Manager module
const Manager = require('../lib/Manager.js');

// Test #1
test('creates a Manager object with name, id, email, and office number', () => {
    // instantiate a manager with name, id, email, role, and office number
    const manager = new Manager('James', 1124, 'me@me.com', 413);

    // check that the property 'name' is any string
    expect(manager.name).toEqual(expect.any(String));
    // check that the property 'id' is any number
    expect(manager.id).toEqual(expect.any(Number));
    // check that the property 'email' matches the regex below. Found on Internet.
    expect(manager.email).toMatch(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
    // check that the property 'role' is the string 'Manager'
    expect(manager.role).toBe('Manager');
    // check that the property 'officeNumber' is any number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test #2
test('getRole gets the manager\'s role', () => {
    // instantiate a manager with name, id, email, role, and office number
    const manager = new Manager('James', 1124, 'me@me.com', 'Manager', 413);

    // check that the method getRole returns 'Manager'
    expect(manager.getRole()).toBe('Manager');
});
