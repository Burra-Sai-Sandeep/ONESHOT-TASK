import React from "react";
import styles from "../css/HomePage.module.css";
import institutes from "../assets/institutes.svg";
import students from "../assets/students.svg";
import { Button } from "antd";

const homePage = () => (
	<div style={{ margin: "60px auto", paddingBottom: 60 }}>
		<div className={styles.home}>
			<div className={styles.institutes}>
				<div>
					<h1>Browse through institutes</h1>
					<h2 style={{ color: "#4141ac" }}>
						Browse through various colleges across countries which will help you
						decide what suits you best !!!
					</h2>
					<img
						src={institutes}
						alt=""
						style={{ width: "80%", margin: "60px auto" }}
					/>
					<Button
						type="primary"
						onClick={() => (window.location = "/institutes")}
					>
						BROWSE COLLEGES
					</Button>
					{/* <button onClick={() => (window.location = "/institutes")}>
						Browse
					</button> */}
				</div>
			</div>
			<div className={styles.students}>
				<div>
					<img
						src={students}
						alt=""
						style={{ width: "80%", margin: "60px auto" }}
					/>
					<Button
						type="primary"
						onClick={() => (window.location = "/students")}
					>
						KNOW MORE
					</Button>
					<h1 style={{ color: "#4141ac" }}>Know your to be fellow students</h1>
					<h2>
						Get to know the study environment you will get and also the kind of
						peer students before you make a decision !!!
					</h2>
					{/* <button onClick={() => (window.location = "/students")}>
						Know more
					</button> */}
				</div>
			</div>
		</div>
	</div>
);

export default homePage;
