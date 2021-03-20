const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
	StudentId: {
		type: Number,
	},
	Name: {
		type: String,
	},
	Year_batch: {
		type: String,
	},
	College_Id: {
		type: String,
	},
	College_Name: {
		type: String,
	},
	Skills: {
		type: [String],
	},
});
module.exports = mongoose.model("student", StudentSchema);
