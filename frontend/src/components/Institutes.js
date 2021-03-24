import { Modal } from "antd";
import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styles from "../css/Institutes.module.css";
import "antd/dist/antd.css";
import { getClgByState, getClgByCourse } from "./backendApis";

class Institutes extends Component {
	state = {
		visible: false,
		visible2: false,
		data: [],
		courses: [],
		colors: ["#ff80df", "#1aff8c", "#5353c6", "#ffff1a", "#00a3cc", "#ffb3b3"],
		colors2: ["#ff4d4d", "#ffff99", "#4dffff", "#b3b3ff", "#80ff80", "#ffaa80"],
		currentState: -1,
		currentCourse: -1,
	};

	componentDidMount() {
		getClgByState()
			.then((response) => {
				console.log(response);
				response.forEach((ele, index) => {
					ele.color = this.state.colors[index % 6];
					ele.value = parseInt(ele.value);
				});
				this.setState({ data: response });
			})
			.catch((err) => console.log(err));
		getClgByCourse()
			.then((response) => {
				console.log(response);
				response.forEach((ele, index) => {
					ele.color = this.state.colors2[index % 6];
					ele.value = parseInt(ele.value);
				});
				this.setState({ courses: response });
			})
			.catch((err) => console.log(err));
	}
	handleOk = () => {
		this.setState({ visible: false });
	};
	handleCancel = () => {
		this.setState({ visible: false });
	};
	handleOk2 = () => {
		this.setState({ visible2: false });
	};
	handleCancel2 = () => {
		this.setState({ visible2: false });
	};
	render() {
		let clgs = [];
		if (this.state.currentState >= 0) {
			this.state.data[this.state.currentState].colleges.forEach((ele) => {
				clgs.push(
					<p
						style={{ cursor: "pointer" }}
						onClick={() => (window.location = `/institute/${ele._id}`)}
					>
						{ele.Name}
					</p>
				);
			});
		}
		let clgs2 = [];
		if (this.state.currentCourse >= 0) {
			this.state.courses[this.state.currentCourse].colleges.forEach((ele) => {
				clgs2.push(
					<p
						style={{ cursor: "pointer" }}
						onClick={() => (window.location = `/institute/${ele._id}`)}
					>
						{ele.Name}
					</p>
				);
			});
		}
		return (
			<div className={styles.pieCharts}>
				<div className={styles.colleges}>
					<h1>
						{`Pie Chart of colleges in each state(${
							window.innerWidth > 500 ? "hover over" : "click on"
						} a segment to know
						which state that segment represents)`}
					</h1>
					{this.state.data.length > 0 && (
						<PieChart
							data={this.state.data}
							animate
							animationDuration={2000}
							onClick={(e, segmentIndex) => {
								console.log(segmentIndex);
								this.setState({ visible: true, currentState: segmentIndex });
							}}
							style={{ cursor: "pointer", width: "70%", margin: "40px auto" }}
							lineWidth={50}
							label={({ dataEntry }) => `${Math.round(dataEntry.value)} %`}
							labelPosition={75}
							labelStyle={{
								fontSize: window.innerWidth > 500 ? "0.3vw" : "1vw",
								fontFamily: "Georgia",
							}}
						/>
					)}
				</div>
				<div className={styles.courses}>
					{this.state.courses.length > 0 && (
						<PieChart
							data={this.state.courses}
							animate
							animationDuration={2000}
							onClick={(e, segmentIndex) =>
								this.setState({ visible2: true, currentCourse: segmentIndex })
							}
							style={{ cursor: "pointer", width: "60%", margin: "40px auto" }}
							lineWidth={50}
							label={({ dataEntry }) =>
								dataEntry.value >= 10 ? `${Math.round(dataEntry.value)} %` : ""
							}
							labelPosition={75}
							labelStyle={{
								fontSize: window.innerWidth > 500 ? "0.3vw" : "1vw",
								fontFamily: "Georgia",
							}}
						/>
					)}
					<h1>
						{`Course Popularity among colleges(${
							window.innerWidth > 500 ? "hover over" : "click on"
						} a segment to know which
						course that segment represents)`}
					</h1>
				</div>
				{this.state.currentState >= 0 && (
					<Modal
						title={`List of colleges in ${
							this.state.data[this.state.currentState].title
						}(${this.state.data[this.state.currentState].value}%)`}
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						{clgs}
					</Modal>
				)}
				{this.state.currentCourse >= 0 && (
					<Modal
						title={`List of colleges which have ${
							this.state.courses[this.state.currentCourse].title
						}(${this.state.courses[this.state.currentCourse].value}%)`}
						visible={this.state.visible2}
						onOk={this.handleOk2}
						onCancel={this.handleCancel2}
					>
						{clgs2}
					</Modal>
				)}
			</div>
		);
	}
}

export default Institutes;
