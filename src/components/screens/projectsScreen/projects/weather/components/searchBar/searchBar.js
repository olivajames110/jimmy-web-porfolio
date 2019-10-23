import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGooglePlacesSuggest from 'react-google-places-suggest';
import './searchBar.css';
const API_KEY = 'AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk';

class WeatherSearchBar extends Component {
	state = {
		search: '',
		value: ''
	};


	
	handleInputChange(e) {
		this.setState({ search: e.target.value, value: e.target.value });
	}

	handleSelectSuggest(suggest) {
		console.log(suggest);
		this.setState({ search: '', value: suggest.formatted_address });
		// console.log('latitude: ' + this.state.latitude, 'Longitude:' + this.state.longitude);
		this.props.updateTownDetails(
			suggest.geometry.bounds.oa.h,
			suggest.geometry.bounds.ka.g,
			suggest.address_components[0].long_name,
			suggest.address_components[suggest.address_components.length - 2].short_name
		);
	}

	render() {
		const { search, value } = this.state;
		return (
			<ReactGoogleMapLoader
				params={{
					key: API_KEY,
					libraries: 'places,geocode'
				}}
				render={googleMaps =>
					googleMaps && (
						<ReactGooglePlacesSuggest
							autocompletionRequest={{ input: search }}
							googleMaps={googleMaps}
							onSelectSuggest={this.handleSelectSuggest.bind(this)}
						>
							<div className="search-bar ">
								<span className="search-bar__icon">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</span>
								<input
									id="town-search-bar"
									onChange={this.handleInputChange.bind(this)}
									placeholder="Enter your town or city here..."
									type="text"
									value={value}
								/>
							</div>
						</ReactGooglePlacesSuggest>
					)}
			/>
		);
	}
}

export default WeatherSearchBar;
