import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudSunRain,
	faScroll,
	faChartBar,
	faMoneyBill,
	faMobileAlt,
	faTabletAlt,
	faDesktop,
	faFrown,
	faHamburger,
	faTimes,
	faHammer,
	faImage,
	faComments,
	faMusic,
	faPalette,
	faCross
} from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../assets/backdrop/backdrop';
import Form from './projects/form/form';
import PriceCalc from './projects/priceCalc/priceCalc';
import Weather from './projects/weather/weather';
import Project from './project/project';
import Menu from './projects/menu/menu';
import Website from './projects/website/website';
import ColorContrast from './projects/colorContrast/colorContrast';
// import priceCalcPreview from '../../images/priceCalcPreview.png';
// import baseballCardPreview from '../../images/images/websitePreview.jpg';
// import websitePreview from '../../images/websitePreview.jpg';
import './projectsScreen.css';

class Projects extends Component {
	state = {
		isMobile: null,
		currentProject: '',
		currentProjectName: 'Choose a project above!',
		currentProjectActive: false,
		deviceType: 'desktop-container',
		projectNavIsOpen: false,
		headerHeight: null
	};

	checkIfMobile = a => {
		if (window.innerWidth < 800) {
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

	getHeaderHeight = () => {
		this.setState({
			headerHeight: document.querySelector('.app-header').offsetHeight
		});
	};

	componentDidMount() {
		this.checkIfMobile();
		this.getHeaderHeight();
		window.addEventListener('resize', this.checkIfMobile);
	}

	componentWillMount() {
		this.checkIfMobile();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.checkIfMobile);
	}

	handleProjectNav = () => {
		this.setState({
			projectNavIsOpen: !this.state.projectNavIsOpen,
			currentProjectActive: true
		});
	};

	handleFormChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject: <Form />,
			currentProjectName: 'Baseball Cards'
		});
	};

	handleWeatherAppChange = () => {
		this.setState({
			currentProject: <Weather />,
			currentProjectName: 'Weather'
		});
	};

	handlePriceCalcChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject: <PriceCalc />,
			currentProjectName: 'Price Calculator'
		});
	};
	handleColorContrastChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject: <ColorContrast />,
			currentProjectName: 'Color Contrast'
		});
	};

	handleWebsiteChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject: <Website />,
			currentProjectName: 'Website'
		});
	};

	handleMenuChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject: <Menu />,
			currentProjectName: 'Menu'
		});
	};

	handleProjectChange() {
		return <div className="project-screen-cont">{this.state.currentProject}</div>;
	}

	handleCheckActive = (area, stateName) => {
		if (area === 'project') {
			return this.state.currentProjectName === stateName ? 'project-is-active' : '';
		} else if (area === 'device') return this.state.deviceType === stateName ? 'navigation-option--active' : '';
	};

	handleDeviceChange = e => {
		let deviceEl = document.getElementById('device-project-container');
		let device = e.currentTarget.getAttribute('value');
		deviceEl.setAttribute('data-theme', device);
		console.log(deviceEl);
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

	closeProjectModal = () => {
		this.setState({
			// currentProject: '',
			currentProjectActive: false
		});
	};

	toggleDarkmode = () => {
		console.log(this.state.isDarkMode);
		const html = document.documentElement;

		this.setState({
			isDarkMode: !this.state.isDarkMode,
			isSetToLocalStorage: true
		});

		if (!this.state.isDarkMode) {
			html.setAttribute('data-theme', 'dark');
			localStorage.setItem('isDarkMode', true);
		} else {
			html.setAttribute('data-theme', 'light');
			localStorage.removeItem('isDarkMode');
		}
	};

	render() {
		const deviceSwitcher = (
			<div className="device_switcher-container">
				<div
					onClick={e => this.handleDeviceChange(e)}
					id="iphone-device-button"
					value="iphone-container"
					className={`navigation-option  ${this.handleCheckActive('device', 'iphone-container')}`}
				>
					<FontAwesomeIcon icon={faMobileAlt} />
				</div>

				<div
					onClick={e => this.handleDeviceChange(e)}
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
		);

		const projectNavOpenBtn = (
			<div
				onClick={this.handleProjectNav}
				id="open"
				className={`nav-project-toggle-container ${this.state.projectNavIsOpen ? 'open-nav--closed' : ''}`}
			>
				<FontAwesomeIcon icon={faHammer} />
				<span>Projects</span>
			</div>
		);

		const projectList = (
			<div className="nav-project-holder">
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleFormChange}
					projectName={'Baseball Cards'}
					icon={faScroll}
					state={this.state.currentProject}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleWebsiteChange}
					projectName={'Website'}
					icon={faDesktop}
					state={this.state.currentProject}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handlePriceCalcChange}
					projectName={'Price Calculator'}
					icon={faMoneyBill}
					state={this.state.currentProject}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleColorContrastChange}
					projectName={'Color Contrast'}
					icon={faPalette}
					state={this.state.currentProject}
				/>

				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleWeatherAppChange}
					projectName={'Weather'}
					icon={faCloudSunRain}
					state={this.state.currentProject}
					comingSoon={false}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleDrawingBoardChange}
					projectName={'Photo Gallery'}
					icon={faImage}
					state={this.state.currentProject}
					comingSoon={true}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleDashboardChange}
					projectName={'Dashboard'}
					icon={faChartBar}
					state={this.state.currentProject}
					comingSoon={true}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleMenuChange}
					projectName={'Menu'}
					icon={faHamburger}
					state={this.state.currentProject}
					comingSoon={true}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleGameChange}
					projectName={'Chat WebSocket'}
					icon={faComments}
					state={this.state.currentProject}
					comingSoon={true}
				/>
				<Project
					handleCheckActive={this.handleCheckActive}
					handleProjectChange={this.handleGameChange}
					projectName={'Music Player'}
					icon={faMusic}
					state={this.state.currentProject}
					comingSoon={true}
				/>
			</div>
		);

		const currentModalCloseButton = (
			<div className="modal-close-button-container">
				{deviceSwitcher}
				<span onClick={this.closeProjectModal} className="modal-close-button__button">
					<FontAwesomeIcon icon={faTimes} />
				</span>
			</div>
		);
		return (
			<Fragment>
				{this.state.currentProjectActive ? <Backdrop /> : ''}

				<div
					data-device={this.state.deviceType}
					className={
						!this.state.currentProjectActive ? 'project-holder' : 'project-holder project-holder-modal'
					}
				>
					<div
						className="device-project-browser-header"
						style={{ width: this.state.deviceType === 'iphone-container' ? '365px' : '100%' }}
					>
						<div className="three-btn-container">
							<div onClick={this.closeProjectModal} className="btn-circle close" />
							<div className="btn-circle middle" />
							<div className="btn-circle expand" />
						</div>
						<div className="url-box">{this.state.currentProjectName}</div>
						{this.state.currentProjectActive ? currentModalCloseButton : ''}
					</div>
					<div id="device-project-container" className={this.state.deviceType}>
						{this.handleProjectChange()}
					</div>
					<div
						className="device-project-browser-footer"
						style={{ width: this.state.deviceType === 'iphone-container' ? '365px' : '100%' }}
					>
						<span>Made by Jimmy Oliva</span>
					</div>
				</div>
				<div className="interior-body">
					<div id="devices" className="wrapper">
						{this.state.isMobile ? projectNavOpenBtn : ''}
						<div className="project-card-container">
							<div className="device-orientation-container">{projectList}</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Projects;
