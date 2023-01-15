import React from "react";
import ReactDOM from "react-dom/client";
import TodoDataContextProvider from "./context/TodoDataContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TodoDataContextProvider>
			<App />
		</TodoDataContextProvider>
	</React.StrictMode>
);
