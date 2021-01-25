const { roleArr, managerArr } = require('../utils/employee.js')

const employeePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: `What is the employee's first name?`,
        validate: firstNameInput => {
            if (firstNameInput) {
                return true;
            } else {
                console.log('Please enter a first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: `What is the employee's last name?`,
        validate: lastNameInput => {
            if (lastNameInput) {
                return true;
            } else {
                console.log('Please enter a last name!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: `What is the employee's role?`,
        choices: roleArr
    },
    {
        type: 'list',
        name: 'manager',
        message: `Who is the employee's manager?`,
        choices: managerArr
    },
];

module.exports = employeePrompt;