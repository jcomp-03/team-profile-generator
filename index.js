// Require packages needed for application to function correctly
const inquirer = require('inquirer');
const fs = require( 'fs');


const generateHtmlPage = require('./src/page-template.js');

const managerQuestions = [
    //managerName
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name (required)?',
        validate: input => {
            if (!isNaN(input)) {
                console.log('Please enter the manager\'s name!');
                return false;
            } else {
                return true;
            }
        }
    },
   //managerId
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s id (required)?',
        validate: input => {
            if (isNaN(input)) {
                console.log('Please enter the manager\'s id as a strict number!');
                return false;
            } else {
                return true;
            }
        }
    },
    //managerEmail
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager\'s email (required)?',
        validate: input => {
            const email = input.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
            if (!email) {
                console.log('Please enter the manager\'s email!');
                return false;
            } else {
                return true;
            }
        }
    },
    //managerOfficeNumber
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the manager\'s office number (required)?',
        validate: input => {
            if (isNaN(input)) {
                console.log('Please enter the manager\'s office number as a strict number!');
                return false;
            } else {
                return true;
            }
        }
    },
];

const employeeQuestions = [
    //nextAction
    {
        type: 'list',
        name: 'nextAction',
        message: 'Select what you would like to do next:',
        choices: ['Add an engineer', 'Add an intern', new inquirer.Separator(), 'I am finished building my team'],
        default: 'I am finished building my team',
    },
    //engineerName
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer\'s name (required)?',
        validate: input => {
            if (!input) {
                console.log('Please enter the engineer\'s name!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    //engineerId
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s id (required)?',
        validate: input => {
            if (isNaN(input)) {
                console.log('Please enter the engineer\'s id as a strict number!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    //engineerEmail
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s email (required)?',
        validate: input => {
            const email = input.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
            if (!email) {
                console.log('Please enter the engineer\'s email!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    //engineerGithub
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the engineer\'s Github (required)?',
        validate: input => {
            if (!input) {
                console.log('Please enter the engineer\'s Github!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    //internName
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name (required)?',
        validate: input => {
            if (!input) {
                console.log('Please enter the intern\'s name!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    //internId
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s id (required)?',
        validate: input => {
            if (isNaN(input)) {
                console.log('Please enter the intern\'s id as a strict number!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    //internEmail
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s email (required)?',
        validate: input => {
            const email = input.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
            if (!email) {
                console.log('Please enter the intern\'s email!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    //internSchool
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the intern\'s school (required)?',
        validate: input => {
            if (!input) {
                console.log('Please enter the intern\'s school!');
                return false;
            } else {
                return true;
            }
        },
        when: ({nextAction}) => {
            if (nextAction === 'Add an intern') {
                return true;
            } else {
                return false;
            }
        }
    },    
];

// start the app
function promptUser() {
    return inquirer.prompt(managerQuestions);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if(err) throw err;
      console.log('Writing index.html is complete. Have a look at it!');
    });
}

function addToTeam(existingTeam) {
    // If there's no employees belonging to the existing team
    // create an empty 'employees' array
    if (!existingTeam.employees) {
        existingTeam.employees = [];
        console.log('Created new array "employees" to hold additional employees');
    }
    console.log(`
        ==================
     --- Add To Your Team ---
        ==================
    `);
    // prompt further questions about engineers and interns
    return inquirer
    .prompt(employeeQuestions)
    .then(additionalMember => {
        // If the user is finished adding to the team, return the existingTeam
        // with all its employees in it. Otherwise, continue to run addToTeam
        if(additionalMember.nextAction == 'I am finished building my team') {
            return generateHtmlPage(existingTeam); 
        }
        // add the additional member to the existingTeam
        existingTeam.employees.push(additionalMember);
        return addToTeam(existingTeam);       
    });
};

promptUser()
.then(addToTeam)
.then(htmlContent => {
    console.log('htmlContent is', htmlContent);
    writeToFile('./dist/index.html', htmlContent);
})
.catch(err => {
    console.log('The error is: ', err);
});