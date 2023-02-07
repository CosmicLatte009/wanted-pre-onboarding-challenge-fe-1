import React from "react";
import styles from "../../style/todoStyle/TodoDetails.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoDetails = (props) => {
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
				type="text"
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
