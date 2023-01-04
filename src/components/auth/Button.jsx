import React from "react";
import styles from "../../style/authStyle/Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ children, disabled }) => {
	return (
		<button className={cx("btn")} type="submit" disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
