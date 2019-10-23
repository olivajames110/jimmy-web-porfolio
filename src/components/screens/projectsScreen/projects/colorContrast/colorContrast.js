import React, { Component } from 'react';
import './css/colorContrast.css';
import { SketchPicker } from 'react-color';
let colorable = require('colorable');

class ColorContrast extends Component {
	state = {
		colors: {
			foregroundColor: 'black',
			backgroundColor: 'black'
		},
		color: '#000001',
		passFail: 'The Color white passes at a AA rating at a ratio of 21',
		contrastRatio: null
	};
	componentDidMount() {
		this.handleCheckIfValid();
	}

	handleChange = color => {
		console.log('Hex color = ' + color.hex);
		this.setState(
			{
				color: color.hex,
				colors: {
					foregroundColor: color.hex,
					backgroundColor: 'black'
				}
			},
			this.handleCheckIfValid()
		);
	};

	handleChangeComplete = color => {
		this.setState(
			{
				color: color.hex,
				colors: {
					foregroundColor: color.hex,
					backgroundColor: 'black'
				}
			},
			this.handleCheckIfValid()
		);
	};

	handleChangeBG = color => {
		console.log('Hex color = ' + color.hex);
		this.setState(
			{
				color: color.hex,
				colors: {
					foregroundColor: color.hex,
					backgroundColor: 'black'
				}
			},
			this.handleCheckIfValid()
		);
	};

	handleChangeCompleteBG = color => {
		this.setState(
			{
				color: color.hex,
				colors: {
					backgroundColor: color.hex
					// backgroundColor: 'black'
				}
			},
			this.handleCheckIfValid()
		);
	};

	handleCheckBackground = () => {
		let foregroundEl = document.getElementById('foreground-color');
		let currentEl = foregroundEl;

		let checkColor = function() {
			let parentEl = currentEl.parentElement;
			currentEl = parentEl;
			let parentElStyles = window.getComputedStyle(parentEl);
			let parentbgColor = parentElStyles.backgroundColor;
			console.log('Parent BG:' + parentbgColor);
			if (parentbgColor === 'rgba(0, 0, 0, 0)') {
				console.log('Color is TRANSPARENT, Go ^^^^^: ' + parentElStyles.backgroundColor);
				checkColor();
			} else {
				console.log('Color is ' + parentElStyles.backgroundColor + ' IS NOT transparent, STOP');
			}
		};
		checkColor();
	};

	handleCheckBackgroundBG = () => {
		let foregroundEl = document.getElementById('background');
		let currentEl = foregroundEl;

		let checkColor = function() {
			let parentEl = currentEl.parentElement;
			currentEl = parentEl;
			let parentElStyles = window.getComputedStyle(parentEl);
			let parentbgColor = parentElStyles.backgroundColor;
			console.log('Parent BG:' + parentbgColor);
			if (parentbgColor === 'rgba(0, 0, 0, 0)') {
				console.log('Color is TRANSPARENT, Go ^^^^^: ' + parentElStyles.backgroundColor);
				checkColor();
			} else {
				console.log('Color is ' + parentElStyles.backgroundColor + ' IS NOT transparent, STOP');
			}
		};
		checkColor();
	};

	handleCheckIfValid = () => {
		var result = colorable(this.state.colors, {
			compact: true,
			threshold: 0
		});
		// console.log(result);
		let contrastRatio = result[0].combinations[0].contrast;
		if (contrastRatio < 4.5) {
			this.setState({
				passFail: false,
				contrastRatio: contrastRatio
			});
		} else {
			this.setState({
				passFail: true,
				contrastRatio: contrastRatio
			});
		}
		this.handleCheckBackground();
	};

	// handleAdaColorRation = () => {
	// 	this.handleCheckForegroundColor();
	// 	this.handleCheckBackgroundColor();
	// 	this.handleCheckIfValid();
	// }

	render() {
		return (
			<button className="root-menu-container">
				<h1>Color Contast Checker</h1>
				<SketchPicker
					color={this.state.color}
					onChange={this.handleChange}
					onChangeComplete={this.handleChangeComplete}
				/>

				<div className="input-container">
					<div className="empty-container">
						<div className="foreground-color">
							<span className="color-title">Foreground Color</span>
							<input
								onChange={this.handleColorUpdate}
								id="foreground-value"
								placeholder="Enter foreground color"
								type="text"
							/>
							<div
								id="foreground"
								style={{ backgroundColor: this.state.color }}
								className="color-sample"
							/>
							<span className="current-color">{this.state.color}</span>
						</div>

						<div className="background-color">
							<span className="color-title">Background Color</span>
							<input id="background-value" placeholder="Enter background color" type="text" />
							<div
								id="background"
								style={{ backgroundColor: this.state.colors.backgroundColor }}
								className="color-sample"
							/>
							<span className="current-color">{this.state.colors.backgroundColor}</span>
						</div>
						<div className="result">
							The Color
							<span
								id="foreground-color"
								className="current-color"
								style={{ color: this.state.colors.foregroundColor }}
							>
								{this.state.colors.foregroundColor}
							</span>
							<span
								class="pass-fail"
								style={this.state.passFail ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
							>
								{this.state.passFail ? ' Passes ' : ' Fails '}
							</span>
							at a AA rating at a ratio of{this.state.contrastRatio}
						</div>
					</div>
				</div>
				<div onClick={this.handleCheckIfValid} className="result-container" />
				<button onClick={this.handleCheckIfValid}>Check</button>
			</button>
		);
	}
}

export default ColorContrast;
