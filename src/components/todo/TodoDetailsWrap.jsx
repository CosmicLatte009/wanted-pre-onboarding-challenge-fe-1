import React from "react";
import TodoDetails from "./TodoDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/todoStyle/TodoDetailsWrap.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoDetailsWrap = () => {
	return (
		<div className={cx("wrap")}>
			<TodoDetails
				minLength="2"
				maxLength="25"
				placeholder="할 일을 입력하세요"
				height="20px"
			>
				할 일
			</TodoDetails>
			<TodoDetails
				maxLength="318"
				placeholder="상세 내용을 입력하세요"
				height="220px"
			>
				상세 내용
			</TodoDetails>
			<div className={cx("btn-wrap")}>
				<button className={cx("btn-modify")}>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button className={cx("btn-delete")}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</div>
		</div>
	);
};
export default TodoDetailsWrap;
