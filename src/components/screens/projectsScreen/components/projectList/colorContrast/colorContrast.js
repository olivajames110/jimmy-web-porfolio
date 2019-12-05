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

	//<----- For testing purposes___handles changing foreground color
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
			this.handleAdaColorRatio()
			// this.handleCheckIfValid()
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
			this.handleAdaColorRatio()
		);
	};

	// ----->

	handleCheckForegroundColor = () => {
		//In page builder, the color of the text box
		return this.state.colors.foregroundColor;
	};

	//Targets foreground color ID
	//Checks parent background color. If no color, keep checking parent color until color found
	//If color found, return that color,
	handleCheckBackgroundColor = () => {
		let foregroundEl = document.getElementById('foreground-color');
		let currentEl = foregroundEl;
		let bgColor;
		let checkColor = function() {
			let parentEl = currentEl.parentElement;
			currentEl = parentEl;
			let parentElStyles = window.getComputedStyle(parentEl);
			let parentbgColor = parentElStyles.backgroundColor;
			if (parentbgColor === 'rgba(0, 0, 0, 0)') {
				console.log('No color found, go to parent: ' + parentElStyles.backgroundColor);
				checkColor();
			} else {
				console.log('BG Color found: ' + parentElStyles.backgroundColor + ' , STOP');
				bgColor = parentElStyles.backgroundColor.toString();
			}
		};
		if (!bgColor) {
			checkColor();
		}
		return bgColor;
	};

	handleCheckIfValid = colors => {
		let options = {
			compact: true,
			threshold: 0
		};
		var result = colorable(colors, options);
		// console.log(result);
		let contrastRatio = Math.round(result[0].combinations[0].contrast * 100) / 100;
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
	};

	handleAdaColorRatio = () => {
		let colors = {
			foregroundColor: null,
			backgroundColor: null
		};

		colors.foregroundColor = this.handleCheckForegroundColor();
		colors.backgroundColor = this.handleCheckBackgroundColor();
		this.handleCheckIfValid(colors);
	};

	render() {
		const result = (
			<div className="result">
				The Color
				<span style={{ color: this.state.colors.foregroundColor }}>{this.state.colors.foregroundColor}</span>
				<span
					class="pass-fail"
					style={this.state.passFail ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
				>
					{this.state.passFail ? ' Passes ' : ' Fails '}
				</span>
				at a AA rating at a ratio of{this.state.contrastRatio}
			</div>
		);
		return (
			<div className="root-menu-container">
				<h1>Color Contast Checker</h1>
				<SketchPicker
					color={this.state.color}
					onChange={this.handleChange}
					onChangeComplete={this.handleChangeComplete}
				/>

				<div className="test-area">
					{result}
					<div className="first-child">
						<div className="second-child">
							<div className="third-child">
								<div className="fourth-child">
									<div className="fifth-child">
										<span
											id="foreground-color"
											// className="current-color"
											style={{ color: this.state.colors.foregroundColor }}
											className="text-area"
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
											gravida mi. Aenean efficitur dignissim nulla, sed venenatis erat gravida
											nec. Aliquam accumsan quis dui et posuere. Sed viverra ultrices odio
											facilisis congue. Nam at cursus elit. Fusce ultricies gravida neque. Aenean
											justo elit, lacinia eget augue vitae, tempor maximus ante. Etiam vehicula
											justo eu risus posuere, sit amet lacinia quam fringilla.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ColorContrast;
