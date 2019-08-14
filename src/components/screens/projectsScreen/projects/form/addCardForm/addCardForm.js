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
		console.log('Want Working: ' + team);

		//Works
		const teamName = TeamAssets.mets;

		// Doesnt work
		// const teamName = TeamAssets[team];
		// const teamName = TeamAssets['mets'].url;
		console.log(teamName);
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

	handleSubmit = e => {
		e.preventDefault();
		this.handleFindTeamImg();
		this.handleFindPlayerImg();
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
						<div className="form-row">
							<div className="input-container">
								<span className="label-title">Card Image</span>
								<div className="player-image-container">
									<div className="image-placeholder-wrapper">
										<label className="upload form-button" htmlFor="player-image">
											<FontAwesomeIcon icon={faUpload} />
											<span>Upload</span>
										</label>
										<img className="image-placeholder" src={this.state.playerImg} />
									</div>
									<div className="btn-wrapper">
										<input
											name="playerImage"
											onChange={this.handleImageUpload}
											type="file"
											id="player-image"
										/>
									</div>
								</div>
							</div>
							<div className="input-container">
								<label className="label-title" htmlFor="field-position">
									Field Position
								</label>
								<svg
									className="baseball-field"
									xmlns="http://www.w3.org/2000/svg"
									xmlns="http://www.w3.org/1999/xlink"
									viewBox="0 0 406 398"
								>
									<g data-name="Field">
										<path
											data-name="Warning Track"
											className="sand"
											d="M203.47747,0C407.60906,0,406.95492,203.47745,406.95492,203.47745l-189.256,189.256a20.11213,20.11213,0,0,1-28.44284,0L0,203.47745S-.66263,0,203.47747,0Z"
										/>
										<path
											className="dark-grass"
											d="M396.45849,213.97386c-.16877-7.59739-6.19474-201.84874-192.90143-201.84874-191.10739,0-192.89085,197.41523-192.906,202.00339L189.256,392.73344a20.11216,20.11216,0,0,0,28.44287,0Z"
										/>
										<g>
											<path
												className="light-grass"
												d="M26.75321,131.76968,136.804,21.719C74.1664,41.59252,42.63105,88.98461,26.75321,131.76968Z"
											/>
											<path
												className="light-grass"
												d="M301.6748,35.85441a166.45374,166.45374,0,0,0-27.4682-12.52628L47.0287,250.506l19.99724,19.99724Z"
											/>
											<path
												className="light-grass"
												d="M203.55707,12.1251q-8.21349,0-15.95763.48459l-174.68985,174.69a214.82751,214.82751,0,0,0-2.25848,26.82878l7.71188,7.71188L226.99092,13.21261C219.51193,12.50341,211.71065,12.1251,203.55707,12.1251Z"
											/>
											<path
												className="light-grass"
												d="M384.77329,147.40725a245.74453,245.74453,0,0,0-10.93381-29.06085L144.35407,347.83146l19.9975,19.99746Z"
											/>
											<path
												className="light-grass"
												d="M217.699,392.73342l178.7595-178.75958c-.02969-1.33887-.243-8.48007-1.59334-19.328L193.52319,395.98776A20.11693,20.11693,0,0,0,217.699,392.73342Z"
											/>
											<path
												className="light-grass"
												d="M352.82748,82.02733a173.06713,173.06713,0,0,0-18.53129-21.46315L95.69139,299.16877l19.99737,19.99733Z"
											/>
										</g>
										<path
											data-name="Infield"
											className="sand"
											d="M203.47745,347.4514l90.93874-90.93874a91.554,91.554,0,0,0-181.87743,0Z"
										/>
										<g>
											<circle
												data-name="Home Plate Sand"
												className="sand"
												cx="203.47747"
												cy="347.00459"
												r="12.82958"
											/>
											<circle
												data-name="Home Plate"
												className="white"
												cx="203.47747"
												cy="347.00459"
												r="4.45968"
											/>
										</g>
										<path
											data-name="Foul Lines"
											className="white"
											d="M203.4775,348.95105,389.12894,163.29961q-.14544-.60106-.29434-1.20588l-.7495-.7495L203.4775,345.95183,18.47531,160.94964l-.74972.74972q-.14447.60844-.286,1.21377Z"
										/>
										<rect
											className="dark-grass"
											x="159.65524"
											y="223.28515"
											width="87.64446"
											height="87.64446"
											transform="translate(158.48433 599.86113) rotate(-135)"
										/>
										<g>
											<circle
												data-name="2nd Base Sand"
												className="sand"
												cx="203.47747"
												cy="205.13339"
												r="7.08924"
											/>
											<circle
												data-name="2nd Base"
												className="white"
												cx="203.47747"
												cy="205.13339"
												r="2.46428"
											/>
										</g>
										<g>
											<circle
												data-name="1st Base Sand"
												className="sand"
												cx="265.22208"
												cy="266.878"
												r="7.08924"
											/>
											<circle
												data-name="1st Base"
												className="white"
												cx="265.22208"
												cy="266.878"
												r="2.46428"
											/>
										</g>
										<g>
											<circle
												data-name="3rd Base Sand"
												className="sand"
												cx="141.70047"
												cy="266.878"
												r="7.08924"
											/>
											<circle
												data-name="3rd Base"
												className="white"
												cx="141.70047"
												cy="266.878"
												r="2.46428"
											/>
										</g>
										<circle
											data-name="Mound"
											className="sand"
											cx="203.47747"
											cy="267.10738"
											r="7.59631"
										/>
									</g>
								</svg>
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
						</div>
						<Leagues handleFindTeamImg={this.handleFindTeamImg} />
						<div onClick={this.handleSubmit} className="submit-container">
							<span className="submit">Add Baseball Card</span>
							<FontAwesomeIcon icon={faPlus} />
						</div>
						<div onClick={this.handleFindPlayerImg} className="btn-randomize form-button">
							<FontAwesomeIcon icon={faRandom} />
							<span>Randomize</span>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddCardForm;
