import React, { Component, Fragment } from 'react';
import { LinkedInIcon, GitHubIcon, FacebookIcon } from '../../../assets/svgs/svgs';
import './css/contactScreen.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// const ProgressBar = props => {
// 	return (
// 		<div className="skill-progress-bar">
// 			<img className="skill-image" src={props.skill} height="50" width="50" />
// 			<span className="skill" />
// 			<div className="progress-bar-graph">
// 				<div style={{ backgroundColor: props.color, width: props.progress }} className="fill" />
// 			</div>
// 		</div>
// 	);
// };

class Contact extends Component {
	state = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		comment: ''
	};

	handleFormInputChange = e => {
		this.setState({
			value: e.value
		});
	};

	handleFormSubmit = e => {
		this.setState({
			firstName: '',
			lastName: '',
			emailAddress: '',
			comment: ''
		});
		e.preventDefault();
	};

	render() {
		const skillContainer = (
			<div className="form-container">
				<form>
					<div className="form-input-wrapper">
						<label for="first_name">First Name:</label>
						<input
							id="first_name"
							type="text"
							value={this.state.firstName}
							onChange={e => {
								this.setState({ firstName: e.target.value });
							}}
						/>
					</div>
					<div className="form-input-wrapper">
						<label for="last_name">Last Name:</label>
						<input
							id="last_name"
							type="text"
							value={this.state.lastName}
							onChange={e => {
								this.setState({ lastName: e.target.value });
							}}
						/>
					</div>
					<div className="form-input-wrapper">
						<label for="email_address">Email Address:</label>
						<input
							id="email_address"
							type="text"
							value={this.state.emailAddress}
							onChange={e => {
								this.setState({ emailAddress: e.target.value });
							}}
						/>
					</div>
					<div className="form-input-wrapper">
						<label for="comment">Comment:</label>
						<input
							id="comment"
							type="text"
							value={this.state.comment}
							onChange={e => {
								this.setState({ comment: e.target.value });
							}}
						/>
					</div>
				</form>
				<input id="contact-form-submit-button" type="submit" value="Submit" onClick={this.handleFormSubmit} />
			</div>
		);

		const textContainer = (
			<div className="about-text-content">
				<h1>Contact Me</h1>
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
				<div className="interior-body contact-container">
					{textContainer}
					{skillContainer}
				</div>
			</Fragment>
		);
	}
}

export default Contact;
