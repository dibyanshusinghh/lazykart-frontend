import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Dashboard";
import StocksContainer from "../containers/Stock";
import OrdersContainer from "../containers/Order";

const routes = [
	{
		path: "/auth/register",
		component: RegisterComponent,
		title: "Register",
		needsAuth: false,
	},
	{
		path: "/auth/login",
		component: LoginComponent,
		title: "Login",
		needsAuth: false,
	},
	{
		path: "/",
		component: ContactsComponent,
		title: "Dashboard",
		needsAuth: true,
	},
	{
		path: "/stocks",
		component: StocksContainer,
		title: "stocks",
		needsAuth: true,
	},
	{
		path: "/orders",
		component: OrdersContainer,
		title: "orders",
		needsAuth: true,
	},
];

export default routes;
