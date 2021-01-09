DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE Department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30), 
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id),
    FOREIGN KEY (manager_id)
);
