import React, { useRef, useEffect, useContext } from "react";
import TodoDetails from "./TodoDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/todoStyle/TodoDetailsWrap.module.css";
import classNames from "classnames/bind";
import { TodoDataContext } from "../../context/TodoDataContext";

const cx = classNames.bind(styles);

const TodoDetailsWrap = ({ onClick }) => {
	const ctx = useContext(TodoDataContext);
	const { todoDatas, path } = ctx;

	const titleRef = useRef();
	const contentRef = useRef();

	const url = "http://localhost:8080/todos";
	const urlWithId = `http://localhost:8080/todos/${path}`;

	const handleGetTodoByID = async () => {
		try {
			const response = await fetch(urlWithId, {
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("userInfo"),
				},
			});
			const result = await response.json();
			if ("data" in result) {
				console.log(result.data);
				titleRef.current.value = result.data.title;
				contentRef.current.value = result.data.content;
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	const handleCraeteTodo = async () => {
		const reqData = {
			title: titleRef.current.value,
			content: contentRef.current.value,
		};
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: localStorage.getItem("userInfo"),
				},
				body: JSON.stringify(reqData),
			});
			const result = await response.json();
			if ("data" in result) {
				titleRef.current.value = "";
				contentRef.current.value = "";
			}
			return;
		} catch (error) {
			console.log("error", error);
		}
	};

	const handleUpdateTodo = async () => {
		const reqData = {
			title: titleRef.current.value,
			content: contentRef.current.value,
		};
		try {
			const response = await fetch(urlWithId, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
					Authorization: localStorage.getItem("userInfo"),
				},
				body: JSON.stringify(reqData),
			});
			const result = await response.json();
			if ("data" in result) {
				alert("할 일이 수정되었습니다.");
			}
			return;
		} catch (error) {
			console.log("error", error);
		}
	};

	const handleDeleteTodo = async () => {
		try {
			const response = await fetch(urlWithId, {
				method: "DELETE",
				headers: {
					Authorization: localStorage.getItem("userInfo"),
				},
			});
			const result = await response.json();
			if ("data" in result) {
				titleRef.current.value = "";
				contentRef.current.value = "";
				alert("할 일이 삭제되었습니다.");
				ctx.getPath(undefined);
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	let idx = todoDatas.findIndex((i) => i.id === path);

	const handlePrevTodo = async () => {
		ctx.getPath(todoDatas[idx - 1].id);
	};

	const handleNextTodo = async () => {
		ctx.getPath(todoDatas[idx + 1].id);
	};

	useEffect(() => {
		if (path === undefined) {
			titleRef.current.value = "";
			contentRef.current.value = "";
		}
		if (path !== undefined) {
			handleGetTodoByID();
		}
	}, [path]);

	return (
		<div className={cx("wrap")}>
			<button className={cx("btn-close")}>
				<FontAwesomeIcon
					icon={faTimes}
					className={cx("icon-close")}
					onClick={onClick}
					size="2x"
				/>
			</button>
			<TodoDetails
				textareaName="title"
				textareaID="myTitle"
				minLength="2"
				maxLength="25"
				placeholder="할 일을 입력하세요"
				height="20px"
				useRef={titleRef}
			>
				할 일
			</TodoDetails>
			<TodoDetails
				textareaName="details"
				textareaID="myDetails"
				maxLength="318"
				placeholder="상세 내용을 입력하세요"
				height="220px"
				useRef={contentRef}
			>
				상세 내용
			</TodoDetails>
			{idx === 0 && path === undefined ? null : (
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={cx("icon-prev")}
					onClick={handlePrevTodo}
				/>
			)}
			{idx === todoDatas.length - 1 && path === undefined ? null : (
				<FontAwesomeIcon
					icon={faChevronRight}
					className={cx("icon-next")}
					onClick={handleNextTodo}
				/>
			)}

			<div className={cx("btn-wrap")}>
				<button
					className={cx("btn-modify")}
					onClick={path === undefined ? handleCraeteTodo : handleUpdateTodo}
				>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				{path === undefined ? null : (
					<button className={cx("btn-delete")} onClick={handleDeleteTodo}>
						<FontAwesomeIcon icon={faTrashCan} />
					</button>
				)}
			</div>
		</div>
	);
};
export default TodoDetailsWrap;
