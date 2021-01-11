const inquirer = require('inquirer');
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
    const SQL_STATEMENT = `
        SELECT first_name, last_name, name
        FROM employee AS e
        INNER JOIN
        role AS r
        ON e.role_id = r.id
        INNER JOIN
        department AS d
        ON r.department_id = d.id`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    const SQL_STATEMENT = `
        SELECT first_name, last_name, name
        FROM employee AS e
        INNER JOIN ON e.manager_id = m.id`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewDepartBudget() {
    const SQL_STATEMENT = `SELECT salary FROM role AS r INNER JOIN ON r.department_id = d.id`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateManager() {
    const SQL_STATEMENT = `UPDATE employee SET manager_id = ? `;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateRole() {
    const SQL_STATEMENT = `UPDATE employee SET role_id = ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function addEmployee() {

    const SQL_STATEMENT = `INSERT INTO employee SET ?`;

    try {
        inquirer.prompt({
            name: "first_name",
            type: "input",
            message: "what is their first name?",
            validate:(answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Enter at least one character.";
            }
        }, {
            name: "last_name",
            type: "input",
            message: "what is their last name?",
            validate:(answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Enter at least one character.";
            }
        });
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function addDepartment() {
    const SQL_STATEMENT = `INSERT INTO department SET ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function addRole() {
    const SQL_STATEMENT = `INSERT INTO role SET ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeEmployee() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeRole() {
    const SQL_STATEMENT = `SELECT employee`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeDepartment() {
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
    viewEmpByManager,
    viewDepartBudget,
    updateManager,
    updateRole,
    addDepartment,
    addEmployee,
    addRole,
    removeDepartment,
    removeEmployee,
    removeRole
};