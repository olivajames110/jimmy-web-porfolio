import React, { Component, Fragment } from 'react';
import './home.css';
import Particles from './particles/particles';
// import Drawing from './drawingBoard/drawingBoard';
// import { Marker } from '../../../../assets/svgs/svgs';

class Home extends Component {
	state = {
		isInDrawingMode: false
	};

	handleDrawingMode = () => {
		this.setState({
			isInDrawingMode: !this.state.isInDrawingMode
		});
	};

	render() {
		return (
			<Fragment>
				<div className="home-img">
					<div id="welcome" className="section">
						<Particles />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Home;

// const drawingExample = () => {
// 	return (
// 		<div id="welcome" className="section">
// 			{this.state.isInDrawingMode ? <Drawing /> : ''}
// 			<div className="whiteboard-container">
// 				<div className="flex-col-center-middle content">
// 					<div className="whiteboard-text">
// 						<span className="quote">
// 							"'You miss 100% of the shots you don't take.{' '}
// 							<span className="quote-authors">- Wayne Gretzky'</span>
// 						</span>
// 						<div className="quote-authors-container">
// 							<span className="quote-authors">- Michael Scott"</span>
// 							<span
// 								style={{
// 									fontWeight: 'bold',
// 									marginTop: '30px'
// 								}}
// 								className="quote-authors"
// 							>
// 								- Jimmy Oliva
// 							</span>
// 						</div>
// 					</div>
// 					<div className="marker" onClick={this.handleDrawingMode}>
// 						<Marker name="Marker" />
// 					</div>
// 					<div className="eraser">
// 						<Marker name="Eraser" />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
