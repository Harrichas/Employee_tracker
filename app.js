const mysql = require('mysql2');
const [
    View_All_Employees,
    Veiw_All_Employees_by_Department,
    View_All_Employees_by_Manager,
    View_All_Roles,
    View_All_Departments,
    View_Total_Budget_by_Department,
    Update_Employee_Manager,
    Update_Employee_Role,
    Add_Employee,
    Add_Role,
    Add_Department,
    Remove_Role,
    Remove_Employee,
    Remove_Department] = require('./lib/const');
const {promptChoices} = require('./lib/prompt');
// const  {} = require('./lib/queries');

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
    //await ();
    connection.end();
});

// async function () {

//     let ;

//   answer = await promptChoices();

// }