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
	'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png',
	'https://securea.mlb.com/mlb/images/players/head_shot/624413.jpg',
	'https://cdn.mlbtraderumors.com/files/2019/03/deGrom.Jacob-vertical-259x300.jpg',
	'https://securea.mlb.com/mlb/images/players/head_shot/643446.jpg',
	'http://dailystache.net/wp-content/uploads/WX2LQBZXE2QZVLUYVYMS4M2EEM-1-660x400.jpg',
	'https://securea.mlb.com/mlb/images/players/head_shot/429664.jpg',
	'https://athlonsports.com/sites/athlonsports.com/files/styles/article_top_img/public/Mets-Jacob-deGrom86596_0.jpg?itok=-IxZbnVV',
	'https://securea.mlb.com/mlb/images/players/head_shot/642708.jpg',
	'https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54bd3d512cfd2_-_hbz-mlb-david-wright-487011951.jpg'
];

const TeamAssets = {
	mets: {
		name: 'New York Mets',
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: '#004784',
		logo: './images/mets'
	},
	marlins: {
		url: 'https://securea.mlb.com/mlb/images/players/head_shot/643446.jpg',
		color: 'blue',
		logo: './images/mets'
	},
	phillies: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	braves: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	nationals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	orioles: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	'red-sox': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	yankees: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	rays: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	'blue-jays': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	'white-sox': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	indians: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	tigers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	royals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	twins: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	cubs: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	reds: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	brewers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	pirates: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	cardinals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	diamondbacks: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	rockies: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	dodgers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	padres: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	giants: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	astros: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	angels: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	athletics: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	mariners: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: './images/mets'
	},
	rangers: {
		url: 'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png',
		color: 'red',
		logo: './images/mets'
	}
};

export { TeamAssets, Players };
