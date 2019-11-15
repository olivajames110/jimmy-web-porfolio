import React, { Component } from 'react';
import './css/languageHistory.css';
import priceCalcPreview from '../../../../images/priceCalcPreview.png';
export default class languageHistory extends Component {
	componentDidMount() {
		console.log(priceCalcPreview);
		let canvas = document.getElementById('languageHistory');
		// canvas.width = document.querySelector('.skill-container').width;
		let c = canvas.getContext('2d');
		let cWidth = canvas.width;
		let cHeight = canvas.height;
		let forkDistance = 80;

		//specific points
		let middlePoint = cWidth / 2;
		let bottomPoint = cHeight;

		//make the image
		function makeImage(url, x, y, w, h) {
			let img = new Image();
			img.src = `${url}`;
			c.drawImage(img, x, y, w, h);
		}

		// list of images
		let imgHTML = makeImage('https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png', 10, 50, 60, 60);
		let imgCSS = makeImage(
			'https://www.pnglot.com/pngfile/detail/504-5048887_cascading-style-sheets-logo-html-blue-text-png.png',
			50,
			50,
			60,
			60
		);
		let imgJavascript = makeImage(
			'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png',
			50,
			50,
			60,
			60
		);
		let imgReact = makeImage(
			'https://digitalmarketing.blob.core.windows.net/5215/images/items/image604879.png',
			50,
			50,
			60,
			60
		);
		let imgNode = makeImage(
			'https://digitalmarketing.blob.core.windows.net/5215/images/items/image604880.png',
			50,
			50,
			60,
			60
		);
		let imgSCSS = makeImage(
			'https://digitalmarketing.blob.core.windows.net/5215/images/items/image604877.png',
			50,
			50,
			60,
			60
		);
		let imgPhotoshop = makeImage('https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg', middlePoint - 25, bottomPoint - 50, 60, 60);
		// let imgAI = makeImage(
		// 	'https://pbs.twimg.com/profile_images/879913584456642560/BpvwVn-2_400x400.jpg',
		// 	50,
		// 	50,
		// 	60,
		// 	60
		// );
		let imgXD = makeImage(
			'https://digitalmarketing.blob.core.windows.net/5215/images/items/image604878.png',
			50,
			50,
			60,
			60
		);

		c.fillStyle = '#FF0000';
		c.beginPath();
		c.moveTo(middlePoint, bottomPoint);
		c.lineTo(middlePoint, 0);
		c.stroke();

		c.beginPath();
		c.moveTo(middlePoint - forkDistance, bottomPoint - 100);
		c.lineTo(middlePoint - forkDistance, bottomPoint - 200);
		c.stroke();
		c.fillRect(middlePoint - 25, bottomPoint - 50, 50, 50);
	}

	render() {
		return <canvas id="languageHistory" width="400" height="400" />;
	}
}
