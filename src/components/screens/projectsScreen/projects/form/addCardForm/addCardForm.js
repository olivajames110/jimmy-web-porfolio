import React, { Component } from 'react';
import { TeamAssets, Players, lastNames, firstNames } from './assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDownload,
	faUpload,
	faRandom,
	faPlus,
	faImage,
	faCameraRetro,
	faCamera,
	faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import Leagues from './leagues';
import Axios from 'axios';

class AddCardForm extends Component {
	state = {
		id: null,
		firstName: null,
		lastName: null,
		position: null,
		team: TeamAssets.mets.name,
		teamImg: TeamAssets.mets.url,
		playerImg: null,
		color: TeamAssets.mets.color,
		league: 'nl',
		division: 'east'
	};

	componentWillMount() {
		// this.randomizeCard();
		// this.handleFindPlayerImg();
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handlePositionChange = e => {
		this.handleMakeActive(e, '.position-btn', 'position-btn--active');
		console.log(e.target.getAttribute('data-position'));
		this.setState({
			position: e.target.getAttribute('data-position')
		});
	};

	handleMakeActive = (e, classNameTarget, classNameToggle, custom) => {
		const btns = document.querySelectorAll(classNameTarget);
		btns.forEach(btn => btn.classList.remove(classNameToggle));
		if (custom) {
			e.classList.add(classNameToggle);
		} else {
			e.target.classList.add(classNameToggle);
		}
	};

	//Deails with adding and removing images
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
		if (!team) {
			return;
		}
		const teamName = TeamAssets[team];
		this.setState({
			teamImg: teamName.url,
			color: teamName.color,
			team: teamName.name
		});
	};

	handleFindPlayerImg = () => {
		this.setState({
			playerImg: null
		});
	};

	handleRemovePlayerImage = () => {
		this.setState({
			playerImg: null
		});
	};

	//Randomize
	randomizeCard = () => {
		const player = randomize(Players);
		const firstName = randomize(firstNames);
		const lastName = randomize(lastNames);
		const league = randomize(document.querySelectorAll('.leagues-btn'));
		const division = randomize(document.querySelectorAll('.division-btn'));
		const team = randomize(document.querySelectorAll('.team-btn'));
		const position = randomize(document.querySelectorAll('.position-btn'));
		console.log(league);

		// const player = Players[Math.floor(Math.random() * Players.length)];
		// this.handleMakeActive(team, '', 'position-btn--active', true);
		this.handleMakeActive(league, '.leagues-btn', 'league-is-active', true);
		this.handleMakeActive(division, '.division-btn', 'league-is-active', true);
		this.handleMakeActive(team, '.team-btn', 'league-is-active', true);
		this.handleMakeActive(position, '.position-btn', 'position-btn--active', true);
		document.getElementById('first-name').value = firstName;
		document.getElementById('last-name').value = lastName;

		this.setState({
			playerImg: player,
			firstName: firstName,
			lastName: lastName,
			position: position.getAttribute('data-position'),
			league: league,
			division: division
		});

		function randomize(array) {
			return array[Math.floor(Math.random() * array.length)];
		}
		// this.props.handleAddCard(this.state);
	};

	randomizeTeam = (league, division) => {};

	//Submit
	handleSubmit = e => {
		// e.preventDefault();
		let isValid = false;
		(function(state) {
			if (state.firstName || state.lastName || state.playerImg || state.teamImg) {
				console.log(state.firstName, state.lastName, state.playerImg);
				isValid = true;
			}
		})(this.state);

		if (isValid) {
			this.handleFindTeamImg();
			this.handleFindPlayerImg();
			this.props.handleAddCard(this.state);
			document.getElementById('first-name').value = '';
			document.getElementById('last-name').value = '';
		} else {
			console.log('is false');
		}
	};

	// 	<div className="image-controls-container">
	// 	<span onClick={this.handleRemovePlayerImage} className="remove-player-image-btn">
	// 		Clear
	// 	</span>
	// </div>
	render() {
		const emptyImagePlaceholder = (
			<div className="empty-image-placeholder">
				<FontAwesomeIcon icon={faImage} />
				<span>Upload Image</span>
			</div>
		);
		const playerImage = <img className="image-placeholder" src={this.state.playerImg} />;

		const editIcon = (
			<label className="edit form-button" htmlFor="player-image">
				<FontAwesomeIcon icon={faPencilAlt} />
				<span>Edit</span>
			</label>
		);
		const uploadIcon = (
			<label className="upload form-button" htmlFor="player-image">
				<FontAwesomeIcon icon={faCamera} />
				<span>Upload</span>
			</label>
		);

		return (
			<div className="form-container">
				<div className="title-wrapper">
					<div>
						<h1>Baseball Card Builder</h1>
						<p>Add a new baseball card to the list. Make your own or randomize your player.</p>
					</div>

					<div className="player-image-container">
						<div className="image-placeholder-wrapper">
							{this.state.playerImg ? editIcon : uploadIcon}
							{this.state.playerImg ? playerImage : emptyImagePlaceholder}
						</div>

						<div className="btn-wrapper">
							<input name="playerImage" onChange={this.handleImageUpload} type="file" id="player-image" />
						</div>
					</div>
				</div>
				<div className="inputs-wrapper">
					<form>
						<div id="names-and-picture">
							<div className="names-wrapper ">
								<div className="input-container">
									<input
										name="firstName"
										onChange={this.handleInputChange}
										type="text"
										id="first-name"
										required
									/>
									<label className="label-title" htmlFor="first-name">
										First Name
									</label>
								</div>
								<div className="input-container">
									<input
										name="lastName"
										onChange={this.handleInputChange}
										type="text"
										id="last-name"
										required
									/>
									<label className="label-title" htmlFor="last-name">
										Last Name
									</label>
								</div>
							</div>
						</div>
						<div id="picture-and-position" className="form-row">
							<div className="input-container">
								<Leagues
									handleFindTeamImg={this.handleFindTeamImg}
									handleMakeActive={this.handleMakeActive}
									league={this.state.league}
									division={this.state.division}
								/>
								<div className="baseball-field-container">
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
									<span
										onClick={this.handlePositionChange}
										data-position="Pitcher"
										className="position-btn"
										id="pitcher"
									>
										P
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="Catcher"
										className="position-btn"
										id="catcher"
									>
										C
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="1st Base"
										className="position-btn"
										id="first-base"
									>
										1B
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="2nd Base"
										className="position-btn"
										id="second-base"
									>
										2B
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="3rd Base"
										className="position-btn"
										id="third-base"
									>
										3B
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="Short Stop"
										className="position-btn"
										id="short-stop"
									>
										SS
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="Left Field"
										className="position-btn"
										id="left-field"
									>
										LF
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="Center Field"
										className="position-btn"
										id="center-field"
									>
										CF
									</span>
									<span
										onClick={this.handlePositionChange}
										data-position="Right Field"
										className="position-btn"
										id="right-field"
									>
										RF
									</span>
								</div>
								<div className="submit-container">
									<div onClick={this.randomizeCard} className="btn-randomize form-button">
										<FontAwesomeIcon icon={faRandom} />
									</div>
									<div className="submit-btn-wrapper" onClick={this.handleSubmit}>
										<span className="submit">Add Card</span>
										<FontAwesomeIcon icon={faPlus} />
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddCardForm;
