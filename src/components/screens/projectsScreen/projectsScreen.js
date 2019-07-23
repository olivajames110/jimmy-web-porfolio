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
	faArrowLeft,
	faHamburger,
	faGamepad,
	faCrosshairs,
	faCross,
	faTimes
} from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../assets/backdrop/backdrop';
import Form from './projects/form/form';
import PriceCalc from './projects/priceCalc/priceCalc';
import DrawingBoard from './projects/drawingBoard/drawingBoard';
import Project from './projects/project/project';
import Menu from './projects/menu/menu';
import './projectsScreen.css';

class Projects extends Component {
	state = {
		isMobile           : null,
		currentProject     : '',
		currentProjectName : 'Choose a project above!',
		deviceType         : 'desktop-container',
		projectNavIsOpen   : false
	};

	checkIfMobile = (a) => {
		if (window.innerWidth < 1100) {
			this.setState({
				isMobile : true
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

	handleProjectNav = () => {
		this.setState({
			projectNavIsOpen : !this.state.projectNavIsOpen
		});
	};

	handleFormChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject     : <Form />,
			currentProjectName : 'Form'
		});
	};

	handleWeatherChange = () => {
		this.setState({
			currentProject     : <DrawingBoard />,
			currentProjectName : 'Drawing Board'
		});
	};

	handlePriceCalcChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject     : <PriceCalc />,
			currentProjectName : 'Price Calculator'
		});
	};
	placeholder;

	handleMenuChange = () => {
		this.handleProjectNav();
		this.setState({
			currentProject     : <Menu />,
			currentProjectName : 'Menu'
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
				<span className="placeholder-text-desc">
					Here's a few small projects I've been working on recently. None of them are fully complete, consider
					this more of a playground where I can work on various projects.
				</span>
			</div>
		);

		const deviceSwitcher = (
			<div className="device-orientation-btns-container">
				<div
					onClick={(e) => this.handleDeviceChange(e)}
					id="iphone-device-button"
					value="iphone-container"
					className={`navigation-option  ${this.handleCheckActive('device', 'iphone-container')}`}
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
		);

		const projectNavOpenBtn = (
			<div
				onClick={this.handleProjectNav}
				id="open"
				className={`nav-project-toggle-container ${this.state.projectNavIsOpen ? 'open-nav--closed' : ''}`}
			>
				<FontAwesomeIcon icon={faArrowLeft} />
				<span>{this.state.currentProject === '' ? 'Select A Project' : this.state.currentProjectName}</span>
			</div>
		);

		const projectNavCloseBtn = (
			<div onClick={this.handleProjectNav} id="close" className="nav-project-toggle-container">
				<FontAwesomeIcon icon={faTimes} />
			</div>
		);

		const projectList = (
			<div className="nav-project-holder">
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
		);

		return (
			<Fragment>
				{this.state.projectNavIsOpen && this.state.isMobile ? <Backdrop /> : ''}
				<div className="interior-body">
					<div id="devices" className="wrapper">
						{this.state.isMobile ? projectNavOpenBtn : ''}
						<div className="navigation">
							<div
								className={`device-orientation-container ${!this.state.projectNavIsOpen &&
								this.state.isMobile
									? 'project-nav--closed'
									: ''}`}
							>
								{this.state.isMobile ? projectNavCloseBtn : deviceSwitcher}
								<div className="nav-project-holder">{projectList}</div>
							</div>
						</div>
						<div className="project-holder">
							<div id="device-project-container" className={this.state.deviceType}>
								{this.state.currentProject === '' ? emptyPlaceholder : this.handleProjectChange()}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Projects;