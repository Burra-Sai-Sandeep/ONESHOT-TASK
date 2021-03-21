import { Modal, Space, Table, Tag } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import college from "../assets/college.jpg";
import portfolio from "../assets/portfolio.svg";
import styles from "../css/Institute.module.css";
import { getDetailsByClgId, getSimilarClgs, getStudents } from "./backendApis";

class Institute extends Component {
	state = {
		data: [],
		clgData: {},
		studentData: [],
		studentIndex: -1,
		visible: false,
	};
	componentDidMount() {
		const clgId = this.props.match.params.id;
		getSimilarClgs(clgId)
			.then((response) => {
				response.length = 10;
				this.setState({ data: response });
			})
			.catch((err) => console.log(err));
		getDetailsByClgId(clgId)
			.then((response) => {
				this.setState({ clgData: response });
				getStudents(response.College_Id)
					.then((res) => {
						this.setState({ studentData: res });
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}

	handleOk = () => {
		this.setState({ visible: false });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		const columns = [
			{
				title: "Name",
				dataIndex: "Name",
				key: "Name",
			},
			{
				title: "City",
				dataIndex: "City",
				key: "City",
			},
			{
				title: "State",
				dataIndex: "State",
				key: "State",
			},
			{
				title: "Students Count",
				key: "Students_Count",
				dataIndex: "Students_Count",
			},
		];

		const studentCols = [
			{
				title: "Enrollment No.",
				dataIndex: "StudentId",
				key: "StudentId",
			},
			{
				title: "Name",
				dataIndex: "Name",
				key: "Name",
			},
			{
				title: "Batch",
				dataIndex: "Year_batch",
				key: "Year_batch",
			},
		];

		let courses = "";
		if (Object.entries(this.state.clgData).length > 0) {
			this.state.clgData.Courses.forEach((ele) => {
				courses += ele;
				courses += ", ";
			});
			courses = courses.slice(0, -2);
		}

		let skills = "";
		if (this.state.studentIndex >= 0) {
			this.state.studentData[this.state.studentIndex].Skills.forEach((ele) => {
				skills += ele;
				skills += ", ";
			});
			skills = skills.slice(0, -2);
		}

		return (
			<div style={{ paddingBottom: 60, backgroundColor: "lightblue" }}>
				<div className={styles.collegeCard}>
					<div style={{ display: "flex", padding: 20 }}>
						<img
							src={college}
							alt=""
							style={{ width: "70%", margin: "auto" }}
						/>
					</div>
					<div style={{ padding: 15 }}>
						<p>{`College Name: ${this.state.clgData.Name}`}</p>
						<p>{`Courses offered: ${courses}`}</p>
						<p>{`City: ${this.state.clgData.City}`}</p>
						<p>{`State: ${this.state.clgData.State}`}</p>
						<p>{`Country: ${this.state.clgData.Country}`}</p>
					</div>
				</div>
				<div style={{ textAlign: "center" }}>
					<div
						className={styles.studentsTitle}
					>{`Students of ${this.state.clgData.Name}`}</div>
					<Table
						key="students"
						scroll
						dataSource={this.state.studentData}
						columns={studentCols}
						style={{
							width: window.innerWidth > 500 ? "80%" : "90%",
							margin: "auto",
							cursor: "pointer",
						}}
						onRow={(record, rowIndex) => {
							return {
								onClick: (event) => {
									this.setState({ visible: true, studentIndex: rowIndex });
								},
							};
						}}
					/>
					;
				</div>
				<div style={{ textAlign: "center" }}>
					<div className={styles.similarTitle}>Similar colleges</div>
					<Table
						key="colleges"
						scroll={{ x: 400 }}
						dataSource={this.state.data}
						columns={columns}
						style={{
							width: window.innerWidth > 500 ? "80%" : "90%",
							margin: "auto",
							cursor: "pointer",
						}}
						onRow={(record, rowIndex) => {
							return {
								onClick: (event) => {
									window.location = `/institute/${this.state.data[rowIndex]._id}`;
								},
							};
						}}
					/>
				</div>
				{this.state.studentIndex >= 0 && (
					<Modal
						title={`${
							this.state.studentData[this.state.studentIndex].Name
						}'s details:`}
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						// width={400}
					>
						<div className={styles.portfolioCard}>
							<div className={styles.portfolioImg}>
								<img
									src={portfolio}
									alt=""
									style={{
										width: "90%",
										height: "90%",
										// height: "80%",
										margin: "auto",
										padding: "auto",
									}}
								/>
								{/* <div>{`Batch of ${
									this.state.studentData[this.state.studentIndex].Year_batch
								}`}</div> */}
							</div>
							<div className={styles.portfolio}>
								<p>
									{<b>Name: </b>}
									{`${this.state.studentData[this.state.studentIndex].Name}`}
								</p>
								<p>
									{<b>Batch: </b>}
									{`${
										this.state.studentData[this.state.studentIndex].Year_batch
									}`}
								</p>
								<p>
									{<b>Skills: </b>}
									{`${skills}`}
								</p>
							</div>
						</div>
					</Modal>
				)}
			</div>
		);
	}
}

export default Institute;
