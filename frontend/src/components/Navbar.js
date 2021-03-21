import React, { Component } from "react";
import styles from "../css/Navbar.module.css";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<header className={styles.navbar}>
				<h1 className={styles.logo} onClick={() => (window.location = "/")}>
					CollegeCommunity
				</h1>
			</header>
		);
	}
}

export default NavBar;
