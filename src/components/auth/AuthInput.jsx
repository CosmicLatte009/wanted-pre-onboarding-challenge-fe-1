import React from "react";
import styles from "../../style/authStyle/AuthInput.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AuthInput = (props) => {
	const { children, type, inputID, inputName, useRef, onChange, errorMessage } =
		props;
	return (
		<>
			<label className={cx("label")} htmlFor={inputID}>
				{children}
			</label>
			<input
				className={cx("input")}
				type={type}
				name={inputName}
				id={inputID}
				ref={useRef}
				onChange={onChange}
			/>
			<strong className={cx("error-message")}>{errorMessage}</strong>
		</>
	);
};

export default AuthInput;
