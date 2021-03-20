const express = require("express");
const {
	create,
	getCollegeByNameOrId,
	getSimilarColleges,
	filterBystate,
	filterByCollegeCourses,
	getColleges,
} = require("../Controllers/College");
const router = express.Router();
router.post("/create", create);
router.get("/", getColleges);
router.get("/Id/:id", getCollegeByNameOrId);
router.get("/name/:name", getCollegeByNameOrId);
router.get("/similarColleges/:id", getSimilarColleges);
router.get("/byState", filterBystate);
router.get("/byCourse", filterByCollegeCourses);
module.exports = router;
