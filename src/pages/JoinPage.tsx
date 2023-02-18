import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormWrap from "../components/auth/FormWrap";
import Button from "../components/auth/Button";
import AuthInput from "../components/auth/AuthInput";
import styles from "../style/pageStyle/JoinPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const JoinPage: React.FC = () => {
	const [emailValid, setEmailValid] = useState<boolean>(false);
	const [passwordValid, setPasswordValid] = useState<boolean>(false);

	const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
	const [passwordErrorMessage, setPasswordErroMessage] = useState<string>("");

	const emailRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();
	const navigate = useNavigate();

	const emailValidCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const emailValue = target.value;
		const emailRegex =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		if (!emailRegex.test(emailValue)) {
			setEmailValid(false);
			setEmailErrorMessage("이메일 형식에 맞게 입력해주세요");
			if (emailRef.current?.value === "") {
				setEmailErrorMessage("");
			}
		} else {
			setEmailValid(true);
			setEmailErrorMessage("");
		}
	};
	const passwordValidCheck = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>) => {
		const passwordValue = target.value;
		if (passwordValue.length >= 8) {
			setPasswordValid(true);
			setPasswordErroMessage("");
		} else if (passwordRef.current?.value === "") {
			setPasswordValid(false);
			setPasswordErroMessage("");
		} else {
			setPasswordValid(false);
			setPasswordErroMessage("패스워드 길이는 8 이상이어야 합니다");
		}
	};

	const handleSubmitForm = useCallback(async () => {
		const url = "http://localhost:8080/users/create";
		const reqData = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
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

			if (result.message === "계정이 성공적으로 생성되었습니다") {
				localStorage.setItem("userInfo", result.token);
				alert(result.message);
			} else {
				alert(result.details);
			}
		} catch (error) {
			console.log("error", error);
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem("userInfo")) {
			navigate("/");
		} else {
			navigate({ pathname: "/join", search: "" });
		}
	}, [handleSubmitForm, navigate]);

	return (
		<main className={cx("wrap")}>
			<h1 className={cx("title")}>회원가입</h1>
			<FormWrap>
				<AuthInput
					type="text"
					inputName="id"
					inputID="myEmail"
					useRef={emailRef}
					onChange={emailValidCheck}
					errorMessage={emailErrorMessage}
				>
					이메일
				</AuthInput>
				<AuthInput
					type="password"
					inputName="pw"
					inputID="myPW"
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
					가입하기
				</Button>
			</FormWrap>
			<strong className={cx("login")} onClick={() => navigate("/login")}>
				로그인
			</strong>
		</main>
	);
};

export default JoinPage;
