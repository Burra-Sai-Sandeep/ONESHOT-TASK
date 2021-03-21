import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Institute from "./components/Institute";
import Institutes from "./components/Institutes";
import NavBar from "./components/Navbar";
import Students from "./components/Students";

function App() {
	const routes = (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/institutes" component={Institutes} />
			<Route path="/students" component={Students} />
			<Route path="/institute/:id" component={Institute} />
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
