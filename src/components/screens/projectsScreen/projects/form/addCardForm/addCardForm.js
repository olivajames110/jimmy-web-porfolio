import React, { Component } from 'react';
import { TeamAssets, Players } from './assets/assets';

// import './css/baseballCardMain';

class AddCardForm extends Component {
	state = {
		id: null,
		firstName: null,
		lastName: 'asdasd',
		position: null,
		team: null,
		teamImg: null,
		playerImg: null,
		color: null
	};

	componentWillMount() {
		this.handleFindTeamImg();
		this.handleFindPlayerImg();
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFindTeamImg = () => {
		const team = TeamAssets[Math.round(Math.random())];

		this.setState({
			teamImg: team.url,
			color: team.color
		});

		let root = document.documentElement;
		root.style.setProperty('--baseballCardBarColor', this.state.color);
	};

	handleFindPlayerImg = () => {
		const player = Players[Math.round(Math.random())];
		console.log(player);
		this.setState({
			playerImg: player
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.handleFindTeamImg();
		this.handleFindPlayerImg();

		console.log(this.state);
		this.props.handleAddCard(this.state);
	};
	render() {
		return (
			<div className="form-container">
				<div className="title-wrapper">
					<h1>Add Your Own Baseball Card</h1>
					<p>Add a new baseball card to the list. Make your own or randomize your player.</p>
				</div>
				<div className="inputs-wrapper">
					<form onSubmit={this.handleSubmit}>
						<div className="form-row">
							<div className="input-container">
								<label htmlFor="first-name">First Name</label>
								<input name="firstName" onChange={this.handleInputChange} type="text" id="first-name" />
							</div>
							<div className="input-container">
								<label htmlFor="last-name">Last Name</label>
								<input name="lastName" onChange={this.handleInputChange} type="text" id="last-name" />
							</div>
						</div>

						<div className="input-container">
							<label htmlFor="field-position">Field Position</label>
							<select name="position" onChange={this.handleInputChange} id="field-position">
								<option defaultValue>- Choose a position -</option>
								<option value="pitcher">Pitcher</option>
								<option value="catcher">Catcher</option>
								<option value="1st-base">1st Base</option>
								<option value="2nd-base">2nd Base</option>
								<option value="3rd-base">3rd Base</option>
								<option value="left-field">Left Field</option>
								<option value="center-field">Center Field</option>
								<option value="right-field">Right Field</option>
							</select>
						</div>
						<div className="input-container">
							<label htmlFor="team">Team</label>
							<select name="team" onChange={this.handleInputChange} id="team">
								<option defaultValue>- Choose a team -</option>
								<option value="mets">New York Mets</option>
								<option value="braves">Atlanta Braves</option>
								<option value="marlins">Miami Marlins</option>
								<option value="phillies">Philadelphia Phillies</option>
								<option value="nationals">Washington Nationals</option>
								<option value="cubs">Chicago Cubs</option>
							</select>
						</div>
						<input className="submit" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default AddCardForm;
