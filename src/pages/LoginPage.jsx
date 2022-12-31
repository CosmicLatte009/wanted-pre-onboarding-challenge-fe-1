import React from "react";
import FormWrap from "../components/auth/FormWrap";
import Button from "../components/Button";
import AuthInput from "../components/auth/AuthInput";
import styles from "../style/LoginPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginPage = () => {
	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>로그인</h1>
			<FormWrap>
				<AuthInput type="text" inputName="id" inputID="loginID">
					아이디
				</AuthInput>
				<AuthInput type="password" inputName="pw" inputID="loginPW">
					비밀번호
				</AuthInput>
				<Button>로그인</Button>
			</FormWrap>
		</main>
	);
};

export default LoginPage;
