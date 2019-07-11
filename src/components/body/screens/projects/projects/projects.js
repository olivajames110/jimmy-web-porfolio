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
	faDesktop
} from '@fortawesome/free-solid-svg-icons';
import Form from '../form/form';
import PriceCalc from '../priceCalc/priceCalc';
import Home from '../../home/home';
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

	handleChange() {
		return <div className="project-screen-cont fade-in">{this.state.currentProject}</div>;
	}

	handleCheckActive(area, state) {
		if (area == 'project') {
			return this.state.currentProjectName == state ? 'project-is-active' : '';
		} else if (area == 'device') return this.state.deviceType == state ? 'navigation-option--active' : '';
	}

	handleDeviceChange = (e) => {
		console.log(e.currentTarget.getAttribute('value'));
		let device = e.currentTarget.getAttribute('value');
		console.log(device);
		this.setState({ deviceType: device });
		document.getElementById('device-project-container').className = device;
	};

	render() {
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
							<div onClick={this.handleWeatherChange} className="project-btn">
								<div className="project-btn-icon">
									<FontAwesomeIcon icon={faPencilAlt} />
								</div>
								<div className="project-btn-text">Drawing Board</div>
							</div>
							<div
								state={this.state.currentProject}
								onClick={this.handleFormChange}
								className={`project-btn ${this.handleCheckActive('project', 'Form')}`}
							>
								<div className="project-btn-icon" />
								<FontAwesomeIcon icon={faScroll} />
								<div className="project-btn-text">Form</div>
							</div>
							<div className="project-btn">
								<div className="project-btn-icon" />
								<FontAwesomeIcon icon={faChartBar} />
								<div className="project-btn-text">Dashboard</div>
							</div>
							<div className="project-btn">
								<div className="project-btn-icon" />
								<FontAwesomeIcon icon={faCloudSunRain} />
								<div className="project-btn-text">Weather App</div>
							</div>
							<div
								onClick={this.handlePriceCalcChange}
								className={`project-btn ${this.handleCheckActive('project', 'Price Calculator')}`}
							>
								<div className="project-btn-icon" />
								<FontAwesomeIcon icon={faMoneyBill} />
								<div className="project-btn-text">Price Calc</div>
							</div>
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
							{this.handleChange()}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Projects;
