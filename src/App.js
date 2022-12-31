import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import "./style/reset.css";
import "./style/utils.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/join" element={<JoinPage />} />
			</Routes>
		</Router>
	);
}

export default App;
