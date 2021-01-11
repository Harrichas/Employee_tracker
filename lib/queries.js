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
    const SQL_STATEMENT = `SELECT * FROM employee;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getEmployees() {
    const SQL_STATEMENT = `SELECT * FROM employee;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewRoles() {
    const SQL_STATEMENT = `SELECT * FROM role;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getRole() {
    const SQL_STATEMENT = `SELECT * FROM role;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, []);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getManager() {
    const SQL_STATEMENT = `SELECT manager_id FROM employee;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, []);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewDepartments() {
    const SQL_STATEMENT = `SELECT * FROM department;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getDepartments() {
    const SQL_STATEMENT = `SELECT * FROM department;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByDepart() {
    try {
        let answer = await inquirer.prompt([{
            name: "department",
            type: "list",
            message: "Which department do you want to see the employees for?",
            choices: []
        }])
        const SQL_STATEMENT = `SELECT first_name, last_name, name FROM employee AS e INNER JOIN role AS r
        ON e.role_id = r.id INNER JOIN department AS d ON r.department_id = d.id;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, answer.department);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewEmpByManager() {
    try {
        let answer = await inquirer.prompt([{
            name: "manager",
            type: "list",
            message: "Which manager do you want to see the employees for?",
            choices: []
        }])
        const SQL_STATEMENT = `SELECT first_name, last_name, name FROM employee AS e INNER JOIN ON e.manager_id = m.id`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, answer.manager);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function viewDepartBudget() {
    try {
        let answer = await inquirer.prompt([{
            name: "budget",
            type: "list",
            message: "Pick the department you want to see the budget for.",
            choices: []
        }])
        const SQL_STATEMENT = `SELECT salary FROM role AS r INNER JOIN ON r.department_id = d.id;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, answer.budget);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateManager(managerId, employeeName) {
    try {
        let answer = await inquirer.prompt([{
            name: "employee",
            type: "list",
            message: "Which employee do you want to change the manager for?",
            choices: employeeName
        }, {
            name: "manager",
            type: "list",
            message: "Who is their new manager?",
            choices: managerId
        }])
        const SQL_STATEMENT = `UPDATE employee SET manager_id = ? WHERE id = ?;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.employee, answer.manager]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function updateRole(roleTitle, employeeName) { 
    try {
        let answer = await inquirer.prompt([{
            name: "employee",
            type: "list",
            message: "Which employee do you want to change the role for?",
            choices: employeeName
        }, {
            name: "role",
            type: "list",
            message: "What is their new role?",
            choices: roleTitle
        }])
        const SQL_STATEMENT = `UPDATE employee SET role_id = ? WHERE id =?;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.employee, answer.role]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function addEmployee(roleTitle, managerId) {
    try {
        let answer = await inquirer.prompt([{
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
        },{
            name: "role",
            type: "list",
            message: "What is their role?",
            choices: roleTitle
        },{
            name: "manager",
            type: "list",
            message: "Who is their manager?",
            choices: managerId
        }]);
        console.log(answer);
        const SQL_STATEMENT = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.first_name, answer.last_name, answer.role, answer.manager]);
        console.log("Insert was successful");
        return rows
    } catch (error) {
        console.log(error);
    }
}

async function addDepartment() { 
    try {
        let answer = await inquirer.prompt([{
            name: "department",
            type: "input",
            message: "What department do you want to add?",
            validate:(answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Enter at least one character.";
            }
        }]);
        console.log(answer);
        const SQL_STATEMENT = `INSERT INTO department (name) VALUES (?);`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, answer.department);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function addRole() {
    try {
        let answer = await inquirer.prompt([{
            name: "title",
            type: "input",
            message: "What role do you want to add?",
            validate:(answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Enter at least one character.";
            }
            }, {
                name: "salary",
                type: "input",
                message: "What is the salary?",
                validate:(answer) => {
                    const pass = answer.match(/^[0-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Enter avalid ID number.";
                }
            }, {
                name: "department",
                type: "list",
                message: "Which department does this role belong to?",
                choices: []
            }]);
        
        console.log(answer);
        const SQL_STATEMENT = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.title, answer.salary, answer.department]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeEmployee() {
    try {
        let answer = await inquirer.prompt([{
            name: "name",
            type: "list",
            message: "Pick the employee you wish to remove.",
            choices: []
        }])
        const SQL_STATEMENT = `DELETE FROM employee WHERE (first_name || last_name) = (? || ?);`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.name]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeRole() {
    try {
        let answer = await inquirer.prompt([{
            name: "role",
            type: "list",
            message: "Pick the role you wish to remove.",
            choices: []
        }])
        const SQL_STATEMENT = `SELECT employee;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.role]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function removeDepartment() {
    try {
        let answer = await inquirer.prompt([{
            name: "department",
            type: "list",
            message: "Pick the department you wish to remove.",
            choices: []
        }])
        const SQL_STATEMENT = `SELECT employee;`;
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [answer.department]);
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
    removeRole,
    getRole,
    getManager,
    getEmployees,
    getDepartments
};