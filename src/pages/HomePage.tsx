import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TodoListWrap from "../components/todo/TodoListWrap";
import TodoDetailsWrap from "../components/todo/TodoDetailsWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../style/pageStyle/HomePage.module.css";
import classNames from "classnames/bind";
import { TodoDataContext } from "../context/TodoDataContext";

const cx = classNames.bind(styles);

const HomePage: React.FC = () => {
	const ctx = useContext(TodoDataContext);

	const [openTodoDetails, setOpenTodoDetails] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleLogoutBtn = () => {
		localStorage.removeItem("userInfo");
		navigate("/login");
	};

	const handleCreateBtnClicked = () => {
		ctx.getPath(undefined);
		setOpenTodoDetails(true);
	};

	useEffect(() => {
		if (localStorage.getItem("userInfo") === null) {
			navigate("/login");
			alert("로그인해주세요");
		}
	}, [navigate]);

	return (
		<>
			<main className={cx("wrap")}>
				<h1 className={cx("title")}>TODO</h1>
				<button className={cx("btn-create")} onClick={handleCreateBtnClicked}>
					<FontAwesomeIcon
						className={cx("icon-create")}
						icon={faCirclePlus}
						size="2x"
					/>
					<span>새 할 일</span>
				</button>
				<div className={cx("todo-container", { closed: !openTodoDetails })}>
					<TodoListWrap onTodoClicked={() => setOpenTodoDetails(true)} />
					{openTodoDetails && (
						<TodoDetailsWrap onClick={() => setOpenTodoDetails(false)} />
					)}
				</div>
				<strong className={cx("logout")} onClick={handleLogoutBtn}>
					로그아웃
				</strong>
			</main>
		</>
	);
};

export default HomePage;
