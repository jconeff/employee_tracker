
const questions = require('./lib/questions');

const promptUser = () => {
    inquirer.prompt(questions)
        .then(res => {
            switch (res.prompt) {
                case 'View All Employees':
                    getEmployees();
                    break;
               
                case 'Add Employee':
                    addEmployee(res.firstName, res.lastName);
                    break;
                
                case 'Update Employee Role':
                    break;
                
                case 'View All Roles':
                    getRole();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                
                case 'View All Departments':
                    getDept();
                    break;
                case 'Add Department':
                    addDept(res.department);
                    break;
            
                case 'Quit':
                    quit();
                    break;
            };
        })
};

promptUser();

module.exports = { promptUser };
const { quit } = require('./utils/index.js');
const { getEmployees, addEmployee } = require('./utils/employee.js');
const { getRole, addRole } = require('./utils/roles.js');
const { getDept, addDept } = require('./utils/department.js');