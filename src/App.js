import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { logoImage } from 'assests';

// const NewRoute = () => {
// 	return (
// 		<div>
// 			<p> New Route </p>{' '}
// 		</div>
// 	);
// };

function App() {
	return (
		<Router>
			<Header />
			<Body />
		</Router>
	);
}

export default App;
