// Import JavaScript utility modules for creating class Manager, Engineer, and Intern
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function generateEmployeeCards(employeeObject) {
  console.log('You\'re inside the generateEmployeeCards function');
  const employeeArray = employeeObject.employees
  // console.log(typeof employeeArray, employeeArray);

  let finalEmployeeHtmlContent = "";
  for (let i = 0; i < employeeArray.length; i++){

    if(employeeArray[i]["nextAction"].endsWith('engineer')) {
      console.log('Youre inside the if statement within the generateEmployeeCards function.');
      const { actionTaken, engineerName, engineerId, engineerEmail, engineerGithub } = employeeArray[i];
      const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
      let employeeHtml = `
      <div class="col-3">
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-success" style="text-align: center; font-weight: bold; color: blanchedalmond;">
          ${engineer.getName()}
        </div>
        <i class="bi bi-tools" style="font-size: 6rem; text-align: center;"></i>
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;">${engineer.getRole()}</h5>
          <ul class="list-group">
            <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">ID #: ${engineer.getId()}</li>
            <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>
      </div>`;
      finalEmployeeHtmlContent = finalEmployeeHtmlContent.concat(employeeHtml);
    } else {
        console.log('Youre inside the else statement within the generateEmployeeCards function.');
        const { actionTaken, internName, internId, internEmail, internSchool } = employeeArray[i];
        const intern = new Intern(internName, internId, internEmail, internSchool);
        let employeeHtml = `
        <div class="card" style="width: 18rem;">
          <div class="card-header bg-success" style="text-align: center; font-weight: bold; color: blanchedalmond;">
            ${intern.getName()}
          </div>
          <i class="bi bi-cup-straw" style="font-size: 6rem; text-align: center;"></i>
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">${intern.getRole()}</h5>
            <ul class="list-group">
              <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">ID #: ${intern.getId()}</li>
              <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">Email: ${intern.getEmail()}</li>
              <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>`;
        finalEmployeeHtmlContent = finalEmployeeHtmlContent.concat(employeeHtml);
    }
  } // end for statement
  return finalEmployeeHtmlContent;
}

// returns template literal with interpolated manager information
function generateManagerCard(managerObject) {
  return `
  <div class="col-3">
    <div class="card" style="width: 18rem;">
      <div class="card-header bg-success" style="text-align: center; font-weight: bold; color: blanchedalmond;">
        ${managerObject.getName()}
      </div>
      <i class="bi bi-award" style="font-size: 6rem; text-align: center;"></i>
      <div class="card-body">
        <h5 class="card-title" style="text-align: center;">${managerObject.getRole()}</h5>
        <ul class="list-group">
          <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">ID #: ${managerObject.getId()}</li>
          <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">Email: <a href="mailto:${managerObject.getEmail()}">${managerObject.getEmail()}</a></li>
          <li class="list-group-item bg-success" style="font-weight: bolder; color: blanchedalmond;">Office #: ${managerObject.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.exports = templateData => {
    // destructure the templateData as shown below
    const {managerName, managerId, managerEmail, managerOfficeNumber, ...employeesObject} =  templateData; 
    // instantiate a Manager object, pass in the constants assigned
    // from the destructuring operation above.
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Chart</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
      </head>
      <body>
          <div class="d-flex bg-success justify-content-center align-items-center">
            <h1 class="py-3">Team Profile Chart
              <i class="bi bi-people-fill" style="font-size: 4rem; color: blanchedalmond;"></i> 
            </h1>
          </div>
          <div class="container my-3 border">
            <div class="row justify-content-evenly gy-4">
              ${generateManagerCard(manager)}
              ${generateEmployeeCards(employeesObject)}
            </div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </body>
    </html>
    `;
}