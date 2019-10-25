import React, { Component, Fragment } from 'react';
import './css/aboutScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = props => {
	return (
		<div className="skill-progress-bar">
			<img className="skill-image" src={props.skill} height="50" width="50" />
			<span className="skill" />
			<div className="progress-bar-graph">
				<div style={{ backgroundColor: props.color, width: props.progress }} className="fill" />
			</div>
		</div>
	);
};

class About extends Component {
	state = {
		isInDrawingMode: false
	};

	render() {
		const skillContainer = (
			<div className="skill-container">
				<ProgressBar
					skill={'https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png'}
					progress={'80%'}
					color={'#e34f26'}
				/>
				<ProgressBar
					skill={
						'https://www.pnglot.com/pngfile/detail/504-5048887_cascading-style-sheets-logo-html-blue-text-png.png'
					}
					progress={'40%'}
					color={'#264de4'}
				/>
				<ProgressBar
					skill={'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'}
					progress={'59%'}
					color={'#f7df1e'}
				/>
				<ProgressBar
					skill={'https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg'}
					progress={'72%'}
					color={'#60dafb'}
				/>
			</div>
		);
		const textContainer = (
			<div className="about-text-content">
				<h1>Hi, My Name Is Jimmy And I'm A Front-End Developer</h1>
				<p>
					I love creating beautiful code, and cater for all kinds of projects. Whether it be an e-commerce
					solution, events management system; dashboard, or even a small business portfolio I'm your man. If
					you would like to see some of my work just take a look at my portfolio, or alternatively get in
					contact for more information.
				</p>
			</div>
		);

		return (
			<Fragment>
				<div className="about-container">
					{textContainer}
					{skillContainer}
				</div>
			</Fragment>
		);
	}
}

export default About;
