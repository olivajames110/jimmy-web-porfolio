import React, { Component } from 'react';
import WeatherSearchBar from './components/searchBar/searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain, faWind, faCloudRain, faWater, faEyeDropper } from '@fortawesome/free-solid-svg-icons';
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
		this.getWeather();
	}

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
		const data = await api_call.json();
		const dataHourly = await api_call__hourly.json();
		console.log(data);
		console.log('Hourly', dataHourly);
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

	getWeatherSymbol = weather => {};

	render() {
		return (
			<div className="weather-project-wrapper">
				<section className="section-header">
					<div className="current-weather-container">
						<div className="current-weather-wrapper">
							<div className="temperatures">
								<div className="current-temperature main-item">{this.state.currentTemp}°</div>
								<div className="high-low-container">
									<span className="high-temp">{this.state.highTemp}</span>
									<span className="low-temp">{this.state.lowTemp}</span>
								</div>
							</div>
							<div className="current-conditions">Conditions</div>
						</div>
						<div className="town-search-wrapper">
							<WeatherSearchBar updateTownDetails={this.updateTownDetails} />
							{this.state.townName ? (
								<span className="current-town">
									The weather for {this.state.townName}, {this.state.stateAbbr}{' '}
								</span>
							) : (
								''
							)}
						</div>
						<div className="current-weather-graphic-wrapper">
							<div className="current-town main-item">
								<FontAwesomeIcon icon={faCloudMoonRain} />
							</div>
						</div>
					</div>
				</section>
				<section className="section-body">
					<div className="section-body-container">
						<TimePeriodDailyGraph
							highTemp={this.state.highTemp}
							lowTemp={this.state.lowTemp}
							morning={this.state.lowTemp + 2}
							evening={this.state.highTemp}
							afternoon={this.state.highTemp - 2}
							night={this.state.lowTemp}
						/>
					</div>
				</section>
				<section className="todays-details">
					<div className="card-container">
						<div className="card-title">Today's Weather</div>
						<div className="card-details-row">
							<div className="detail-wrapper">
								<span id="wind-speed" className="weather-detail__icon">
									<FontAwesomeIcon icon={faWind} />
								</span>
								<span className="weather-detail__title">Wind Speed:</span>
								<span className="weather-detail__value"> {this.state.windSpeed} mph</span>
							</div>
							<div className="detail-wrapper">
								<span id="humidity" className="weather-detail__icon">
									<FontAwesomeIcon icon={faWater} />
								</span>
								<span className="weather-detail__title">Humidity</span>
								<span className="weather-detail__value"> {this.state.humidity}%</span>
							</div>
							<div className="detail-wrapper">
								<span id="weather-desc" className="weather-detail__icon">
									<FontAwesomeIcon icon={faCloudRain} />
								</span>
								<span className="weather-detail__title">Weather Description</span>
								<span className="weather-detail__value">{this.state.currentWeatherDesc}</span>
							</div>
						</div>
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
