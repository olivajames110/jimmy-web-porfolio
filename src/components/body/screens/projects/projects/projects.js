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
	faFrown
} from '@fortawesome/free-solid-svg-icons';
import Form from '../form/form';
import PriceCalc from '../priceCalc/priceCalc';
import Home from '../../home/home';
import Project from './project/project';
import './projects.css';

class Projects extends Component {
	state = {
		currentProject: '',
		currentProjectName: 'Choose a project above!',
		deviceType: 'desktop-container'
	};

	handleFormChange = () => {
		this.setState({
			currentProject: <Form />,
			currentProjectName: 'Form'
		});
	};

	handleWeatherChange = () => {
		this.setState({
			currentProject: <Home />,
			currentProjectName: 'Drawing Board'
		});
	};

	handlePriceCalcChange = () => {
		this.setState({
			currentProject: <PriceCalc />,
			currentProjectName: 'Price Calculator'
		});
	};

	handleProjectChange() {
		return <div className="project-screen-cont fade-in">{this.state.currentProject}</div>;
	}

	handleCheckActive = (area, stateName) => {
		if (area === 'project') {
			console.log(stateName);
			console.log(this.state.currentProjectName);
			return this.state.currentProjectName == stateName ? 'project-is-active' : '';
		} else if (area == 'device') return this.state.deviceType == stateName ? 'navigation-option--active' : '';
	};

	handleDeviceChange = (e) => {
		console.log(e.currentTarget.getAttribute('value'));
		let device = e.currentTarget.getAttribute('value');
		console.log(device);
		this.setState({ deviceType: device });
		document.getElementById('device-project-container').className = device;
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
					<div id="projects" className="screen-section-container">
						<h1 className="screen-section-container-title">Projects</h1>
						<p className="screen-section-container-desc">
							Here are a few examples of some small projects that I have been working on for fun. Please
							don't judge, none of them are fully complete, this is more of a playground where I can work
							and experiment with them. Enjoy!
						</p>
						<div className="project-btn-container">
							<Project
								handleCheckActive={this.handleCheckActive}
								handlePriceCalcChange={this.handleDrawingBoardChange}
								projectName={'Drawing Board'}
								icon={faMoneyBill}
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
								projectName={'Weather App'}
								icon={faCloudSunRain}
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

				<div className="wrapper">
					<div className="navigation">
						<div className="device-orientation-container">
							<div className="navigation-title"> {this.state.currentProjectName}</div>
							<div className="device-orientation-btns-container">
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
									className={`navigation-option  ${this.handleCheckActive(
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
									className={`navigation-option  ${this.handleCheckActive(
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
						<div id="device-project-container" className="desktop-container">
							{this.state.currentProject == '' ? emptyPlaceholder : ''}
							{this.handleProjectChange()}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Projects;
