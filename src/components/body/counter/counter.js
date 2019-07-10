import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
	state = {
		count: 0,
		imgUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted.jpg',
		imgWidth: 100
	};

	handleIncrease = () => {
		console.log('increase');
		this.setState({
			count: this.state.count + 1
		});
	};

	handleDecrease = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	handleImg = () => {
		const imgList = [
			'https://cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted.jpg',
			'https://media.giphy.com/media/pRQmCJ4pMXftS/giphy.gif',
			'https://i.ytimg.com/vi/dTp72sci8CA/maxresdefault.jpg',
			'https://www.futurity.org/wp/wp-content/uploads/2015/11/alaska_mountains_1170.jpg',
			'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
		];

		this.setState({
			imgUrl: imgList[Math.floor(Math.random() * imgList.length)]
		});
	};

	render() {
		return (
			<div className="counter-cont">
				<img width={this.state.imgWidth + '%'} alt="img" src={this.state.imgUrl} />
				<div className="counter-body-cont">
					<span>{this.state.count}</span>
				</div>
				<div className="counter-btn-cont">
					<button onClick={this.handleDecrease}>Down</button>
					<button onClick={this.handleImg}>Change Image</button>
					<button onClick={this.handleIncrease}>Up</button>
				</div>
			</div>
		);
	}
}

export default Counter;
