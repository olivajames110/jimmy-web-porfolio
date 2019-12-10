import React, { Component } from 'react';
import assets, { Teamassets } from './assets/assets';

class Leagues extends Component {
	state = {
		//I want entire componenet to re-render each time this is updated through props
		league: this.props.league,
		division: this.props.division,
		teamValue: 'mets'
	};

	componentWillMount() {
		this.setState({
			league: this.props.league,
			division: this.props.division
		});
	}

	componentDidUpdate() {
		this.handleSetTeam(this.state.league, this.state.division);
	}

	// handleCheckUpdate = (league, division) => {
	// 	const leagueBtns = document.querySelectorAll('.leagues-btn');
	// 	const divisionBtns = document.querySelectorAll('.division-btn');
	// 	leagueBtns.forEach(btn => {
	// 		console.log('run');
	// 		return btn.contains('league-is-active') ? 'active' : 'not active';
	// 	});

	// 	console.log('Changed');

	// 	// this.setState({
	// 	// 	league: league,
	// 	// 	division: division
	// 	// });
	// };

	handleMakeLeagueBtnActive = e => {
		this.setState({
			league: e.target.id
		});
		this.handleSetTeam(this.state.league, this.state.division);
		this.handleMakeActive(e, '.leagues-btn');
	};
	handleMakeDivisionBtnActive = e => {
		this.setState({
			division: e.target.id
		});
		this.handleSetTeam(this.state.league, this.state.division);
		this.handleMakeActive(e, '.division-btn');
	};

	handleMakeTeamBtnActive = e => {
		console.log('Testt');
		console.log(e.target.id);
		this.handleMakeActive(e, '.team-btn');
		this.props.handleFindTeamImg(e.target.id);
	};

	handleMakeActive = (e, className) => {
		const btns = document.querySelectorAll(className);
		btns.forEach(btn => btn.classList.remove('league-is-active'));
		e.target.classList.add('league-is-active');
	};

	handleSetTeam = (league, division) => {
		const nlEast = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="mets"
					className="team-btn league-is-active "
					src={Teamassets.mets.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="marlins"
					className="team-btn"
					src={Teamassets.marlins.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="phillies"
					className="team-btn "
					src={Teamassets.phillies.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="nationals"
					className="team-btn"
					src={Teamassets.nationals.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="braves"
					className="team-btn"
					src={Teamassets.braves.logo}
					alt="mets"
				/>
			</div>
		);
		const nlCentral = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="cubs"
					className="team-btn"
					src={Teamassets.cubs.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="cardinals"
					className="team-btn"
					src={Teamassets.cardinals.logo}
					alt="mets"
				/>

				<img
					onClick={this.handleMakeTeamBtnActive}
					id="brewers"
					className="team-btn"
					src={Teamassets.brewers.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="reds"
					className="team-btn"
					src={Teamassets.reds.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="pirates"
					className="team-btn"
					src={Teamassets.pirates.logo}
					alt="mets"
				/>
			</div>
		);
		const nlWest = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="dodgers"
					className="team-btn"
					src={Teamassets.dodgers.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="diamondbacks"
					className="team-btn"
					src={Teamassets.diamondbacks.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="giants"
					className="team-btn"
					src={Teamassets.giants.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="rockies"
					className="team-btn"
					src={Teamassets.rockies.logo}
					alt="mets"
				/>

				<img
					onClick={this.handleMakeTeamBtnActive}
					id="padres"
					className="team-btn"
					src={Teamassets.padres.logo}
					alt="mets"
				/>
			</div>
		);
		const alCentral = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="indians"
					className="team-btn"
					src={Teamassets.indians.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="twins"
					className="team-btn"
					src={Teamassets.twins.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="white-sox"
					className="team-btn"
					src={Teamassets['white-sox'].logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="royals"
					className="team-btn"
					src={Teamassets.royals.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="tigers"
					className="team-btn"
					src={Teamassets.tigers.logo}
					alt="mets"
				/>
			</div>
		);
		const alEast = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="yankees"
					className="team-btn"
					src={Teamassets.yankees.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="rays"
					className="team-btn"
					src={Teamassets.rays.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="red-sox"
					className="team-btn"
					src={Teamassets['red-sox'].logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="blue-jays"
					className="team-btn"
					src={Teamassets['blue-jays'].logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="orioles"
					className="team-btn"
					src={Teamassets.orioles.logo}
					alt="mets"
				/>
			</div>
		);
		const alWest = (
			<div className="team-container">
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="astros"
					className="team-btn"
					src={Teamassets.astros.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="athletics"
					className="team-btn"
					src={Teamassets.athletics.logo}
					alt="mets"
				/>

				<img
					onClick={this.handleMakeTeamBtnActive}
					id="rangers"
					className="team-btn"
					src={Teamassets.rangers.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="angels"
					className="team-btn"
					src={Teamassets.angels.logo}
					alt="mets"
				/>
				<img
					onClick={this.handleMakeTeamBtnActive}
					id="mariners"
					className="team-btn"
					src={Teamassets.mariners.logo}
					alt="mets"
				/>
			</div>
		);

		if (league === 'al' && division === 'east') {
			return alEast;
		}
		if (league === 'al' && division === 'central') {
			return alCentral;
		}
		if (league === 'al' && division === 'west') {
			return alWest;
		}
		if (league === 'nl' && division === 'east') {
			return nlEast;
		}
		if (league === 'nl' && division === 'central') {
			return nlCentral;
		}
		if (league === 'nl' && division === 'west') {
			return nlWest;
		}
	};

	render() {
		let chosenTeamName = this.handleSetTeam(this.state.league, this.state.division);
		return (
			<div className="team-league-container">
				<div className="leagues-wrapper">
					<div id="leagues" className="leagues">
						<span
							id="al"
							onChange={this.handleCheckUpdate}
							onClick={this.handleMakeLeagueBtnActive}
							className="leagues-btn"
						>
							AL
						</span>
						<span
							id="nl"
							onClick={this.handleMakeLeagueBtnActive}
							className="leagues-btn  league-is-active"
						>
							NL
						</span>
					</div>
				</div>
				<div className="divisions-wrapper">
					<div className="divisions">
						<span id="west" onClick={this.handleMakeDivisionBtnActive} className="division-btn">
							West
						</span>
						<span id="central" onClick={this.handleMakeDivisionBtnActive} className="division-btn">
							Central
						</span>
						<span
							id="east"
							onClick={this.handleMakeDivisionBtnActive}
							className="division-btn  league-is-active"
						>
							East
						</span>
					</div>
					<div className="chosen-team">{chosenTeamName}</div>
				</div>
			</div>
		);
	}
}

export default Leagues;
