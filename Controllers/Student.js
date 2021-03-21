const College = require("../Models/College");
const Student = require("../Models/Student");
exports.create = async (req, res) => {
	try {
		const newStudent = Student({
			StudentId: 2,
			Name: "Upendra",
			Year_batch: "2017",
			College_Id: 3,
			College_Name: "ABV-IIITM",
			Skills: ["Management", "Leadership", "Python", "Bussiness Analyst"],
		});
		const check = await newStudent.save();
		return res.status(200).json(check);
	} catch (error) {
		console.log(error.message);
		if (error) return res.status(500).json({ error: "Something went wrong" });
	}
};
exports.getStudents = async (req, res) => {
	try {
		const students = await Student.find({ College_Id: req.params.id });
		return res.status(200).json(students);
	} catch (error) {
		console.log(error.message);
		if (error) return res.status(500).json({ error: "Something went wrong" });
	}
};
exports.getStudentDetails = async (req, res) => {
	try {
		const student = await Student.findOne({ StudentId: req.params.id });
		return res.status(200).json(student);
	} catch (error) {
		console.log(error.message);
		if (error) return res.status(500).json({ error: "Something went wrong" });
	}
};
