const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

router.get("/", (req, res) => {
  const sql = `SELECT roles.*, department.name 
  AS department_name 
  FROM roles 
  LEFT JOIN department 
  ON roles.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

//Post new role
router.post("/", ({ body }, res) => {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

module.exports = router;
