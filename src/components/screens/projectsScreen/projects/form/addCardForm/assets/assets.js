import metsLogo from './images/east/mets.png';
import philliesLogo from './images/east/phillies.png';
import nationalsLogo from './images/east/nationals.png';
import bravesLogo from './images/east/braves.png';
import marlinsLogo from './images/east/marlins.png';
import blueJaysLogo from './images/east/blue-jays.png';
import yankeesLogo from './images/east/yankees.png';
import oriolesLogo from './images/east/orioles.png';
import raysLogo from './images/east/rays.png';
import redSoxLogo from './images/east/red-sox.png';
import athleticsLogo from './images/west/athletics.png';
import angelsLogo from './images/west/angels.png';
import astrosLogo from './images/west/astros.png';
import diamondbacksLogo from './images/west/diamondbacks.png';
import dodgersLogo from './images/west/dodgers.png';
import giantsLogo from './images/west/giants.png';
import marinersLogo from './images/west/mariners.png';
import padresLogo from './images/west/padres.png';
import rangersLogo from './images/west/rangers.png';
import rockiesLogo from './images/west/rockies.png';
import brewersLogo from './images/central/brewers.png';
import cardinalsLogo from './images/central/cardinals.png';
import cubsLogo from './images/central/cubs.png';
import indiansLogo from './images/central/indians.png';
import piratesLogo from './images/central/pirates.png';
import redsLogo from './images/central/reds.png';
import royalsLogo from './images/central/royals.png';
import tigersLogo from './images/central/tigers.png';
import twinsLogo from './images/central/twins.png';
import whiteSoxLogo from './images/central/white-sox.png';

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
		logo: metsLogo
	},
	marlins: {
		name: 'Miamai Marlins',
		url: 'https://securea.mlb.com/mlb/images/players/head_shot/643446.jpg',
		color: 'green',
		logo: marlinsLogo
	},
	phillies: {
		name: 'Philidelphia Phillies',
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'red',
		logo: philliesLogo
	},
	braves: {
		name: 'Atlanta Braves',
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'Red',
		logo: bravesLogo
	},
	nationals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: nationalsLogo
	},
	orioles: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: oriolesLogo
	},
	'red-sox': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: redSoxLogo
	},
	yankees: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: yankeesLogo
	},
	rays: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: raysLogo
	},
	'blue-jays': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: blueJaysLogo
	},
	'white-sox': {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: whiteSoxLogo
	},
	indians: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: indiansLogo
	},
	tigers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: tigersLogo
	},
	royals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: royalsLogo
	},
	twins: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: twinsLogo
	},
	cubs: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: cubsLogo
	},
	reds: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: redsLogo
	},
	brewers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: brewersLogo
	},
	pirates: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: piratesLogo
	},
	cardinals: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: cardinalsLogo
	},
	diamondbacks: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: diamondbacksLogo
	},
	rockies: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: rockiesLogo
	},
	dodgers: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: dodgersLogo
	},
	padres: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: padresLogo
	},
	giants: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: giantsLogo
	},
	astros: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: astrosLogo
	},
	angels: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: angelsLogo
	},
	athletics: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: athleticsLogo
	},
	mariners: {
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1920px-New_York_Mets.svg.png',
		color: 'blue',
		logo: marinersLogo
	},
	rangers: {
		url: 'https://i.pinimg.com/originals/ce/fd/a9/cefda9cbe28f7600a2b80ccbc962a725.png',
		color: 'red',
		logo: rangersLogo
	}
};

export { TeamAssets, Players };
