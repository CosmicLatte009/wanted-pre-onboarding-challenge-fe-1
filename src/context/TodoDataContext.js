import React, { createContext, useState } from "react";

export const TodoDataContext = React.createContext({
	getTodoList: () => {},
	todoDatas: null,
	getPath: () => {},
	path: undefined,
});

const TodoDataContextProvider = (props) => {
	const [todoDatas, setTodoDatas] = useState();
	const [path, setPath] = useState();

	const handleTodoDatas = (data) => {
		setTodoDatas(data);
	};

	const handlePath = (clickedId) => {
		setPath(clickedId);
	};

	return (
		<TodoDataContext.Provider
			value={{
				getTodoList: handleTodoDatas,
				todoDatas: todoDatas,
				getPath: handlePath,
				path: path,
			}}
		>
			{props.children}
		</TodoDataContext.Provider>
	);
};

export default TodoDataContextProvider;
