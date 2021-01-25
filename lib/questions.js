

const questions = [
    {
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
           
            'Add Employee',
            
            'Update Employee Role',
            
            'View All Roles',
            'Add Role',
            
            'View All Departments',
            'Add Department',
           
            'Quit'
        ]
    },
    {
        type: 'input',
        name: 'department',
        message: `What department would you like to add?`,
        when: ({ prompt }) => {
            if (prompt === 'Add Department') {
                return true;
            } else {
                return false;
            }
        },
        validate: departmentInput => {
            if (departmentInput) {
                return true;
            } else {
                console.log('Please enter a department!');
                return false;
            }
        }
    },
];

module.exports = questions;