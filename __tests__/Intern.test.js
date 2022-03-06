// Require the Intern module
const Intern = require('../lib/Intern.js');

// Test #1
test('creates an Intern object with name, id, email, and school', () => {
    // instantiate an intern with name, id, email, and school
    const intern = new Intern('James', 1124, 'me@me.com', 'University of Miami');

    // check that the property 'name' is any string
    expect(intern.name).toEqual(expect.any(String));
    // check that the property 'id' is any number
    expect(intern.id).toEqual(expect.any(Number));
    // check that the property 'email' matches the regex below. Found on Internet.
    expect(intern.email).toMatch(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
    // check that the property 'role' is the string 'Intern'
    expect(intern.role).toBe('Intern');
    // check that the property 'school' is any string
    expect(intern.school).toEqual(expect.any(String));
});

// Test #2
test('getRole gets the intern\'s role', () => {
    // instantiate an intern with name, id, email, and school
    const intern = new Intern('James', 1124, 'me@me.com', 'University of Miami');

    // check that the method getRole returns 'Intern'
    expect(intern.getRole()).toBe('Intern');
});

// Test #3
test('getSchool gets the intern\'s school', () => {
    // instantiate an intern with name, id, email, and school
    const intern = new Intern('James', 1124, 'me@me.com', 'University of Miami');

    // prints the intern's id
    console.log(`${intern.name}'s id number is ${intern.id}. Did this work for you?`);
    // check that the method getRole returns 'Intern'
    expect(intern.getSchool()).toBe('University of Miami');
});