import React, { Component } from 'react';
import assets, { TeamAssets } from './assets/assets';

class Leagues extends Component {
	state = {
		league: 'nl',
		division: 'east',
		teamValue: null
	};

	handleMakeLeagueBtnActive = e => {
		this.setState({
			league: e.target.id
		});
		this.chooseInput(this.state.league, this.state.division);
		this.handleMakeActive(e, '.leagues-btn');
	};
	handleMakeDivisionBtnActive = e => {
		this.setState({
			division: e.target.id
		});
		this.chooseInput(this.state.league, this.state.division);
		this.handleMakeActive(e, '.division-btn');
	};

	test = e => {
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

	chooseInput = (league, division) => {
		const nlEast = (
			<div class="team-container">
				<img onClick={this.test} id="mets" className="team-btn" src={TeamAssets.mets.logo} alt="mets" />
				<img onClick={this.test} id="marlins" className="team-btn" src={TeamAssets.marlins.logo} alt="mets" />
				<img onClick={this.test} id="phillies" className="team-btn" src={TeamAssets.phillies.logo} alt="mets" />
				<img
					onClick={this.test}
					id="nationals"
					className="team-btn"
					src={TeamAssets.nationals.logo}
					alt="mets"
				/>
				<img onClick={this.test} id="braves" className="team-btn" src={TeamAssets.braves.logo} alt="mets" />
			</div>
		);
		const nlCentral = (
			<div class="team-container">
				<img onClick={this.test} id="cubs" className="team-btn" src={TeamAssets.cubs.logo} alt="mets" />
				<img
					onClick={this.test}
					id="cardinals"
					className="team-btn"
					src={TeamAssets.cardinals.logo}
					alt="mets"
				/>

				<img onClick={this.test} id="brewers" className="team-btn" src={TeamAssets.brewers.logo} alt="mets" />
				<img onClick={this.test} id="reds" className="team-btn" src={TeamAssets.reds.logo} alt="mets" />
				<img onClick={this.test} id="pirates" className="team-btn" src={TeamAssets.pirates.logo} alt="mets" />
			</div>
		);
		const nlWest = (
			<div class="team-container">
				<img onClick={this.test} id="dodgers" className="team-btn" src={TeamAssets.dodgers.logo} alt="mets" />
				<img
					onClick={this.test}
					id="diamondbacks"
					className="team-btn"
					src={TeamAssets.diamondbacks.logo}
					alt="mets"
				/>
				<img onClick={this.test} id="giants" className="team-btn" src={TeamAssets.giants.logo} alt="mets" />
				<img onClick={this.test} id="rockies" className="team-btn" src={TeamAssets.rockies.logo} alt="mets" />

				<img onClick={this.test} id="padres" className="team-btn" src={TeamAssets.padres.logo} alt="mets" />
			</div>
		);
		const alCentral = (
			<div class="team-container">
				<img onClick={this.test} id="indians" className="team-btn" src={TeamAssets.indians.logo} alt="mets" />
				<img onClick={this.test} id="twins" className="team-btn" src={TeamAssets.twins.logo} alt="mets" />
				<img
					onClick={this.test}
					id="white-sox"
					className="team-btn"
					src={TeamAssets['white-sox'].logo}
					alt="mets"
				/>
				<img onClick={this.test} id="royals" className="team-btn" src={TeamAssets.royals.logo} alt="mets" />
				<img onClick={this.test} id="tigers" className="team-btn" src={TeamAssets.tigers.logo} alt="mets" />
			</div>
		);
		const alEast = (
			<div class="team-container">
				<img onClick={this.test} id="yankees" className="team-btn" src={TeamAssets.yankees.logo} alt="mets" />
				<img onClick={this.test} id="rays" className="team-btn" src={TeamAssets.rays.logo} alt="mets" />
				<img
					onClick={this.test}
					id="red-sox"
					className="team-btn"
					src={TeamAssets['red-sox'].logo}
					alt="mets"
				/>
				<img
					onClick={this.test}
					id="blue-jays"
					className="team-btn"
					src={TeamAssets['blue-jays'].logo}
					alt="mets"
				/>
				<img onClick={this.test} id="orioles" className="team-btn" src={TeamAssets.orioles.logo} alt="mets" />
			</div>
		);
		const alWest = (
			<div class="team-container">
				<img onClick={this.test} id="astros" className="team-btn" src={TeamAssets.astros.logo} alt="mets" />
				<img
					onClick={this.test}
					id="athletics"
					className="team-btn"
					src={TeamAssets.athletics.logo}
					alt="mets"
				/>

				<img onClick={this.test} id="rangers" className="team-btn" src={TeamAssets.rangers.logo} alt="mets" />
				<img onClick={this.test} id="angels" className="team-btn" src={TeamAssets.angels.logo} alt="mets" />
				<img onClick={this.test} id="mariners" className="team-btn" src={TeamAssets.mariners.logo} alt="mets" />
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
		return (
			<div className="team-league-container">
				<div className="leagues-wrapper">
					<div id="leagues" className="leagues">
						<span id="al" onClick={this.handleMakeLeagueBtnActive} className="leagues-btn">
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
					<div className="chosen-team">{this.chooseInput(this.state.league, this.state.division)}</div>
				</div>
			</div>
		);
	}
}

export default Leagues;
