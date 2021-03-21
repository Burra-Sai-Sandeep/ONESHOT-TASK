const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");
const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://sandeep:sandeep@cluster0.hgvyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);
		console.log("Database connected");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};
module.exports = connectDB;
