import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import GoogleMapLoader from 'react-google-maps-loader';
import GooglePlacesSuggest from 'react-google-places-suggest';
import './searchBar.css';
const MY_API_KEY =
	'https://maps.googleapis.com/maps/api/js?key=AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk&libraries=places&callback=activateSearchBar';

class WeatherSearchBar extends Component {
	state = {
		cards: []
	};
	// componentDidMount() {
	// 	const script = document.createElement('script');

	// 	script.src =
	// 		'https://maps.googleapis.com/maps/api/js?key=AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk&libraries=places&callback=activateSearchBar';
	// 	script.async = true;

	// 	document.body.appendChild(script);

	// 	activateSearchBar = () => {
	// 		const input = document.getElementById('town-search-bar');
	// 		let autoComplete = new google.maps.places.Autocomplete(input);
	// 	};
	// }
	// componentDidMount() {
	// 	axios
	// 		.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk&libraries=places')
	// 		.then(res => {
	// 			const persons = res.data;
	// 			console.log(persons);
	// 		});
	// }

	render() {
		return (
			<div className="search-bar ">
				<span className="search-bar__icon">
					<FontAwesomeIcon icon={faSearch} />
				</span>
				<input id="town-search-bar" placeholder="Enter a town name or city..." type="text" />
				<span className="border" />
			</div>
		);
	}
}

export default WeatherSearchBar;
