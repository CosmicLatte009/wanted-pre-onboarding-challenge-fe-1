import React from "react";
import styles from "../../style/authStyle/Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ children, disabled, onClick }) => {
	return (
		<button
			className={cx("btn")}
			type="submit"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
