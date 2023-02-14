import React from "react";
import ReactDOM from "react-dom/client";
import TodoDataContextProvider from "./context/TodoDataContext.tsx";
import App from "./App.tsx";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<TodoDataContextProvider>
			<App />
		</TodoDataContextProvider>
	</React.StrictMode>
);
