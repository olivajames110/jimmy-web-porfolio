import React, { Component } from 'react';
import './slider.css';

export default class Slider extends Component {
	render() {
		const fill = this.props.dynamicNumber / this.props.maxAmt * 100;
		const { title, minAmt, maxAmt, defaultValue, numberValueDesc, dynamicNumber, handleNumberUpdate } = this.props;
		// const ex = `'linear-gradient(90deg, rgb(12, 78, 126) 64%, rgb(215, 220, 223) 64.1%)'`;
		const ex = `linear-gradient(90deg, rgb(12, 78, 126) ${fill}%, rgb(215, 220, 223) ${fill}%)`;

		return (
			<div className="range-slider-wrapper">
				<div className="upper-portion">
					<div className="range-title">
						<span>{title}</span>
						<span onChange={this.updateFillAmt} className="dynamic-number-value">
							${dynamicNumber}
						</span>{' '}
						<span className="dynamic-number-value-desc">{numberValueDesc}</span>
					</div>
					{/* <span id="rs-bullet--price" class="rs-label" style="left: 43.61%;">$98</span> */}
				</div>
				<div className="input-slider-portion____">
					<input
						onChange={handleNumberUpdate}
						className="range-slider__range"
						type="range"
						defaultValue={defaultValue}
						min={minAmt}
						max={maxAmt}
						style={{
							background: ex
						}}
					/>

					<div className="box-minmax-key">
						<span>${minAmt}</span>
						<span>${maxAmt}</span>
					</div>
				</div>
			</div>
		);
	}
}
