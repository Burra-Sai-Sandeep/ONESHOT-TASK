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
	user: {
		type: Schema.Types.ObjectId,
		ref: "college",
	},
	Skills: {
		type: [String],
	},
});
module.exports = mongoose.model("student", StudentSchema);
