// const PlayerImages = props => {
// 	const players = [
// 		'http://www.metstoday.com/wp-content/uploads/2010/05/reyes-swing.jpg',
// 		'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png'
// 	];

// 	const randomNum = Math.round(Math.random());

// 	return players[randomNum];
// };

const Players = [
	'http://www.metstoday.com/wp-content/uploads/2010/05/reyes-swing.jpg',
	'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png'
];

const TeamAssets = [
	{
		team: 'mets',
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue'
	},
	{
		team: 'braves',
		url: 'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png',
		color: 'red'
	}
];

export { TeamAssets, Players };
