import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMobileAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../../assets/backdrop/backdrop';
import Form from './projectList/form/form';
import PriceCalc from './projectList/priceCalc/priceCalc';
import Weather from './projectList/weather/weather';
import Menu from './projectList/menu/menu';
import Website from './projectList/website/website';
import ColorContrast from './projectList/colorContrast/colorContrast';
import ProjectList from './projectList/projectList';

const ProjectModal = props => {
	const DeviceSwitcher = (
		<div className="device_switcher-container">
			<div
				onClick={e => props.handleDeviceChange(e)}
				id="iphone-device-button"
				value="iphone-container"
				className={`navigation-option  ${props.handleCheckActive('device', 'iphone-container')}`}
			>
				<FontAwesomeIcon icon={faMobileAlt} />
			</div>

			<div
				onClick={e => props.handleDeviceChange(e)}
				id="desktop-device-button"
				value="desktop-container"
				className={`navigation-option desktop-only-icon ${props.handleCheckActive(
					'device',
					'desktop-container'
				)}`}
			>
				<FontAwesomeIcon icon={faDesktop} />
			</div>
		</div>
	);

	return (
		<div>
			<Backdrop clickEvent={props.handleCloseModal} />
			<div
				data-device={props.deviceType}
				className={props.currentProjectActive ? 'project-holder' : 'project-holder project-holder-modal'}
			>
				<div
					className="device-project-browser-header"
					style={{ width: props.deviceType === 'iphone-container' ? '365px' : '100%' }}
				>
					<div
						style={{
							display: props.deviceType === 'iphone-container' || props.isMobile ? 'none' : 'flex'
						}}
						className="three-btn-container"
					>
						<div onClick={props.handleProjectChange} className="btn-circle close" />
						<div className="btn-circle middle" />
						<div className="btn-circle expand" />
					</div>
					<div className="url-box">{props.currentProjectName}</div>
					{props.currentProjectActive ? DeviceSwitcher : ''}
					<span onClick={props.handleCloseModal} className="modal-close-button__button">
						<FontAwesomeIcon icon={faTimes} />
					</span>
				</div>
				<div
					id="device-project-container"
					className={props.deviceType}
					data-theme={props.isMobile ? 'iphone-container' : 'desktop-container'}
				>
					<div className="project-screen-cont">{props.currentProjectComponent}</div>
				</div>

			</div>
		</div>
	);
};

export default ProjectModal;
