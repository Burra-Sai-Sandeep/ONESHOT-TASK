const express = require("express");
const router = express.Router();
const {
	create,
	getStudents,
	getStudentDetails,
} = require("../Controllers/Student");
router.post("/create", create);
router.get("/getStudents/:id", getStudents);
router.get("/getStudentDetails/:id", getStudentDetails);
module.exports = router;
