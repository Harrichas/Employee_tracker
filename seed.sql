USE employeeDB;

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 1600.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chase", "Harrington", 1, NULL);