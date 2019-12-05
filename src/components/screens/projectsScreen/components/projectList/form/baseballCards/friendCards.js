import React from 'react';
import './friendCardsCss/friendCards.css';
// import './css/baseballCardMain';

const FriendCards = props => {
	let noCards = (
		<div className="no-card-placerholder-container">
			<span>There are no cards.</span>
		</div>
	);
	const friendList = props.cards.map(card => {
		return (
			<div id="friend-card" className="friend-card-wrapper">
				<img className="player" src={card.playerImg} alt="player" />
				<div className="card-text-container">
					<div className="card-text top">{card.lastName}</div>
					<div className="card-text bottom">{card.firstName}</div>
				</div>
			</div>
		);
	});

	return <div className="baseball-card-container">{props.cards.length ? friendList : noCards}</div>;
};

export default FriendCards;
