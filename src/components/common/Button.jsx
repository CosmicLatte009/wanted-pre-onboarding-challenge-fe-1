import React from "react";
import styles from "../../style/commonStyle/Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ children }) => {
	return (
		<button className={cx("btn")} type="submit">
			{children}
		</button>
	);
};

export default Button;
