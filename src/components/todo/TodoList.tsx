import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/todoStyle/TodoList.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface MyProps {
	children: string;
	onTodoClicked: () => void;
}

const TodoList: React.FC<MyProps> = (props) => {
	const { children, onTodoClicked } = props;

	const [isChecked, setIsChecked] = useState(false);

	const checkedIcon = (
		<FontAwesomeIcon
			icon={faSquareCheck}
			className={cx("icon-checkbox", { checked: isChecked })}
			onMouseUp={() => setIsChecked(false)}
			onMouseDown={() => setIsChecked(true)}
		/>
	);
	const unCheckedIcon = (
		<FontAwesomeIcon
			icon={faSquare}
			className={cx("icon-checkbox")}
			onMouseUp={() => setIsChecked(true)}
			onMouseDown={() => setIsChecked(false)}
		/>
	);

	return (
		<li className={cx("todo-list")}>
			{isChecked ? checkedIcon : unCheckedIcon}
			<p className={cx("desc", { checked: isChecked })} onClick={onTodoClicked}>
				{children}
			</p>
			<FontAwesomeIcon
				icon={faPenToSquare}
				className={cx("icon-modify", { checked: isChecked })}
				onClick={onTodoClicked}
			/>
			{isChecked ? <hr /> : null}
		</li>
	);
};
export default TodoList;
