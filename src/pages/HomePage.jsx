import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoListWrap from "../components/todo/TodoListWrap";
import TodoDetailsWrap from "../components/todo/TodoDetailsWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../style/pageStyle/HomePage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HomePage = () => {
	const navigate = useNavigate();
	const handleLogoutBtn = () => {
		localStorage.removeItem("userInfo");
		navigate("/login");
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
				<button className={cx("btn-create")}>
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
				<strong className={cx("logout")} onClick={handleLogoutBtn}>
					로그아웃
				</strong>
			</main>
		</>
	);
};

export default HomePage;
