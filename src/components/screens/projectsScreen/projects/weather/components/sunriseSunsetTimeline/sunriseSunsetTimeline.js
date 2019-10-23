import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
	faSearchLocation,
	faLocationArrow,
	faMapPin,
	faMapMarker,
	faMapMarked,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

import './sunriseSunsetTimeline.css';

class sunriseSunsetTimeline extends Component {
	state = {
		parentWidth: '',
		canvasHeight: 100
	};

	componentDidMount() {
		const canvas = this.refs.timeline;
		const ctx = canvas.getContext('2d');
		this.setState(
			{
				parentWidth: document.querySelector('.todays-weather__chart').offsetWidth
			},
			() => {
				this.drawTimeline();
			}
		);
	}

	drawTimeline = () => {
		const { parentWidth, canvasHeight } = this.state;
		const canvas = this.refs.timeline;
		const ctx = canvas.getContext('2d');
		const widthOffsetAmount = 20;
		ctx.translate(0, canvas.height);
		ctx.scale(1, -1);
		ctx.moveTo(widthOffsetAmount, 0);
		// ctx.quadraticCurveTo(parentWidth / 2, 140, parentWidth - widthOffsetAmount, 0);
		ctx.bezierCurveTo(
			widthOffsetAmount,
			100,
			parentWidth - widthOffsetAmount,
			100,
			parentWidth - widthOffsetAmount,
			0
		);
		ctx.strokeStyle = 'white';
		ctx.stroke();
	};

	render() {
		return <canvas ref="timeline" id="timeline" width={this.state.parentWidth} height={this.state.canvasHeight} />;
	}
}

export default sunriseSunsetTimeline;
