import React, { Component } from 'react';
import { TeamAssets, Players } from './assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faRandom, faPlus } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

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

	handleImageUpload = e => {
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				playerImg: reader.result
			});
		};

		reader.readAsDataURL(file);
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
		const player = Players[Math.floor(Math.random() * Players.length)];
		console.log(player);
		this.setState({
			playerImg: player
		});
	};

	handleMakeLeagueBtnActive = e => {
		console.log(e.target);
		e.target.classList.toggle('league-is-active');
		let previousLeague = e.target;
	};

	handleSubmit = e => {
		e.preventDefault();
		this.handleFindTeamImg();
		this.handleFindPlayerImg();

		console.log(this.state);
		this.props.handleAddCard(this.state);
	};
	render() {
		let previousLeague;
		let previousDivision;

		const nlEast = (
			<select name="team" id="team">
				<option defaultValue>- Choose a team -</option>
				<option value="mets">New York Mets</option>
				<option value="braves">Atlanta Braves</option>
				<option value="marlins">Miami Marlins</option>
				<option value="phillies">Philadelphia Phillies</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const alEast = (
			<select name="team" id="team">
				<option defaultValue>- Choose a team -</option>
				<option value="yankees">New York Yankees</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);

		return (
			<div className="form-container">
				<div className="title-wrapper">
					<h1>Build Your Own Custom Baseball Card</h1>
					<p>Add a new baseball card to the list. Make your own or randomize your player.</p>
				</div>
				<div className="inputs-wrapper">
					<form>
						<div className="form-row">
							<div className="input-container">
								<label className="label-title" htmlFor="first-name">
									First Name
								</label>
								<input name="firstName" onChange={this.handleInputChange} type="text" id="first-name" />
							</div>
							<div className="input-container">
								<label className="label-title" htmlFor="last-name">
									Last Name
								</label>
								<input name="lastName" onChange={this.handleInputChange} type="text" id="last-name" />
							</div>
						</div>
						<div className="input-container">
							<label className="label-title" htmlFor="field-position">
								Field Position
							</label>
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
							<span className="label-title">Card Image</span>
							<div className="player-image-container">
								<label className="upload form-button" htmlFor="player-image">
									<FontAwesomeIcon icon={faUpload} />
									<span>Upload</span>
								</label>
								<input
									name="playerImage"
									onChange={this.handleImageUpload}
									type="file"
									id="player-image"
								/>
								<div onClick={this.handleFindPlayerImg} className="btn-randomize form-button">
									<FontAwesomeIcon icon={faRandom} />
									<span>Randomize</span>
								</div>
								<div className="image-placeholder">
									<img className="image-placeholder" src={this.state.playerImg} />
								</div>
							</div>
						</div>
						<div id="team-input-container" className="input-container">
							<label className="label-title" htmlFor="team">
								Team
							</label>
							<div className="team-league-container">
								<div className="leagues-wrapper">
									<div className="leagues">
										<span onClick={this.handleMakeLeagueBtnActive} className="al">
											AL
										</span>
										<span onClick={this.handleMakeLeagueBtnActive} className="nl league-is-active">
											NL
										</span>
									</div>
								</div>
								<div className="divisions-wrapper">
									<div className="divisions">
										<span onClick={this.handleMakeLeagueBtnActive} className="central">
											West
										</span>
										<span onClick={this.handleMakeLeagueBtnActive} className="west">
											Central
										</span>
										<span onClick={this.handleMakeLeagueBtnActive} className="east">
											East
										</span>
									</div>
									<div className="chosen-team">{nlEast}</div>
								</div>
							</div>
						</div>
						<div onClick={this.handleSubmit} className="submit-container">
							<span className="submit">Add Baseball Card</span>
							<FontAwesomeIcon icon={faPlus} />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddCardForm;
