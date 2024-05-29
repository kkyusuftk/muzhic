import Callback from "../views/callback";
import Home from "../views/home";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/callback",
		element: <Callback />,
	},
];

export default routes;
