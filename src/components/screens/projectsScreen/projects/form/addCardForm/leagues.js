import React, { Component } from 'react';

class Leagues extends Component {
	state = {
		league: 'nl',
		division: 'east'
	};

	handleMakeLeagueBtnActive = e => {
		this.setState({
			league: e.target.id
		});
		this.chooseInput(this.state.league, this.state.division);
		const btns = document.querySelectorAll('.leagues-btn');
		btns.forEach(btn => btn.classList.remove('league-is-active'));
		e.target.classList.add('league-is-active');
	};
	handleMakeDivisionBtnActive = e => {
		this.setState({
			division: e.target.id
		});
		this.chooseInput(this.state.league, this.state.division);
		const btns = document.querySelectorAll('.division-btn');
		btns.forEach(btn => btn.classList.remove('league-is-active'));
		e.target.classList.add('league-is-active');
	};

	chooseInput = (league, division) => {
		const nlEast = (
			<select name="team" id="team">
				<option defaultValue>- nleast -</option>
				<option value="mets">New York Mets</option>
				<option value="braves">Atlanta Braves</option>
				<option value="marlins">Miami Marlins</option>
				<option value="phillies">Philadelphia Phillies</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const nlCentral = (
			<select name="team" id="team">
				<option defaultValue>- nl centrals -</option>
				<option value="yankees">New York Yankees</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const nlWest = (
			<select name="team" id="team">
				<option defaultValue>- nl west -</option>
				<option value="yankees">New York Yankees</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const alEast = (
			<select name="team" id="team">
				<option defaultValue>- al East -</option>
				<option value="yankees">New York Yankees</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const alCentral = (
			<select name="team" id="team">
				<option defaultValue>- Choose AL Central Team -</option>
				<option defaultValue value="yankees">
					New York Yankees
				</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
		);
		const alWest = (
			<select name="team" id="team">
				<option defaultValue>- AL West -</option>
				<option value="yankees">New York Yankees</option>
				<option value="rays">Tampa Rays</option>
				<option value="red-sox">Boston Red Sox</option>
				<option value="blue-jays">Toronto Blue Jays</option>
				<option value="orioles">Baltimore Orioles</option>
				<option value="nationals">Washington Nationals</option>
			</select>
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
			<div id="team-input-container" className="input-container">
				<label className="label-title" htmlFor="team">
					Team
				</label>
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
			</div>
		);
	}
}

export default Leagues;
