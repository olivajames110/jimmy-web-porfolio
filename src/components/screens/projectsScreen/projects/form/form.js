import React, { Component } from 'react';
import BaseballCards from './baseballCards/baseballCards';
import AddCardForm from './addCardForm/addCardForm';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCloudSunRain, faScroll} from '@fortawesome/free-solid-svg-icons';
import './css/formMain.css';

class Form extends Component {
	state = {
		cards: [
			// cards: [
			// 	{
			// 		id: 1,
			// 		firstName: 'Jose',
			// 		lastName: 'Reyes',
			// 		position: 'Short Stop',
			// 		team: 'New York Mets',
			// 		teamImg:
			// 			'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
			// 		playerImg: 'http://www.metstoday.com/wp-content/uploads/2010/05/reyes-swing.jpg',
			// 		color: 'red'
			// 	}
		]
	};

	handleAddCard = card => {
		card.id = Math.random();
		let cardList = [...this.state.cards, card];
		this.setState({
			cards: cardList
		});
	};

	render() {
		return (
			<div className="form-project-wrapper">
				<AddCardForm handleAddCard={this.handleAddCard} />
				<BaseballCards cards={this.state.cards} />
			</div>
		);
	}
}

export default Form;
