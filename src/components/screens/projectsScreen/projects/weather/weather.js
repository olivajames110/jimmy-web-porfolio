import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './css/weatherMain.css';

class Weather extends Component {
	state = {
		cards: []
	};

	render() {
		return (
			<div className="weather-project-wrapper">
				<section className="section-header">
					<div className="search-bar-wrapper">
						<div className="search-bar">
							<span className="search-bar__icon">
								<FontAwesomeIcon icon={faSearch} />
							</span>

							<input type="text" />
						</div>
					</div>

					<div className="current-weather-container">
						<div className="current-weather-wrapper">
							<div className="temperatures">
								<div className="current-temperature">86</div>
								<div className="high-low-container">
									<span className="high-temp">90</span>
									<span className="low-temp">70</span>
								</div>
							</div>
							<div className="current-conditions">Current Conditions</div>
						</div>
						<div className="current-town-wrapper">
							<div className="current-town">Current Town</div>
						</div>
						<div className="current-weather-graphic-wrapper">
							<div className="current-town">Weather Graphic</div>
						</div>
					</div>
				</section>
				<section className="section-body">
					<div className="section-body-container">
						<div className="weather-chart-wrapper">
							<div id="morning" className="weather-chart-column">
								<div className="title">morning</div>
								<div id="temperature">Temp</div>
								<div id="condition">Condition</div>
							</div>
							<div id="afternoon" className="weather-chart-column">
								<div className="title">afternoon</div>
								<div id="temperature">Temp</div>
								<div id="condition">Condition</div>
							</div>
							<div id="evening" className="weather-chart-column">
								<div className="title">evening</div>
								<div id="temperature">Temp</div>
								<div id="condition">Condition</div>
							</div>
							<div id="overnight" className="weather-chart-column">
								<div className="title">overnight</div>
								<div id="temperature">Temp</div>
								<div id="condition">Condition</div>
							</div>
						</div>
					</div>
				</section>
				<section className="todays-details">
					<div className="card-container">
						<div className="card-title">Today's Weather</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Weather;
