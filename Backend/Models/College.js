const mongoose = require("mongoose");
const CollegeSchema = new mongoose.Schema({
	College_Id: {
		type: Number,
	},
	Name: {
		type: String,
	},
	Namee: {
		type: String,
	},
	Year_Founded: {
		type: String,
	},
	City: {
		type: String,
	},
	State: {
		type: String,
	},
	Country: {
		type: String,
	},
	Students_Count: {
		type: Number,
	},
	Courses: {
		type: [String],
	},
});
module.exports = mongoose.model("college", CollegeSchema);
