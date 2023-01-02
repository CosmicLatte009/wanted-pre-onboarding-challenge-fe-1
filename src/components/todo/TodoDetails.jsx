import React from "react";
import styles from "../../style/todoStyle/TodoDetails.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoDetails = (props) => {
	const { children, minLength, maxLength, placeholder } = props;
	const h = props.height;
	return (
		<div className={cx("wrap")}>
			<p className={cx("title")}>{children}</p>
			<textarea
				className={cx("textarea-box")}
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder}
				style={{ height: h }}
			></textarea>
		</div>
	);
};
export default TodoDetails;
