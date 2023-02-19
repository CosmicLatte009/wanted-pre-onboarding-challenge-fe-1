import React, { createContext, useReducer } from "react";

export interface TodoData {
	title: string;
	content: string | null;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface TodoDataContextType {
	getTodoList: () => Promise<void>;
	todoDatas: TodoData[];
	getPath: (clickedId: string | undefined) => void;
	path: string | undefined;
}

export const TodoDataContext = createContext<TodoDataContextType>({
	getTodoList: () => Promise.resolve(),
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

	const handlePath = (clickedId: string | undefined) => {
		dispatch({ type: "SET_PATH", payload: clickedId });
	};

	const handleGetTodoList = async (): Promise<void> => {
		const url: string = "http://localhost:8080/todos";
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("userInfo") || "",
				},
			});
			const result = await response.json();

			if ("data" in result) {
				const todoList: TodoData[] = result.data;
				dispatch({ type: "SET_TODODATAS", payload: todoList });
				return;
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<TodoDataContext.Provider
			value={{
				getTodoList: handleGetTodoList,
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
