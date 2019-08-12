import React, { Component } from 'react';
import { TeamAssets, Players } from './assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload, faRandom, faPlus } from '@fortawesome/free-solid-svg-icons';
import Leagues from './leagues';
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

	handleFindTeamImg = team => {
		// const team = TeamAssets[Math.round(Math.random())];
		const teamName = TeamAssets.mets;
		this.setState({
			teamImg: teamName.url,
			color: teamName.color,
			team: teamName.name
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
		const btns = document.querySelectorAll('.leagues-btn');
		btns.forEach(btn => btn.classList.remove('league-is-active'));
		e.target.classList.add('league-is-active');
	};
	handleMakeDivisionBtnActive = e => {
		const btns = document.querySelectorAll('.division-btn');
		btns.forEach(btn => btn.classList.remove('league-is-active'));
		e.target.classList.add('league-is-active');
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
								<option value="short-stop">Short Stop</option>
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
						<Leagues />
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
