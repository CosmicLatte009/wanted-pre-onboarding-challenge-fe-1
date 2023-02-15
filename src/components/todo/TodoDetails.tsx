import React from "react";
import styles from "../../style/todoStyle/TodoDetails.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface MyProps {
	children: string;
	textareaName: string;
	textareaID: string;
	minLength?: any;
	maxLength: any;
	placeholder: string;
	height: string;
	useRef: any;
}

const TodoDetails: React.FC<MyProps> = (props) => {
	const {
		children,
		textareaName,
		textareaID,
		minLength,
		maxLength,
		placeholder,
		useRef,
	} = props;
	const h = props.height;
	return (
		<div className={cx("wrap")}>
			<p className={cx("title")}>{children}</p>
			<textarea
				className={cx("textarea-box")}
				name={textareaName}
				id={textareaID}
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder}
				style={{ height: h }}
				ref={useRef}
			></textarea>
		</div>
	);
};
export default TodoDetails;
