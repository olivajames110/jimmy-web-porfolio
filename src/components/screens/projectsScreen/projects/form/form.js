import React, { Component } from 'react';
import BaseballCards from './baseballCards/baseballCards';
import AddCardForm from './addCardForm/addCardForm';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCloudSunRain, faScroll} from '@fortawesome/free-solid-svg-icons';
import './css/formMain.css';

////--------CHECKLIST
//Randomize functionality
//Reverse sort order of cards
//Change League teams from list to images
//Make teams selecting work with handleFindTeamImg(team)
//Add Error validation for if fields are missing
//Reset inputs on submit

////Finish styleing
//image size on card

class Form extends Component {
	state = {
		cards: []
	};

	handleAddCard = card => {
		card.id = Math.random();
		let cardList = [...this.state.cards, card];
		this.setState({
			cards: cardList.reverse()
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
