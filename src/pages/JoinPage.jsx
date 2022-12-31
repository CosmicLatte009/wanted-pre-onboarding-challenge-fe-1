import React from "react";
import FormWrap from "../components/auth/FormWrap";
import Button from "../components/Button";
import AuthInput from "../components/auth/AuthInput";
import styles from "../style/JoinPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const JoinPage = () => {
	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>회원가입</h1>
			<FormWrap>
				<AuthInput type="text" inputName="id" inputID="myID">
					아이디
				</AuthInput>
				<AuthInput type="password" inputName="pw" inputID="myPW">
					비밀번호
				</AuthInput>
				<Button>가입하기</Button>
			</FormWrap>
		</main>
	);
};

export default JoinPage;
