const inquirer = require('inquirer');
const constants = require('./const'); 
const queries = require("./queries");

async function promptChoices() {
    try {
        const answer = await inquirer
            .prompt({
                name: "index",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "View",
                    "Update",
                    "Add",
                    "Remove",                   
                    "EXIT"
                ]
            });
            if(answer.index === "EXIT") {
                return process.exit();
            }
        return mainChoices(answer.index);
    } catch (error) {
        console.log(error);
    }
};

async function mainChoices(answer) {
    switch (answer) {
        case "View": 
            return viewChoices();
        case "Update": 
            return updateChoices();
        case "Add": 
            return addChoices();            
        case "Remove":
            return removeChoices();
        
    }
};

async function viewChoices() {
    try{
        const answer = await inquirer
        .prompt({
            name: "view",
            type: "list",
            message: "What would you like to do?",
            choices: [
                ...constants.Views,                   
                "EXIT"
            ]
        });
        if(answer.view === "EXIT"){
            return process.exit();
        }
        return viewQueries(answer.view);
    } catch (error) {
        console.log(error);
    }
};

async function viewQueries(answer) {
    let rows;
    switch (answer) {
        case "Find all employees": 
            rows = await queries.viewEmployees();
            break;
        case "Find all roles": 
            rows = await queries.viewRoles();
            break;
        case "Find all departments": 
            rows = await queries.viewDepartments();
            break;            
        case "View employees by department.":
            rows = await queries.viewEmpByDepart();
            break;
        case "View employees by manager ID.":
            rows = await queries.viewEmpByManager();
            break;
        case "Which department budget would you like to look at?":
            rows = await queries.viewDepartBudget();
            break;
        
    }
    console.table(rows);
    return promptChoices();
};

async function updateChoices() {
    try{
        const answer = await inquirer
        .prompt({
            name: "update",
            type: "list",
            message: "What would you like to do?",
            choices: [
                ...constants.Update,                   
                "EXIT"
            ]
        });
        if(answer.view === "EXIT"){
            return process.exit();
        }
        return updateQueries(answer.update);
    } catch (error) {
        console.log(error);
    }
};

async function updateQueries(answer) {
    let rows;
    switch (answer) {
        case "Update employee manager?": 
            rows = await queries.updateManager();
                break;
        case "Update employee role?": 
            rows = await queries.updateRole();
                break;
    }
    console.table(rows);
    return promptChoices();
};

async function addChoices() {
    try{
        const answer = await inquirer
        .prompt({
            name: "add",
            type: "list",
            message: "What would you like to do?",
            choices: [
                ...constants.Add,                   
                "EXIT"
            ]
        });
        if(answer.view === "EXIT"){
            return process.exit();
        }
        return addQueries(answer.add);
    } catch (error) {
        console.log(error);
    }
};

async function addQueries(answer) {
    let rows;
    switch (answer) {
        case "Who are you adding?": 
            // let role = await queries.getRole();
            // let roleTitle = role.map((role) => role.title);
            // let newEmployeeRole = role.find((role) => role.title === rows.roleTitle);

            // let manager = await queries.getManager();
            // let managerId = manager.map((manager) => `${manager.first_name} ${manager.last_name}`)
            // let newEmployeeMgr = managers.find((employee) => `${employee.first_name} ${employee.last_name}` === rows.managerId);
            rows = await queries.addEmployee();
                break;
        case "Which role are you adding?": 
            rows = await queries.addRole();
                break;
        case "What department are you adding?":
            rows = await queries.addDepartment();
                break;
    }
    console.table(rows);
    return promptChoices();
};

async function removeChoices() {
    try{
        const answer = await inquirer
        .prompt({
            name: "remove",
            type: "list",
            message: "What would you like to do?",
            choices: [
                ...constants.Remove,                   
                "EXIT"
            ]
        });
        if(answer.view === "EXIT"){
            return process.exit();
        }
        return removeQueries(answer.remove);
    } catch (error) {
        console.log(error);
    }
};

async function removeQueries(answer) {
    let rows;
    switch (answer) {
        case "Who are you removing?": 
            rows = await queries.Employee();
                break;
        case "Which role are you removing?": 
            rows = await queries.removeRole();
                break;
        case "What department are you removing?":
            rows = await queries.removeDepartment();
                break;
    }
    console.table(rows);
    return promptChoices();
};

 module.exports = {
     promptChoices,
     updateChoices,
     addChoices,
     removeChoices    
 };