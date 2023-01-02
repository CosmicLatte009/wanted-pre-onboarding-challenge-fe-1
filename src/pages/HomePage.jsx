import React from "react";
import TodoListWrap from "../components/todo/TodoListWrap";
import TodoDetailsWrap from "../components/todo/TodoDetailsWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../style/pageStyle/HomePage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HomePage = () => {
	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>TODO</h1>
			<button className={cx("button-create")}>
				<FontAwesomeIcon
					className={cx("icon-create")}
					icon={faCirclePlus}
					size="2x"
				/>
				<span>할 일 추가</span>
			</button>
			<div className={cx("todo-container")}>
				<TodoListWrap />
				<TodoDetailsWrap />
			</div>
		</main>
	);
};

export default HomePage;
