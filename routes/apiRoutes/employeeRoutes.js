const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// Get all employees
router.get("/", (req, res) => {
  const sql = "SELECT * FROM employee;";

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

// Get employees by manager
router.get("/bymanager", (req, res) => {
  const sql = "";

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

//Get employees by department
router.get("/bydepartment", (req, res) => {
  const sql = "";

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

//Get combined salaries of a department - total utilized budget
router.get("/budget", (req, res) => {
  const sql = "";

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

module.exports = router;
