USE employeeDB;

INSERT INTO department (name)
VALUES ("Sales"), ("HR"), ("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 1600.00, 1), ("Software", 2000.00, 3), ("Legal", 2500.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chase", "Harrington", 1, 1), ("Randel", "Rouse", 2, 1), ("blah", "jksdf", 3, 3); 