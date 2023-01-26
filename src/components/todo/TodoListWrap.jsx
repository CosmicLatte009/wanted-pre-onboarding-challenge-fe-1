import React, { useContext } from "react";
import TodoList from "./TodoList";
import styles from "../../style/todoStyle/TodoListWrap.module.css";
import classNames from "classnames/bind";
import { TodoDataContext } from "../../context/TodoDataContext";

const cx = classNames.bind(styles);

const TodoListWrap = ({ onTodoClicked }) => {
	const ctx = useContext(TodoDataContext);
	const { todoDatas } = ctx;

	return (
		<div className={cx("wrap")}>
			<p className={cx("title")}>할 일 목록</p>
			<ol className={cx("list-wrap")}>
				{todoDatas &&
					todoDatas.map((item, index) => (
						<TodoList
							key={index}
							onTodoClicked={() => {
								onTodoClicked();
								ctx.getPath(item.id);
							}}
						>
							{item.title}
						</TodoList>
					))}
			</ol>
		</div>
	);
};
export default TodoListWrap;
