import { Route, Switch } from "react-router-dom";
import "./App.css";
import homePage from "./components/HomePage";
import Institute from "./components/Institute";
import Institutes from "./components/Institutes";
import NavBar from "./components/Navbar";
import Students from "./components/Students";

function App() {
	const routes = (
		<Switch>
			<Route exact path="/" component={homePage} />
			<Route path="/institutes" component={Institutes} />
			<Route path="/students" component={Students} />
			<Route path="/institute/1" component={Institute} />
		</Switch>
	);
	return (
		<div>
			<NavBar />
			{routes}
		</div>
	);
}

export default App;
