import logo from "./assets/images/logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	Navigate,
} from "react-router-dom";
import routes from "./routes";
import ContactsComponent from "./containers/Dashboard";
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";
import React, { useEffect } from "react";

const IsAllowed = ({ route, children }) => {
	const isNotAllowed = route.needsAuth && !isAuthenticated();

	if (isNotAllowed) {
		return <Navigate to="/auth/login" />;
	}
	return children;
};
function App() {
	return (
		<GlobalProvider>
			<Router>
				<Routes>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<IsAllowed route={route}>
									<route.component />
								</IsAllowed>
							}
						/>
					))}
				</Routes>
			</Router>
		</GlobalProvider>
	);
}

export default App;
