import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudSunRain,
	faScroll,
	faPencilAlt,
	faChartBar,
	faMoneyBill,
	faMobileAlt,
	faTabletAlt,
	faDesktop,
	faFrown,
	faArrowUp,
	faHamburger,
	faGamepad
} from '@fortawesome/free-solid-svg-icons';
import Form from './projects/form/form';
import PriceCalc from './projects/priceCalc/priceCalc';
import DrawingBoard from './projects/drawingBoard/drawingBoard';
import Project from './projects/project/project';
import Menu from './projects/menu/menu';
import './projects.css';

class Projects extends Component {
	state = {
		isMobile: null,
		currentProject: '',
		currentProjectName: 'Choose a project above!',
		deviceType: 'iphone-container'
	};

	checkIfMobile = (a) => {
		if (window.innerWidth < 500) {
			this.setState({
				isMobile: true
			});
			// console.log(this.state.isMobile);
			// return true;
		} else {
			this.setState({ isMobile: false });
			// console.log(this.state.isMobile);
			// return false;
		}
	};

	componentDidMount() {
		this.checkIfMobile();
		window.addEventListener('resize', this.checkIfMobile);
	}

	componentWillMount() {
		this.checkIfMobile();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.checkIfMobile);
	}

	// checkIfMobile = () => {
	// 	if (window.innerWidth < 500) {
	// 		this.setState({ deviceType: 'iphone-container' });
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	handleFormChange = () => {
		this.setState({
			currentProject: <Form />,
			currentProjectName: 'Form'
		});
	};

	handleWeatherChange = () => {
		this.setState({
			currentProject: <DrawingBoard />,
			currentProjectName: 'Drawing Board'
		});
	};

	handlePriceCalcChange = () => {
		this.setState({
			currentProject: <PriceCalc />,
			currentProjectName: 'Price Calculator'
		});
	};

	handleMenuChange = () => {
		this.setState({
			currentProject: <Menu />,
			currentProjectName: 'Menu'
		});
	};

	handleProjectChange() {
		return <div className="project-screen-cont fade-in">{this.state.currentProject}</div>;
	}

	handleCheckActive = (area, stateName) => {
		if (area === 'project') {
			return this.state.currentProjectName === stateName ? 'project-is-active' : '';
		} else if (area === 'device') return this.state.deviceType === stateName ? 'navigation-option--active' : '';
	};

	handleDeviceChange = (e) => {
		let device = e.currentTarget.getAttribute('value');
		if (this.state.isMobile === true) {
			if (device === 'desktop-container' || device === 'ipad-container') {
				document.getElementById('mobile-tooltip').style.display = 'initial';
				setTimeout(function() {
					document.getElementById('mobile-tooltip').style.display = 'none';
				}, 3000);
			}
		}
		if (this.state.isMobile === false) {
			this.setState({ deviceType: device });
			document.getElementById('device-project-container').className = device;
		}
	};

	render() {
		const emptyPlaceholder = (
			<div className="placeholder">
				<span className="placeholder-icon flex-center-vert-hor">
					<FontAwesomeIcon icon={faFrown} />
				</span>
				<span className="placeholder-text">No project selected </span>
			</div>
		);

		return (
			<Fragment>
				<div className="interior-body">
					<div name="projects" id="projects" className="screen-section-container">
						<h1 className="screen-section-container-title">Projects</h1>
						<p className="screen-section-container-desc">
							Here's a few small projects I've been working on recently. None of them are fully complete,
							consider this more of a playground where I can work on various projects.
						</p>
						<div className="project-btn-container">
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleDrawingBoardChange}
								projectName={'Whiteboard'}
								icon={faPencilAlt}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleFormChange}
								projectName={'Form'}
								icon={faScroll}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleDashboardChange}
								projectName={'Dashboard'}
								icon={faChartBar}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleWeatherAppChange}
								projectName={'Weather'}
								icon={faCloudSunRain}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleWebsiteChange}
								projectName={'Website'}
								icon={faDesktop}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleGameChange}
								projectName={'Game'}
								icon={faGamepad}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleMenuChange}
								projectName={'Menu'}
								icon={faHamburger}
								state={this.state.currentProject}
							/>
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handlePriceCalcChange}
								projectName={'Price Calculator'}
								icon={faMoneyBill}
								state={this.state.currentProject}
							/>
						</div>
					</div>
				</div>
				<div id="devices" className="wrapper">
					<div className="navigation">
						<div className="device-orientation-container">
							<div className="navigation-title"> {this.state.currentProjectName}</div>
							<div className="device-orientation-btns-container">
								<div id="mobile-tooltip" className="mobile-tooltip">
									Only for desktop use
								</div>
								<div
									onClick={(e) => this.handleDeviceChange(e)}
									id="iphone-device-button"
									value="iphone-container"
									className={`navigation-option  ${this.handleCheckActive(
										'device',
										'iphone-container'
									)}`}
								>
									<FontAwesomeIcon icon={faMobileAlt} />
								</div>
								<div
									onClick={(e) => this.handleDeviceChange(e)}
									id="ipad-device-button"
									value="ipad-container"
									className={`navigation-option tooltip desktop-only-icon ${this.handleCheckActive(
										'device',
										'ipad-container'
									)}`}
								>
									<FontAwesomeIcon icon={faTabletAlt} />
								</div>
								<div
									onClick={(e) => this.handleDeviceChange(e)}
									id="desktop-device-button"
									value="desktop-container"
									className={`navigation-option desktop-only-icon ${this.handleCheckActive(
										'device',
										'desktop-container'
									)}`}
								>
									<FontAwesomeIcon icon={faDesktop} />
								</div>
							</div>
						</div>
					</div>
					<div className="project-holder">
						<div id="device-project-container" className={this.state.deviceType}>
							{this.state.currentProject === '' ? emptyPlaceholder : ''}
							{this.handleProjectChange()}
						</div>
						<a href="#projects" className="return-arrow">
							<FontAwesomeIcon icon={faArrowUp} />
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Projects;
