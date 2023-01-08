import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormWrap from "../components/auth/FormWrap";
import Button from "../components/auth/Button";
import AuthInput from "../components/auth/AuthInput";
import styles from "../style/pageStyle/LoginPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginPage = () => {
	const [emailValid, setEmailValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);

	const [emailErrorMessage, setEmailErrorMessage] = useState("");
	const [passwordErrorMessage, setPasswordMessage] = useState("");

	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const emailValidCheck = ({ target }) => {
		const emailValue = target.value;
		const emailRegex =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		if (!emailRegex.test(emailValue)) {
			setEmailValid(false);
			setEmailErrorMessage("이메일 형식에 맞게 입력해주세요");
			if (emailRef.current.value === "") {
				setEmailErrorMessage("");
			}
		} else {
			setEmailValid(true);
			setEmailErrorMessage("");
		}
	};
	const passwordValidCheck = ({ target }) => {
		const passwordValue = target.value;
		if (passwordValue.length >= 8) {
			setPasswordValid(true);
			setPasswordMessage("");
		} else if (passwordRef.current.value === "") {
			setPasswordValid(false);
			setPasswordMessage("");
		} else {
			setPasswordValid(false);
			setPasswordMessage("패스워드 길이는 8 이상이어야 합니다");
		}
	};
	const handleSubmitForm = async () => {
		const url = "http://localhost:8080/users/login";
		const reqData = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(reqData),
			});
			const result = await response.json();
			const message = result.message;

			if (message === "성공적으로 로그인 했습니다") {
				alert(message);
				localStorage.setItem("userInfo", result.token);
				navigate("/");
				return;
			} else {
				alert("아이디 또는 비밀번호가 일치하지 않습니다");
			}
			return result;
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem("userInfo")) {
			navigate("/");
		}
	}, [navigate]);

	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>로그인</h1>
			<FormWrap>
				<AuthInput
					type="text"
					inputName="id"
					inputID="loginEmail"
					useRef={emailRef}
					onChange={emailValidCheck}
					errorMessage={emailErrorMessage}
				>
					이메일
				</AuthInput>
				<AuthInput
					type="password"
					inputName="pw"
					inputID="loginPW"
					useRef={passwordRef}
					onChange={passwordValidCheck}
					errorMessage={passwordErrorMessage}
				>
					비밀번호
				</AuthInput>
				<Button
					disabled={!(emailValid && passwordValid)}
					onClick={handleSubmitForm}
				>
					로그인
				</Button>
			</FormWrap>
			<strong className={cx("join")} onClick={() => navigate("/join")}>
				회원가입
			</strong>
		</main>
	);
};

export default LoginPage;
