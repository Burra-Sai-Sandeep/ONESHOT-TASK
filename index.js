const express = require("express");
const connectDB = require("./Config/db");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

const collegeRoutes = require("./Routes/College");
const studentRoutes = require("./Routes/Student");

connectDB();
app.use("/api/College", collegeRoutes);
app.use("/api/Student", studentRoutes);

app.use(express.json({ extended: false }));
if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.get("/", (req, res) => {
	res.send("hello");
});
