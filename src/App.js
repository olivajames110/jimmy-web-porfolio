import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Home from './components/screens/homeScreen/homeScreen';
import Projects from './components/screens/projectsScreen/projectsScreen';
import About from './components/screens/aboutScreen/aboutScreen';
import Contact from './components/screens/contactScreen/contactScreen';
import Footer from './components/footer/footer';

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
			<Fragment>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/portfolio" component={Projects} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</Router>
			</Fragment>
		);
	}
}

export default App;
