import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './css/timePeriodDailyGraph';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TimePeriodDailyGraph extends Component {
	getFullDate = () => {
		let d = new Date();

		let weekday = new Array(7);
		weekday[0] = 'Sunday';
		weekday[1] = 'Monday';
		weekday[2] = 'Tuesday';
		weekday[3] = 'Wednesday';
		weekday[4] = 'Thursday';
		weekday[5] = 'Friday';
		weekday[6] = 'Saturday';
		let dayOfWeek = weekday[d.getDay()];

		var monthArray = new Array(12);
		monthArray[0] = 'January';
		monthArray[1] = 'February';
		monthArray[2] = 'March';
		monthArray[3] = 'April';
		monthArray[4] = 'May';
		monthArray[5] = 'June';
		monthArray[6] = 'July';
		monthArray[7] = 'August';
		monthArray[8] = 'September';
		monthArray[9] = 'October';
		monthArray[10] = 'November';
		monthArray[11] = 'December';

		let month = monthArray[d.getMonth()];
		let dayOfMonth = d.getDate();

		return `${dayOfWeek}, ${month} ${dayOfMonth}`;
	};
	render() {
		const options = {
			backgroundColor: 'white',
			// backgroundColor: "transparent",
			title: {
				text: this.getFullDate(),
				fontSize: 50,
				fontFamily: 'var(--body)'
			},
			axisX: {
				tickColor: 'transparent',
				labelFontSize: 14,
				labelFontColor: ' #7a78788e',
				lineColor: 'rgba(0,0,0,0)',
				// gridColor: '#f2f2f2',
				gridColor: 'rgba(122, 120, 120, 0.21176470588235294)',
				gridThickness: 1,
				interval: 1,
				minimum: 0,
				maximum: 4
				// interlacedColor: '#f2f2f2',
				// labelFormatter: function() {
				// 	return ' ';
				// }
			},
			axisY: {
				gridColor: 'transparent',
				tickColor: 'transparent',
				suffix: '°',
				labelFontSize: 14,
				labelFontColor: ' #7a78788e',
				lineColor: 'rgba(0,0,0,0)',
				minimum: this.props.lowTemp - 1,
				maximum: this.props.highTemp + 1
			},
			data: [
				{
					markerColor: '#046ab4ad',
					lineColor: '#046ab4ad',
					lineThickness: 1,
					fillOpacity: 0.18,
					type: 'splineArea',

					dataPoints: [
						{ label: 'Morning', x: 0.5, y: this.props.morning, indexLabel: this.props.morning.toString() },
						{ label: 'Evening', x: 1.5, y: this.props.evening, indexLabel: this.props.evening.toString() },
						{
							label: 'Afternoon',
							x: 2.5,
							y: this.props.afternoon,
							indexLabel: this.props.afternoon.toString()
						},
						{ label: 'Night', x: 3.5, y: this.props.night, indexLabel: this.props.night.toString() }
					]
				}
			]
		};
		console.log(options);
		return (
			<div className="weather-chart-container">
				<CanvasJSChart
					options={options}
					/* onRef = {ref => this.chart = ref} */
				/>
			</div>
		);
	}
}

export default TimePeriodDailyGraph;
