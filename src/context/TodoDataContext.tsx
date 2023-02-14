import React, { createContext, useReducer } from "react";

export interface TodoData {
	title: string;
	content: string | null;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface TodoDataContextType {
	getTodoList: (data: TodoData[]) => void;
	todoDatas: TodoData[];
	getPath: (clickedId: string | undefined) => void;
	path: string | undefined;
}

export const TodoDataContext = createContext<TodoDataContextType>({
	getTodoList: () => {},
	todoDatas: [],
	getPath: () => {},
	path: undefined,
});

interface State {
	todoDatas: TodoData[];
	path: string | undefined;
}

const initialState: State = {
	todoDatas: [],
	path: undefined,
};

type ActionType =
	| { type: "SET_TODODATAS"; payload: TodoData[] }
	| { type: "SET_PATH"; payload: string | undefined };

const reducer = (state: State, action: ActionType) => {
	switch (action.type) {
		case "SET_TODODATAS":
			return {
				...state,
				todoDatas: action.payload,
			};
		case "SET_PATH":
			return {
				...state,
				path: action.payload,
			};
		default:
			return state;
	}
};

const TodoDataContextProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleTodoDatas = (data: TodoData[]) => {
		dispatch({ type: "SET_TODODATAS", payload: data });
	};

	const handlePath = (clickedId: string | undefined) => {
		dispatch({ type: "SET_PATH", payload: clickedId });
	};

	return (
		<TodoDataContext.Provider
			value={{
				getTodoList: handleTodoDatas,
				todoDatas: state.todoDatas,
				getPath: handlePath,
				path: state.path,
			}}
		>
			{children}
		</TodoDataContext.Provider>
	);
};

export default TodoDataContextProvider;
