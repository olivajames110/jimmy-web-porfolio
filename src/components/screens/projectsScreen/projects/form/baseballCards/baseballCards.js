import React from 'react';

// import './css/baseballCardMain';

const BaseballCards = props => {
	const playerList = props.cards.map(card => {
		return (
			<div className="baseball-card-wrapper">
				<div className="team">
					<img src={card.teamImg} alt="player" />
				</div>
				<img className="player" src={card.playerImg} alt="player" />
				<div className="player-name">
					<div className="last-name">{card.lastName}</div>
					<div className="first-name">{card.firstName}</div>
					<div className="name-and-position">
						<div className="position"> {card.position}</div>
						<div className="team-name">{card.team}</div>
					</div>
				</div>
			</div>
		);
	});

	return <div className="baseball-card-container">{playerList}</div>;
};

export default BaseballCards;
