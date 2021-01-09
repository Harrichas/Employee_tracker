const mysql = require('mysql2');
const [] = require('./lib/const');
const {} = require('./lib/prompts');
const  {} = require('./lib/queries');

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
    await ();
    connection.end();
});

async function () {

    let ;

    answer = await promptChoices();

}