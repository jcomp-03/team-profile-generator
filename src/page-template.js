// Import JavaScript utility modules for creating class Manager, Engineer, and Intern
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');


module.exports = templateData => {
    console.log('From page-template.js');
    console.log(templateData);

    // destructure the templateData as shown below
    const {managerName, managerId, managerEmail, managerOfficeNumber, ...employees} =  templateData; 
    // instantiate a Manager object, pass in the constants assigned
    // from the destructuring operation above
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
    // print the manager object
    console.log(manager);

    return `The manager is:
      ${manager.getName()}
      ${manager.getId()}
      ${manager.getEmail()}
      ${manager.getRole()}
    `
    
    /* `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
              header.github
            }">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `; */
}