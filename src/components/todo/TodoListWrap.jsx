import React from "react";
import TodoList from "./TodoList";
import styles from "../../style/todoStyle/TodoListWrap.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoListWrap = () => {
	return (
		<div className={cx("wrap")}>
			<p className={cx("title")}>할 일 목록</p>
			<ol>
				<TodoList>할 일 리스트1</TodoList>
				<TodoList>
					할 일 리스트를 길게 적어도 말줄임표가 있어서 문제 없다
				</TodoList>
			</ol>
		</div>
	);
};
export default TodoListWrap;
