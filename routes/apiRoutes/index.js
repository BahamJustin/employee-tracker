const express = require("express");
const router = express.Router();

const departmentRoutes = require("./departmentRoutes");
const employeeRoutes = require("./employeeRoutes");
const roleRoutes = require("./roleRoutes");

router.use("/departments", departmentRoutes);
router.use("/employee", employeeRoutes);
router.use("/roles", roleRoutes);

module.exports = router;
