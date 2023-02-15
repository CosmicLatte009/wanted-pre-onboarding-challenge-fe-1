import React from "react";
import styles from "../../style/authStyle/Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface MyProps {
	children: string;
	disabled: boolean;
	onClick: () => void;
}

const Button: React.FC<MyProps> = (props) => {
	const { children, disabled, onClick } = props;
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
