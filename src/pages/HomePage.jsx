import React from "react";
import styles from "../style/HomePage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HomePage = () => {
	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>TODO ✅</h1>
		</main>
	);
};

export default HomePage;
