const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const cTable = require("console.table");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: "employees",
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const init = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update an employee",
        "Exit",
      ],
    },
  ]);
  //console.log('answer', answer);
  switch (answer.options) {
    case "View all departments":
      allDepartments();
      break;

    case "View all roles":
      allRoles();
      break;

    case "View all employees":
      allEmployees();
      break;

    case "Add department":
      addDepartment();
      break;

    case "Add role":
      addRole();
      break;

    case "Add employee":
      addEmployee();
      break;

    case "Exit":
      break;
  }
};

const allDepartments = () => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(500).json({ error: err.message });
    }
    console.table(rows);
    init();
  });
};

const allRoles = () => {
  const sql = `SELECT roles.*, department.name 
  AS department_name 
  FROM roles 
  LEFT JOIN department 
  ON roles.department_id = department.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(505).json({ error: err.message });
      return;
    }
    console.table(rows);
    init();
  });
};

const allEmployees = () => {
  const sql = `SELECT employee.*, roles.title 
  AS roles_title 
  FROM roles 
  LEFT JOIN employee 
  ON employee.role_id = roles.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(505).json({ error: err.message });
      return;
    }
    console.table(rows);
    init();
  });
};

const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "department_name",
      message: "What department would you like to add?",
    })
    .then((answers) => {
      db.query(
        `INSERT INTO department (name) VALUES ('${answers.department_name}')`,
        (err, results) => {
          if (err) throw err;
          console.log("Department Added!");
        }
      );
      init();
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What role would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this role?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What department id does this role belong to?",
      },
    ])
    .then(function (answer) {
      db.query(
        `INSERT INTO roles (title, salary, department_id) VALUES ('${answer.title}', '${answer.salary}', ${answer.department_id})`,
        (err, res) => {
          if (err) throw err;

          console.log("Role Added!");
        }
      );
      init();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the new employees first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the new employess last name?",
      },

      {
        name: "role_id",
        type: "input",
        message: "What is the new employees role id?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the new employees manager's id?",
      },
    ])
    .then(function (answer) {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.first_name}', '${answer.last_name}', '${answer.role_id}', ${answer.manager_id}`,
        (err, res) => {
          if (err) throw err;

          console.log("Employee Added!");
        }
      );
      init();
    });
};

init();
