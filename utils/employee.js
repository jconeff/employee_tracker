const inquirer = require('inquirer');


const getEmployee = () => {
    const sql = `SELECT e1.id as ID, CONCAT(e1.first_name, ' ', e1.last_name) as 'Employee Name', 
        department.name AS Department, roles.title as Title, roles.salary as Salary, 
        `
        
    dbQuery(sql, false);
};

const addEmployee = () => {
    // gets roles
    connection.query(`SELECT id, title AS name FROM roles`, (err, res) => {
        if (err) {
            throw err;
        };

        res.forEach(row => {
            roleArr.push({
                id: row.id,
                name: row.name
            });
        });
    });
    
    // gets all employees managers
    connection.query(`SELECT id, CONCAT(employee.first_name, ' ', employee.last_name) AS name FROM employee`, (err, res) => {
        if (err) {
            throw err;
        };

        res.forEach(row => {
            managerArr.push({
                id: row.id,
                name: row.name
            })
        })
    })

    inquirer.prompt(employeePrompt)
        .then(input => {
            const roleId = roleArr.filter(role => input.role === role.name)[0].id;
            const managerId = managerArr.filter(manager => input.manager === manager.name)[0].id;

            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`;
            const params = [input.firstName, input.lastName, roleId, managerId]
        
            connection.query(sql, params, (err, res) => {
                if (err) {
                    throw err;
                };
        
                console.log('Successfully added employee!');
                promptUser();
            });
        });
};

module.exports = { getEmployee, addEmployee };

const { promptUser } = require('../index.js');
const { connection, dbQuery } = require('./index.js')
const employeePrompt = require('../lib/employee.js')