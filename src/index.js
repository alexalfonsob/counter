//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";



//include your index.scss file into the bundle
import './index.css';

//import your own components
import { SecondsCounter } from "./component/counter.js";


class App extends React.Component {
	render() {
		return (
			<div>
				<SecondsCounter number='3636'/>,
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
