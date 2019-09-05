import React, { Component } from 'react';
import WeatherSearchBar from './components/searchBar/searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import './css/weatherMain.css';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Weather extends Component {
	state = {
		cards: []
	};

	render() {
		const googleMapsApiKey = 'AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk';
		const key = (
			<script
				type="text/javascript"
				src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
			/>
		);

		const options = {
			axisX: {
				tickColor: 'transparent',
				labelFontSize: 14,
				labelFontColor: ' #7a78788e',
				lineColor: 'rgba(0,0,0,0)',
				gridColor: 'rgba(122, 120, 120, 0.21176470588235294)',
				gridThickness: 1
			},
			axisY: {
				gridColor: 'transparent',
				tickColor: 'transparent',
				suffix: '°',
				labelFontSize: 14,
				labelFontColor: ' #7a78788e',
				lineColor: 'rgba(0,0,0,0)',
				minimum: 65,
				maximum: 87
			},
			data: [
				{
					markerColor: '#046ab4ad',
					lineColor: '#046ab4ad',
					lineThickness: 1,
					type: 'spline',
					dataPoints: [
						{ label: 'Morning', y: 68 },
						{ label: 'Evening', y: 74 },
						{ label: 'Afternoon', y: 82 },
						{ label: 'Night', y: 70 }
					]
				}
			]
		};

		console.log(options);
		return (
			<div className="weather-project-wrapper">
				<section className="section-header">
					<div className="current-weather-container">
						<div className="current-weather-wrapper">
							<div className="temperatures">
								<div className="current-temperature main-item">86</div>
								<div className="high-low-container">
									<span className="high-temp">90</span>
									<span className="low-temp">70</span>
								</div>
							</div>
							<div className="current-conditions">Conditions</div>
						</div>
						<WeatherSearchBar />
						<div className="current-weather-graphic-wrapper">
							<div className="current-town main-item">
								<FontAwesomeIcon icon={faCloudMoonRain} />
							</div>
						</div>
					</div>
				</section>
				<section className="section-body">
					<div className="section-body-container">
						<div className="weather-chart-container">
							<CanvasJSChart
								options={options}
								/* onRef = {ref => this.chart = ref} */
							/>
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

// const oldWeatherChart = (	<div className="weather-chart-container">
// <div className="weather-chart-column">
// 	<div className="time-of-day">Morning</div>
// 	<div className="temperature-container">
// 		<span id="morning">40°</span>
// 	</div>
// 	<div id="condition">Condition</div>
// </div>
// <div className="weather-chart-column">
// 	<div className="time-of-day">Afternoon</div>
// 	<div className="temperature-container">
// 		<span id="afternoon">60°</span>
// 	</div>
// 	<div id="condition">Condition</div>
// </div>
// <div className="weather-chart-column">
// 	<div className="time-of-day">Evening</div>
// 	<div className="temperature-container">
// 		<span id="evening">80°</span>
// 	</div>
// 	<div id="condition">Condition</div>
// </div>
// <div className="weather-chart-column">
// 	<div className="time-of-day">Overnight</div>
// 	<div className="temperature-container">
// 		<span id="overnight">50°</span>
// 	</div>
// 	<div id="condition">Condition</div>
// </div>
// </div>)
