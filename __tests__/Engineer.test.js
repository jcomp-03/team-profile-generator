// Require the Engineer module
const Engineer = require('../lib/Engineer.js');

// bring in mock data...
// jest.mock('../lib/Engineer.js');

// Test #1
test('creates an Engineer object with name, id, email, and github', () => {
    // instantiate an engineer with name, id, email, and github
    const engineer = new Engineer('James', 1124, 'me@me.com', 'myGithubUsername');

    // check that the property 'name' is any string
    expect(engineer.name).toEqual(expect.any(String));
    // check that the property 'id' is any number
    expect(engineer.id).toEqual(expect.any(Number));
    // check that the property 'email' matches the regex below. Found on Internet.
    expect(engineer.email).toMatch(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
    // check that the property 'role' is the string 'Engineer'
    expect(engineer.role).toBe('Engineer');
    // check that the property 'github' is any string
    expect(engineer.github).toEqual(expect.any(String));
});

// Test #2
test('getRole gets the engineer\'s role', () => {
    // instantiate an engineer with name, id, email, and github
    const engineer = new Engineer('James', 1124, 'me@me.com', 'myGithubUsername');

    // check that the method getRole returns 'Engineer'
    expect(engineer.getRole()).toBe('Engineer');
});

// Test #3
test('getGithub gets the engineer\'s github', () => {
    // instantiate an engineer with name, id, email, and github
    const engineer = new Engineer('James', 1124, 'me@me.com', 'myGithubUsername');

    // check that the method getGithub returns any string
    expect(engineer.getGithub()).toEqual(expect.any(String));
});