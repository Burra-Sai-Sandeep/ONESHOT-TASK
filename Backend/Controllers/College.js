const College = require("../Models/College");
const { sortByCountry } = require("../Helpers/Sorts");

exports.create = async (req, res) => {
	try {
		const newCollege = College({
			Name: "NIT Durgapur",
			Year_Founded: "1999",
			City: "Durgapur",
			State: "West Bengal",
			Country: "India",
			Students_Count: 4600,
			College_Id: 25,
			Courses: [
				"Computer Science Engineering",
				"Electronics and Communications Engineering",
				"Civil Engineering",
				"Electrical and Electronics Engineering",
				"Chemical Engineering",
				"Mechanincal Engineering",
				"Information Technology",
				"Metallurgical Engineering",
				"Biotechnology Engineering",
				"Computer Science Engineering(Dual)",
				"Aerospace Engineering",
			],
		});
		const check = await newCollege.save();
		return res.status(200).json(check);
	} catch (error) {
		console.log(error.message);
		if (error) return res.status(500).json({ error: "Something went wrong" });
	}
};
exports.getCollegeByNameOrId = async (req, res) => {
	try {
		console.log(req.params.name);
		const college =
			req.params.id === undefined
				? await College.findOne({ Name: req.params.name })
				: await College.findOne({ _id: req.params.id });
		if (!college) return res.status(400).json({ msg: "College not found" });
		return res.status(200).json(college);
	} catch (error) {
		console.log(error.message);
		if (error.kind === "ObjectId")
			return res.status(400).json({ msg: "College not found" });
		else return res.status(500).json({ error: "Something went wrong" });
	}
};
exports.getSimilarColleges = async (req, res) => {
	try {
		const college = await College.findOne({ _id: req.params.id });
		const colleges = await College.find();
		const index = colleges.findIndex((el) => el._id == req.params.id);
		colleges.splice(index, 1);
		let collegeMap = {};
		college.Courses.forEach((element) => {
			collegeMap[element] = 1;
		});
		college.collegeMap = collegeMap;

		colleges.sort((a, b) => sortByCountry(a, b, college));
		if (colleges.length === 0)
			return res
				.status(400)
				.json({ msg: "No Similar College found in the same country" });
		return res.status(200).json(colleges);
	} catch (error) {
		console.log(error.message);
		if (error.kind === "ObjectId")
			return res.status(400).json({ msg: "College not found" });
		else return res.status(500).json({ error: "Something went wrong" });
	}
};
exports.filterBystate = async (req, res) => {
	try {
		const colleges = await College.find();
		const states = {};
		const total = colleges.length;
		colleges.forEach((ele) => {
			if (states[ele.State] === undefined) states[ele.State] = [ele];
			else states[ele.State].push(ele);
		});
		for (let key in states) {
			console.log(parseFloat((states[key].length / total) * 100).toFixed(2));
		}
		return res.status(200).json(states);
	} catch (error) {
		console.log(error.message);
		if (error.kind === "ObjectId")
			return res.status(400).json({ msg: "College not found" });
		else return res.status(500).json({ error: "Something went wrong" });
	}
};
