const inquirer = require('inquirer');
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
    Remove_Department] = require('./const'); 

async function promptChoices() {
    try {
        answer = await inquirer
            .prompt({
                name: "index",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
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
                    Remove_Department,                   
                    "EXIT"
                ]
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

// async function () {
//     try {
//         artist = await inquirer
//             .prompt({
//                 name: "name",
//                 type: "input",
//                 message: ""
//             });

//         return;
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function () {
//     try {
//         range = await inquirer
//         .prompt([{
//                 name: "",
//                 type: "input",
//                 message: "",
//                 validate: function(value) {
//                     if (isNaN(value) === false) {
//                       return true;
//                     }
//                     return false;
//                 }
//             },
//             {
//                 name: "",
//                 type: "input",
//                 message: "",
//                 validate: function(value) {
//                     if (isNaN(value) === false) {
//                       return true;
//                     }
//                     return false;
//                 }
//             }
//         ]);

//         return ;
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function () {
//     try {
//         song = await inquirer
//         .prompt({
//             name: "",
//             type: "input",
//             message: ""
//         });

//         return ;
//     } catch (error) {
//         console.log(error);
//     }
// }

 module.exports = {
     promptChoices,
    
 };