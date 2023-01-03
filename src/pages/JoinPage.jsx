import React, { useState } from "react";
import FormWrap from "../components/auth/FormWrap";
import Button from "../components/auth/Button";
import AuthInput from "../components/auth/AuthInput";
import styles from "../style/pageStyle/JoinPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const JoinPage = () => {
	const [emailValid, setEmailValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);

	const emailValidCheck = ({ target }) => {
		const emailValue = target.value;
		const emailRegex =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		if (!emailRegex.test(emailValue)) {
			setEmailValid(false);
			return;
		} else {
			setEmailValid(true);
		}
	};
	const passwordValidCheck = ({ target }) => {
		const passwordValue = target.value;

		if (passwordValue.length >= 8) {
			setPasswordValid(true);
		} else {
			setPasswordValid(false);
		}
	};

	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>회원가입</h1>
			<FormWrap>
				<AuthInput
					type="text"
					inputName="id"
					inputID="myEmail"
					onChange={emailValidCheck}
				>
					이메일
				</AuthInput>
				<AuthInput
					type="password"
					inputName="pw"
					inputID="myPW"
					onChange={passwordValidCheck}
				>
					비밀번호
				</AuthInput>
				<Button disabled={!(emailValid && passwordValid)}>가입하기</Button>
			</FormWrap>
		</main>
	);
};

export default JoinPage;
