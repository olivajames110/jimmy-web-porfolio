import React from 'react';

// import './css/baseballCardMain';

const BaseballCards = props => {
	let noCards = (
		<div className="no-card-placerholder-container">
			<span>There are no cards.</span>
		</div>
	);
	const playerList = props.cards.map(card => {
		return (
			<div className="baseball-card-wrapper">
				<img className="player" src={card.playerImg} alt="player" />
				<div className="player-details-bar">
					<div className="player-details">
						<div className="last-name">{card.lastName}</div>
						<div style={{ backgroundColor: card.color }} className="first-name">
							{card.firstName}
						</div>
						<div className="position-and-team-container">
							<div className="position"> {card.position}</div>
							<div className="team-name">{card.team}</div>
						</div>
					</div>
					<div style={{ border: '1px solid' + card.color }} className="team-img">
						<img src={card.teamImg} alt="player" />
					</div>
				</div>
			</div>
		);
	});

	return <div className="baseball-card-container">{props.cards.length ? playerList : noCards}</div>;
};

export default BaseballCards;
