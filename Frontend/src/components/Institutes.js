import { Modal } from "antd";
import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styles from "../css/Institutes.module.css";
import "antd/dist/antd.css";

class Institutes extends Component {
	state = {
		visible: false,
	};
	handleOk = () => {
		this.setState({ visible: false });
	};
	handleCancel = () => {
		this.setState({ visible: false });
	};
	render() {
		return (
			<div className={styles.pieCharts}>
				<div className={styles.colleges}>
					<h1>
						Pie Chart of colleges in each state(hover over a segment to know
						which state that segment represents)
					</h1>
					<PieChart
						data={[
							{ title: "Andhra Pradesh", value: 10, color: "#E38627", key: 10 },
							{ title: "Tamil Nadu", value: 15, color: "#C13C37" },
							{ title: "Karnataka", value: 20, color: "#6A2135" },
							{ title: "Assam", value: 1, color: "blue" },
							{ title: "Maharashtra", value: 27, color: "orange" },
							{ title: "Utthar Pradesh", value: 31, color: "lightgreen" },
						]}
						animate
						animationDuration={2000}
						onClick={() => (window.location = "/institute/1")}
						// onClick={() => this.setState({ visible: true })}
						style={{ cursor: "pointer", width: "70%", margin: "40px auto" }}
						lineWidth={50}
						label={({ dataEntry }) =>
							dataEntry.value >= 5 ? `${Math.round(dataEntry.value)} %` : ""
						}
						labelPosition={75}
						labelStyle={{ fontSize: "0.3vw", fontFamily: "Georgia" }}
					/>
				</div>
				<div className={styles.courses}>
					<PieChart
						data={[
							{
								title: "Computer Science Engineering",
								value: 60,
								color: "#E38627",
							},
							{ title: "Civil Engineering", value: 28, color: "#C13C37" },
							{
								title: "Electrical and Electronics Engineering",
								value: 27,
								color: "#6A2135",
							},
							{
								title: "Electrical and Communications Engineering",
								value: 31,
								color: "purple",
							},
							{
								title: "Metallurgical Engineering",
								value: 15,
								color: "orange",
							},
							{
								title: "Biotechnology Engineering",
								value: 10,
								color: "lightgreen",
							},
						]}
						animate
						animationDuration={2000}
						onClick={() => this.setState({ visible: true })}
						style={{ cursor: "pointer", width: "60%", margin: "40px auto" }}
						lineWidth={50}
						label={({ dataEntry }) =>
							dataEntry.value >= 5 ? `${Math.round(dataEntry.value)} %` : ""
						}
						labelPosition={75}
						labelStyle={{ fontSize: "0.3vw", fontFamily: "Georgia" }}
					/>
					<h1>
						Course Popularity among colleges(hover over a segment to know which
						course that segment represents)
					</h1>
				</div>
				<Modal
					title="List of colleges"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
	}
}

export default Institutes;
