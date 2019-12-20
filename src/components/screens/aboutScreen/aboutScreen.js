import React, { Component, Fragment } from 'react';
import './css/aboutScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import languageHistory from './images/languageHistory.png';

const ProgressBar = props => {
	return (
		<div className="skill-progress-bar">
			<img className="skill-image" src={languageHistory} height="50" width="50" />
			<span className="skill" />
		</div>
	);
};

class About extends Component {
	state = {
		isInDrawingMode: false
	};

	render() {
		const languageHistoryContainer = (
			<div className="languageHistory-container">
				<img className="skill-image" src={languageHistory} />
			</div>
		);
		const skillContainer = (
			<div className="skill-container-row">
				<div className="skill-container-column">
					<h3 className="title">Skills</h3>
					<ul>
						<li>Canvas</li>
						<li>ADA Compliancy</li>
						<li>Mobile First</li>
						<li>Material Design</li>
					</ul>
				</div>
				<div className="skill-container-column">
					<h3 className="title">About Me</h3>
					<ul>
						<li>Hard working</li>
						<li>Self motivated</li>
						<li>Extremely detail oriented</li>
						<li>Good team worker</li>
					</ul>
				</div>
			</div>
		);
		const textContainer = (
			<div className="about-text-content">
				<h2 className="name">JIMMY OLIVA</h2>
				<div className="position-title">Front-end Developer & UX/UI Designer</div>
				<p className="text-area">
					My name is Jimmy Oliva, and I am a self-tought Front-end Developer and UI/UX Designer. I began my
					journey of programming and design at a restaurant marketing company called Ordereze. While starting
					at an entry level position, I fell in love with the inner-workings of how our websites worked and
					functioned. Driven by curiosity and the desire to learn more, I began to teach myself the
					foundations of web development and design through online resources. Currently, I now am a UI/UX and
					Website Designer for Ordereze while simutanously building my Portfolio in my free time.
				</p>
				{skillContainer}
			</div>
		);

		return (
			<div className="interior-body about-container">
				{textContainer}
				{languageHistoryContainer}
			</div>
		);
	}
}

export default About;
