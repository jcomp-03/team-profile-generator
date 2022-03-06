/* AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */

// Require packages needed for application to function correctly
const inquirer = require('inquirer');
const fs = require('fs');

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
function startApp() {
    return inquirer.prompt(managerQuestions);
}

const addToTeam = existingTeam => {
    // If there's no members belonging to the existing team
    // create an empty 'members' array
    if (!existingTeam.members) {
        existingTeam.members = [];
        console.log('members array is created now because it did not exist before.');
    }
    // prompt further questions about engineers and interns
    return inquirer
    .prompt(employeeQuestions)
    .then(additionalMember => {
        // If the user is finished adding to the team, return the existingTeam
        // with all its members in it. Otherwise, continue to run addToTeam
        if(additionalMember.nextAction !== 'I am finished building my team') {
            // add the additional member to the existingTeam
            existingTeam.members.push(additionalMember);
            return addToTeam(existingTeam);
        } else {
            return console.log('The final team looks like:', existingTeam);
        }
    });
};

startApp()
.then(currentTeam => {
    addToTeam(currentTeam);
});
