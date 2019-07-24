import React, { Component, Fragment } from 'react';
import './homeScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
	state = {
		isInDrawingMode : false
	};

	handleDrawingMode = () => {
		this.setState({
			isInDrawingMode : !this.state.isInDrawingMode
		});
	};

	render() {
		return (
			<Fragment>
				<div className="home-img">
					<h1>My Name Is Jimmy Oliva</h1>
					<span>Welcome to my website. I hope to one day be a front-end developer.</span>
					<button>
						SEE MY PROJECTS <FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</Fragment>
		);
	}
}

// const drawingExample = () => {
// 	return (
// 		<div id="welcome" className="section">
// 			{this.state.isInDrawingMode
// 				? <Drawing/>
// 				: ''}
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
// 								fontWeight: 'bold',
// 								marginTop: '30px'
// 							}}
// 								className="quote-authors">
// 								- Jimmy Oliva
// 							</span>
// 						</div>
// 					</div>
// 					<div className="marker" onClick={this.handleDrawingMode}>
// 						<Marker name="Marker"/>
// 					</div>
// 					<div className="eraser">
// 						<Marker name="Eraser"/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default Home;
