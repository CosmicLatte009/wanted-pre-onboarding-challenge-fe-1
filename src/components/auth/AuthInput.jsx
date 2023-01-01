import React from "react";
import styles from "../../style/AuthInput.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AuthInput = (props) => {
	const { children, type, inputID, inputName } = props;
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
			/>
		</>
	);
};

export default AuthInput;
