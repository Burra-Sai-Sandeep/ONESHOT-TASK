const College = require("../Models/College");
const Student = require("../Models/Student");
const StudentData = require("../StudentData.json");
exports.create = async (req, res) => {
	try {
		let check;
		for (let index = 0; index < StudentData.length; index++) {
			const newStudent = Student(StudentData[index]);
			check = await newStudent.save();
		}
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
