import React from "react";
import styles from "../../style/authStyle/FormWrap.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FormWrap = ({ children }) => {
	return (
		<form className={cx("wrap")} action="" method="">
			{children}
		</form>
	);
};

export default FormWrap;
