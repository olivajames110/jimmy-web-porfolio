import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Home from './components/screens/home/home';
import Projects from './components/screens/projects/projects';

class App extends Component {
	// state = {
	// 	isMobile: null
	// };

	// componentWillMount() {
	// 	this.checkIfMobile();
	// }

	// checkIfMobile = (a) => {
	// 	if (window.innerWidth < 500) {
	// 		this.setState({
	// 			isMobile: true
	// 		});
	// 		// console.log(this.state.isMobile);
	// 		// return true;
	// 	} else {
	// 		this.setState({ isMobile: false });
	// 		// console.log(this.state.isMobile);
	// 		// return false;
	// 	}
	// };

	// componentDidMount() {
	// 	this.checkIfMobile();
	// 	window.addEventListener('resize', this.checkIfMobile);
	// }
	// componentWillMount() {
	// 	this.checkIfMobile();
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.checkIfMobile);
	// }

	render() {
		return (
			<div>
				<Header />

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/about" component={Projects} />
						<Route path="/portfolio" component={Projects} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Projects} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
