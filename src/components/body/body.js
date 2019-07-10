import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home/home';
import Projects from './screens/projects/projects/projects';

class Body extends Component {
	render() {
		return (
			<Router>
				<Switch />
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/projects" component={Projects} />
			</Router>
		);
	}
}

export default Body;
