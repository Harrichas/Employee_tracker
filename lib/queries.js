const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employeeDB',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

async function viewEmployees() {
    const SQL_STATEMENT = `SELECT * FROM employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewRoles() {
    const SQL_STATEMENT = `SELECT * FROM role`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewDepartments() {
    const SQL_STATEMENT = `SELECT * FROM department`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByDepart() {
    const SQL_STATEMENT = `SELECT employee FROM department`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewDepartBudget() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateManager() {
    const SQL_STATEMENT = `UPDATE employee SET manager_id = `;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateRole() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    viewEmployees,
    viewRoles,
    viewDepartments,
    viewEmpByDepart,

};