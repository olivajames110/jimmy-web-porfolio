import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Home from './components/screens/homeScreen/homeScreen';
import Projects from './components/screens/projectsScreen/projectsScreen';

class App extends Component {
	getHeaderHeight = () => {
		let root = document.documentElement;
		root.style.setProperty('--headerHeight', document.querySelector('.app-header').offsetHeight + 'px');
	};

	componentDidMount() {
		this.getHeaderHeight();
		window.addEventListener('resize', this.checkIfMobile);
	}

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
