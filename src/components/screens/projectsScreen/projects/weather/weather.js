import React, { Component } from 'react';
import WeatherSearchBar from './components/searchBar/searchBar';
import SunriseSunsetTimeline from './components/sunriseSunsetTimeline/sunriseSunsetTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudMoonRain,
	faWind,
	faCloudRain,
	faWater,
	faEyeDropper,
	faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';
import './css/weatherMain.css';
import TimePeriodDailyGraph from './components/timePeriodDailyGraph/timePeriodDailyGraph';
const Weather_API_KEY = '89a1895982f13af1db8dd47ac6050776&me';

class Weather extends Component {
	state = {
		townName: null,
		stateAbbr: null,
		latitude: 42,
		longitude: -72,
		currentTemp: '87',
		currentWeatherDesc: null,
		highTemp: 11,
		lowTemp: 10,
		windSpeed: null,
		humidity: null,
		hourlyTemps: {
			morning: null,
			afternoon: null,
			evening: null,
			night: null
		}
	};

	componentDidMount() {
		this.getCurrentLocation();
		this.updateTownDetails();
	}

	getCurrentLocation = () => {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		let success = pos => {
			var crd = pos.coords;

			console.log('Your current position is:');
			console.log(`Latitude : ${crd.latitude}`);
			console.log(`Longitude: ${crd.longitude}`);
			console.log(`More or less ${crd.accuracy} meters.`);

			this.setState({
				latitude: crd.latitude,
				longitude: crd.longitude
			});
		};

		let error = err => {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
		// console.log(pos);
	};

	updateTownDetails = (lat, long, townName, stateAbbr) => {
		this.setState({
			townName: townName,
			stateAbbr: stateAbbr,
			latitude: lat,
			longitude: long
		});
		this.getWeather();
	};

	getWeather = async () => {
		const api_call__hourly = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state
				.longitude}&appid=${Weather_API_KEY}&units=imperial`
		);
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state
				.longitude}&appid=${Weather_API_KEY}&units=imperial`
		);
		// const dataHourly = await api_call__hourly.json();
		// console.log(data);
		// console.log('Hourly', dataHourly);
		const data = await api_call.json();
		this.setState({
			currentTemp: Math.floor(data.main.temp),
			highTemp: Math.floor(data.main.temp_max),
			lowTemp: Math.floor(data.main.temp_min),
			humidity: data.main.humidity,
			windSpeed: data.wind.speed,
			currentWeatherDesc: data.weather[0].description,
			hourlyTemps: {
				// morning: dataHourly.list[0].main.temp,
				// afternoon: dataHourly.list[1].main.temp,
				// evening: dataHourly.list[2].main.temp,
				// night: dataHourly.list[3].main.temp
			}
		});
	};

	drawTimeline = time => {
		// function drawShape(ctxa, xoff, yoff) {
		// 	let canvas = document.getElementById('timeline');
		// 	let ctx = canvas.getContext('2d');
		// 	ctx.beginPath();
		// 	ctx.moveTo(1 + xoff, 395 + yoff);
		// 	ctx.bezierCurveTo(-14 + xoff, 395 + yoff, 249 + xoff, 267 + yoff, 486 + xoff, 395 + yoff);
		// 	ctx.stroke();
		// }
		return <canvas id="timeline" />;
	};

	render() {
		const currentTownName = (
			<div className="current-town-wrapper">
				<div className="current-conditions">{this.state.currentWeatherDesc}</div>
				<div className="current-town">
					<FontAwesomeIcon icon={faMapMarkedAlt} />
					<span>
						{this.state.townName}, {this.state.stateAbbr}{' '}
					</span>
				</div>
			</div>
		);

		const currentWeatherContainer = (
			<div className="current-weather-wrapper">
				<div className="current-temperature main-item">{this.state.currentTemp}°</div>
				<div className="high-low-container">
					<span className="high-temp">{this.state.highTemp}°F</span>
					<span className="low-temp">{this.state.lowTemp}°F</span>
				</div>
			</div>
		);

		const townSearch = (
			<div className="town-search-section">
				<div className="town-search-wrapper">
					<WeatherSearchBar
						updateTownDetails={this.updateTownDetails}
						getCurrentLocation={this.getCurrentLocation}
					/>
				</div>
				<div className="current-date-wrapper">
					<span>Tuesday</span>
					<span>September 15th</span>
				</div>
			</div>
		);

		const currentWeatherGraphic = (
			<div className="current-weather-graphic-wrapper">
				<div className="current-town">
					<FontAwesomeIcon icon={faCloudMoonRain} />
				</div>
			</div>
		);

		const DetailItem = props => {
			return (
				<div className="detail-wrapper">
					<span id="humidity" className="weather-detail__icon">
						<FontAwesomeIcon icon={faWater} />
					</span>
					<span className="weather-detail__title">{props.name}</span>
					<span className="weather-detail__value"> {props.value}</span>
				</div>
			);
		};
		return (
			<div className="weather-project-wrapper">
				{townSearch}
				<section className="current-weather-section">
					<div className="search--current-weather--column">
						{currentTownName}
						{currentWeatherContainer}
					</div>
					<div className="todays-details-container">
						<div className="todays-weather__chart">
							<SunriseSunsetTimeline />
							<div className="sunrise-sunset-wrapper">
								<span className="sunrise">6:20 AM</span>
								<span className="sunset">7:50 PM</span>
							</div>
						</div>
						<div className="details-container">
							<DetailItem name="Humidity" value={this.state.humidity} />
							<DetailItem name="Windspeed" value={this.state.windSpeed} />
							<DetailItem name="Town Name" value={this.state.townName} />
							<DetailItem name="Humidity" value={this.state.humidity} />
						</div>
					</div>
				</section>
				<section className="weeks-weather-section">
					<h1>This week's weather</h1>
				</section>
			</div>
		);
	}
}

export default Weather;
