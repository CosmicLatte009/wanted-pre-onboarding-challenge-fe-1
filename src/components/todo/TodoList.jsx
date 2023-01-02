import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/todoStyle/TodoList.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoList = ({ children }) => {
	return (
		<li className={cx("todo-list")}>
			<FontAwesomeIcon icon={faSquare} className={cx("icon-checkbox")} />
			<p className={cx("desc")}>{children}</p>
			<FontAwesomeIcon icon={faEllipsisVertical} className={cx("icon-menu")} />
		</li>
	);
};
export default TodoList;
