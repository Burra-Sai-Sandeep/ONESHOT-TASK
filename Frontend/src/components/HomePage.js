import React from "react";
import styles from "../css/HomePage.module.css";
import institutes from "../assets/institutes.svg";
import trends from "../assets/trends.svg";
import { Button } from "antd";

const homePage = () => (
	<div style={{ margin: "60px auto", paddingBottom: 60 }}>
		<div className={styles.home}>
			<div className={styles.institutes}>
				<div>
					<h1>Browse through colleges</h1>
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
						LIST OF COLLEGES
					</Button>
				</div>
			</div>
			<div className={styles.students}>
				<div>
					<img
						src={trends}
						alt=""
						style={{ width: "80%", margin: "60px auto" }}
					/>
					<Button
						type="primary"
						onClick={() => (window.location = "/institutes")}
					>
						KNOW MORE
					</Button>
					<h1 style={{ color: "#4141ac" }}>Check out college statistics</h1>
					<h2>
						Take a look at the college statistics by state and by course and
						thereby make an informed decision on where to join !!!
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
