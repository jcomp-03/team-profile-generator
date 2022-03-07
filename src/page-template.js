// Import JavaScript utility modules for creating class Manager, Engineer, and Intern
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function generateBootstrapCard(someParam) {

}

module.exports = templateData => {
    // destructure the templateData as shown below
    const {managerName, managerId, managerEmail, managerOfficeNumber, ...employees} =  templateData; 
    // instantiate a Manager object, pass in the constants assigned
    // from the destructuring operation above
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
    // print the manager object
    console.log(manager);
    console.log(employees);

    return `
    
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Org Chart</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
  
    <body>
        <div class="d-flex bg-success justify-content-center align-items-center">
          <h1 class="py-3 border">Team Profile Chart
            <i class="bi bi-people-fill" style="font-size: 4rem; color: red;"></i> 
          </h1>
        </div>

      <div class="container my-3 border">
        <div class="row mx-auto border">

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Manager name
            </div>
            <i class="bi bi-award" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Manager</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Engineer name
            </div>
            <i class="bi bi-tools" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Engineer</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Intern name
            </div>
            <i class="bi bi-cup-straw" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Intern</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Intern name
            </div>
            <i class="bi bi-cup-straw" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Intern</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Intern name
            </div>
            <i class="bi bi-cup-straw" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Intern</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-header" style="text-align: center;">
              Intern name
            </div>
            <i class="bi bi-cup-straw" style="font-size: 6rem; text-align: center;"></i>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Intern</h5>
              <ul class="list-group">
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
                <li class="list-group-item">Employee info here</li>
              </ul>
            </div>
          </div>

        </div>
        
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `;
}