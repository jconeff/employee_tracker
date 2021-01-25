const { connection, dbQuery } = require('./index.js')

const getDept = () =>  {
    const sql = `SELECT department.name AS Departments from department`
    dbQuery(sql);
};

const addDept = name => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [name];

    dbQuery(sql, params, 'Successfully added department!');
};

module.exports = { getDept, addDept };