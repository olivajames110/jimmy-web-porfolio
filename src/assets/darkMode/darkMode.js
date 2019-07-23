import React, { Fragment } from 'react';
import './darkMode.css';

const darkModeClass =
	'darkmode-layer darkmode-layer--button darkmode-layer--expanded darkmode-layer--no-transition darkmode-layer--simple';

const DarkModes = (props) => {
	return (
		<div className="darkmode-container">
			<div className="darkmode-background" />
			<div className={props.isDarkMode ? darkModeClass : ''} />
			<div className="darkmode-toggle darkmode-toggle--white">Button</div>
		</div>
	);
};

export default DarkModes;
