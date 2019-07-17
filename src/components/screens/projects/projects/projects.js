// import React, { Component, Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faCloudSunRain,
// 	faScroll,
// 	faPencilAlt,
// 	faChartBar,
// 	faMoneyBill,
// 	faMobileAlt,
// 	faTabletAlt,
// 	faDesktop,
// 	faFrown,
// 	faArrowUp,
// 	faHamburger,
// 	faGamepad
// } from '@fortawesome/free-solid-svg-icons';
// import Form from './form/form';
// import PriceCalc from './priceCalc/priceCalc';
// import DrawingBoard from './drawingBoard/drawingBoard';
// import Project from './project/project';
// import Menu from './menu/menu';
// import './projects.css';

// class Projects extends Component {
// 	state = {
// 		currentProject: '',
// 		currentProjectName: 'Choose a project above!',
// 		deviceType: 'iphone-container'
// 	};

// 	checkIfMobile = () => {
// 		if (window.innerWidth < 500) {
// 			this.setState({ deviceType: 'iphone-container' });
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	};

// 	handleFormChange = () => {
// 		this.setState({
// 			currentProject: <Form />,
// 			currentProjectName: 'Form'
// 		});
// 	};

// 	handleWeatherChange = () => {
// 		this.setState({
// 			currentProject: <DrawingBoard />,
// 			currentProjectName: 'Drawing Board'
// 		});
// 	};

// 	handlePriceCalcChange = () => {
// 		this.setState({
// 			currentProject: <PriceCalc />,
// 			currentProjectName: 'Price Calculator'
// 		});
// 	};

// 	handleMenuChange = () => {
// 		this.setState({
// 			currentProject: <Menu />,
// 			currentProjectName: 'Menu'
// 		});
// 	};

// 	handleProjectChange() {
// 		return <div className="project-screen-cont fade-in">{this.state.currentProject}</div>;
// 	}

// 	handleCheckActive = (area, stateName) => {
// 		if (area === 'project') {
// 			return this.state.currentProjectName === stateName ? 'project-is-active' : '';
// 		} else if (area === 'device') return this.state.deviceType === stateName ? 'navigation-option--active' : '';
// 	};

// 	handleDeviceChange = (e) => {
// 		let device = e.currentTarget.getAttribute('value');
// 		this.setState({ deviceType: device });
// 		if (device === 'desktop-container' || device === 'ipad-container') {
// 			let check = this.checkIfMobile();
// 			console.log(check);
// 			// document.getElementById('mobile-tooltip').className = 'mobile-tooltip';
// 			document.getElementById('mobile-tooltip').style.display = 'initial';
// 			setTimeout(function() {
// 				document.getElementById('mobile-tooltip').style.display = 'none';
// 			}, 3000);
// 		}
// 		document.getElementById('device-project-container').className = device;
// 	};

// 	render() {
// 		const emptyPlaceholder = (
// 			<div className="placeholder">
// 				<span className="placeholder-icon flex-center-vert-hor">
// 					<FontAwesomeIcon icon={faFrown} />
// 				</span>
// 				<span className="placeholder-text">No project selected </span>
// 			</div>
// 		);

// 		return (
// 			<Fragment>
// 				<div className="interior-body">
// 					<div name="projects" id="projects" className="screen-section-container">
// 						<h1 className="screen-section-container-title">Projects</h1>
// 						<p className="screen-section-container-desc">
// 							Here's a few small projects I've been working on recently. None of them are fully complete,
// 							this is more of a playground where I can work on projects. Enjoy!
// 						</p>
// 						<div className="project-btn-container">
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleDrawingBoardChange}
// 								projectName={'Drawing Board'}
// 								icon={faPencilAlt}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleFormChange}
// 								projectName={'Form'}
// 								icon={faScroll}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleDashboardChange}
// 								projectName={'Dashboard'}
// 								icon={faChartBar}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleWeatherAppChange}
// 								projectName={'Weather App'}
// 								icon={faCloudSunRain}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleWebsiteChange}
// 								projectName={'Website'}
// 								icon={faDesktop}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleGameChange}
// 								projectName={'Game'}
// 								icon={faGamepad}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handleMenuChange}
// 								projectName={'Menu'}
// 								icon={faHamburger}
// 								state={this.state.currentProject}
// 							/>
// 							<Project
// 								handleCheckActive={this.handleCheckActive}
// 								handlePriceCalcChange={this.handlePriceCalcChange}
// 								projectName={'Price Calculator'}
// 								icon={faMoneyBill}
// 								state={this.state.currentProject}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				<div id="devices" className="wrapper">
// 					<div className="navigation">
// 						<div className="device-orientation-container">
// 							<div className="navigation-title"> {this.state.currentProjectName}</div>
// 							<div className="device-orientation-btns-container">
// 								<div id="mobile-tooltip" className="mobile-tooltip">
// 									Only for desktop use
// 								</div>
// 								<div
// 									onClick={(e) => this.handleDeviceChange(e)}
// 									id="iphone-device-button"
// 									value="iphone-container"
// 									className={`navigation-option  ${this.handleCheckActive(
// 										'device',
// 										'iphone-container'
// 									)}`}
// 								>
// 									<FontAwesomeIcon icon={faMobileAlt} />
// 								</div>
// 								<div
// 									onClick={(e) => this.handleDeviceChange(e)}
// 									id="ipad-device-button"
// 									value="ipad-container"
// 									className={`navigation-option tooltip desktop-only-icon ${this.handleCheckActive(
// 										'device',
// 										'ipad-container'
// 									)}`}
// 								>
// 									<FontAwesomeIcon icon={faTabletAlt} />
// 								</div>
// 								<div
// 									onClick={(e) => this.handleDeviceChange(e)}
// 									id="desktop-device-button"
// 									value="desktop-container"
// 									className={`navigation-option desktop-only-icon ${this.handleCheckActive(
// 										'device',
// 										'desktop-container'
// 									)}`}
// 								>
// 									<FontAwesomeIcon icon={faDesktop} />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="project-holder">
// 						<div id="device-project-container" className={this.state.deviceType}>
// 							{this.state.currentProject === '' ? emptyPlaceholder : ''}
// 							{this.handleProjectChange()}
// 						</div>
// 						<a href="#projects" className="return-arrow">
// 							<FontAwesomeIcon icon={faArrowUp} />
// 						</a>
// 					</div>
// 				</div>
// 			</Fragment>
// 		);
// 	}
// }

// export default Projects;
