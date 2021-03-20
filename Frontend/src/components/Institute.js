import { Space, Table, Tag } from "antd";
import React, { Component } from "react";
import college from "../assets/college.jpg";
import styles from "../css/Institute.module.css";

class Institute extends Component {
	state = {};
	render() {
		const columns = [
			{
				title: "Name",
				dataIndex: "name",
				key: "name",
				render: (text) => <a>{text}</a>,
			},
			{
				title: "Age",
				dataIndex: "age",
				key: "age",
			},
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
			},
			{
				title: "Tags",
				key: "tags",
				dataIndex: "tags",
				render: (tags) => (
					<>
						{tags.map((tag) => {
							let color = tag.length > 5 ? "geekblue" : "green";
							if (tag === "loser") {
								color = "volcano";
							}
							return (
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							);
						})}
					</>
				),
			},
			{
				title: "Action",
				key: "action",
				render: (text, record) => (
					<Space size="middle">
						<a>Invite {record.name}</a>
						<a>Delete</a>
					</Space>
				),
			},
		];

		const data = [
			{
				key: "1",
				name: "John Brown",
				age: 32,
				address: "New York No. 1 Lake Park",
				tags: ["nice", "developer"],
			},
			{
				key: "2",
				name: "Jim Green",
				age: 42,
				address: "London No. 1 Lake Park",
				tags: ["loser"],
			},
			{
				key: "3",
				name: "Joe Black",
				age: 32,
				address: "Sidney No. 1 Lake Park",
				tags: ["cool", "teacher"],
			},
		];
		return (
			<div style={{ paddingBottom: 60, backgroundColor: "lightblue" }}>
				<div className={styles.collegeCard}>
					<div style={{ display: "flex" }}>
						<img
							src={college}
							alt=""
							style={{ width: "70%", margin: "auto" }}
						/>
					</div>
					<div>
						<p>Collage Name</p>
						<p>Courses offered</p>
						<p>City</p>
						<p>State</p>
						<p>Country</p>
					</div>
				</div>
				<div style={{ textAlign: "center" }}>
					<Table
						dataSource={data}
						columns={columns}
						style={{ width: "80%", margin: "auto" }}
					/>
					;
				</div>
			</div>
		);
	}
}

export default Institute;
