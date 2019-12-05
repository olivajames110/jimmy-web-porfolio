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
import Project from './components/project/project';
import Backdrop from '../../../assets/backdrop/backdrop';
import Form from './components/projectList/form/form';
import PriceCalc from './components/projectList/priceCalc/priceCalc';
import Weather from './components/projectList/weather/weather';
import Menu from './components/projectList/menu/menu';
import Website from './components/projectList/website/website';
import ColorContrast from './components/projectList/colorContrast/colorContrast';
import ProjectList from './components/projectList/projectList';
import ProjectNavOpenBtn from './components/projectNavOpenBtn';
import ProjectModal from './components/projectModal';
import GrillMarx from './components/websiteList/websiteGrillMarx/websiteGrillMarx';
import Benvenuto from './components/websiteList/websiteBenvenuto/websiteBenvenuto';
// import PriceCalcPreview from '../../images/priceCalcPreview.png';
// import BaseballCardPreview from '../../images/images/websitePreview.jpg';
// import WebsitePreview from '../../images/websitePreview.jpg';
import './css/projectsScreen.css';

class Projects extends Component {
	state = {
		isMobile: null,
		currentProjectComponent: <PriceCalc />,
		currentProjectName: 'Choose a project above!',
		currentProjectActive: false,
		deviceType: 'desktop-container',
		projectNavIsOpen: false,
		headerHeight: null,
		projectList: null
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

	handleProjectChange = component => {
		let projectComponent;
		switch (component) {
			case '<Website />':
				projectComponent = <Website />;
				break;
			case '<PriceCalc />':
				projectComponent = <PriceCalc />;
				break;
			case '<Form />':
				projectComponent = <Form />;
				break;
			case '<GrillMarx />':
				projectComponent = <GrillMarx />;
				break;
			case '<Benvenuto />':
				projectComponent = <Benvenuto />;
				break;
			default:
			// code block
		}
		this.setState({
			currentProjectComponent: projectComponent,
			currentProjectActive: !this.state.currentProjectActive
		});
	};

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
			// currentProjectComponent: '',
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
		// const deviceSwitcher = (
		// 	<div className="device_switcher-container">
		// 		<div
		// 			onClick={e => this.handleDeviceChange(e)}
		// 			id="iphone-device-button"
		// 			value="iphone-container"
		// 			className={`navigation-option  ${this.handleCheckActive('device', 'iphone-container')}`}
		// 		>
		// 			<FontAwesomeIcon icon={faMobileAlt} />
		// 		</div>

		// 		<div
		// 			onClick={e => this.handleDeviceChange(e)}
		// 			id="desktop-device-button"
		// 			value="desktop-container"
		// 			className={`navigation-option desktop-only-icon ${this.handleCheckActive(
		// 				'device',
		// 				'desktop-container'
		// 			)}`}
		// 		>
		// 			<FontAwesomeIcon icon={faDesktop} />
		// 		</div>
		// 	</div>
		// );

		// const currentModalCloseButton = (
		// 	<div className="modal-close-button-container">
		// 		{deviceSwitcher}
		// 		<span onClick={this.closeProjectModal} className="modal-close-button__button">
		// 			<FontAwesomeIcon icon={faTimes} />
		// 		</span>
		// 	</div>
		// );

		// const projectHolder = (
		// 	<div
		// 		data-device={this.state.deviceType}
		// 		className={this.state.currentProjectActive ? 'project-holder' : 'project-holder project-holder-modal'}
		// 	>
		// 		<div
		// 			className="device-project-browser-header"
		// 			style={{ width: this.state.deviceType === 'iphone-container' ? '365px' : '100%' }}
		// 		>
		// 			<div
		// 				style={{
		// 					display: this.state.deviceType === 'iphone-container' ? 'none' : 'flex'
		// 				}}
		// 				className="three-btn-container"
		// 			>
		// 				<div onClick={this.closeProjectModal} className="btn-circle close" />
		// 				<div className="btn-circle middle" />
		// 				<div className="btn-circle expand" />
		// 			</div>
		// 			<div className="url-box">{this.state.currentProjectName}</div>
		// 			{this.state.currentProjectActive ? currentModalCloseButton : ''}
		// 		</div>
		// 		<div id="device-project-container" className={this.state.deviceType}>
		// 			{this.handleProjectChange()}
		// 		</div>
		// 		<div
		// 			className="device-project-browser-footer"
		// 			style={{ width: this.state.deviceType === 'iphone-container' ? '365px' : '100%' }}
		// 		>
		// 			<span>Made by Jimmy Oliva</span>
		// 		</div>
		// 	</div>
		// );

		// const projectNavOpenBtn = (
		// 	<div
		// 		onClick={this.handleProjectNav}
		// 		id="open"
		// 		className={`nav-project-toggle-container ${this.state.projectNavIsOpen ? 'open-nav--closed' : ''}`}
		// 	>
		// 		<FontAwesomeIcon icon={faHammer} />
		// 		<span>Projects</span>
		// 	</div>
		// );

		return (
			<Fragment>
				<div className="interior-body">
					{this.state.isMobile ? (
						<ProjectNavOpenBtn
							state={this.state.projectNavOpenBtn}
							handleProjectNav={this.handleProjectNav}
						/>
					) : (
						''
					)}

					<div className="website-card-container">
						<div className="project-title-container">
							<h1 className="title">Websites</h1>
							<p className="description">
								A few examples of websites I have built and designed in the past. These websites are
								property of Ordereze, and were originally built with proprietary website-building
								software built by Ordereze. Please note that the current live version of any website is
								not a direct representation of how the site was initially designed.
							</p>
						</div>
						<ProjectList
							handleCheckActive={this.handleCheckActive}
							handleProjectChange={this.handleProjectChange}
							state={this.state.currentProjectComponent}
							type={'website'}
						/>
					</div>
					<div className="project-card-container">
						<div className="project-title-container">
							<h1 className="title">Projects</h1>
							<p className="description">A few miscellaneous projects I have been working on for fun.</p>
						</div>
						<ProjectList
							handleCheckActive={this.handleCheckActive}
							handleProjectChange={this.handleProjectChange}
							state={this.state.currentProjectComponent}
						/>
					</div>
				</div>
				{this.state.currentProjectActive ? (
					<ProjectModal
						deviceType={this.state.deviceType}
						currentProjectActive={this.state.currentProjectActive}
						currentModalCloseButton={this.state.currentModalCloseButton}
						currentProjectName={this.state.currentProjectName}
						currentProjectComponent={this.state.currentProjectComponent}
						handleDeviceChange={this.handleDeviceChange}
						handleCheckActive={this.handleCheckActive}
						handleProjectChange={this.handleProjectChange}
					/>
				) : (
					''
				)}
			</Fragment>
		);
	}
}

export default Projects;
