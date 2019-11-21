import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';
import { faEye, faLessThan, faCode } from '@fortawesome/free-solid-svg-icons';
import priceCalcPreview from '../../../../images/priceCalcPreview.png';
import baseballCardPreview from '../../../../images/baseballCardPreview.jpg';
import websitePreview from '../../../../images/websitePreview.jpg';

const Project = props => {
	let image = <img src={websitePreview} alt="" />;

	return (
		<span
			style={{ opacity: props.comingSoon ? '.5' : '' }}
			className={`project-btn ${props.handleCheckActive('project', props.projectName)}`}
		>
			<div className="project-btn__header-container">
				<div className="project-btn-image">{image}</div>
				<div className="project-btn-text-container">
					<div style={{ marginTop: props.comingSoon ? '-10px' : '' }} className="project-btn-text">
						{props.projectName}
						{props.comingSoon ? <span className="coming-soon">Coming Soon</span> : ''}
					</div>
					<div className="project-btn__desc">A simple weather app using Google Maps and Weather API</div>
					<div className="project-btn__btns">
						<div onClick={props.handleProjectChange} className="project-btn-option">
							<span className="project-btn-option__title">View</span>
							<FontAwesomeIcon icon={props.icon} />
						</div>
						<div className="project-btn-option">
							<span className="project-btn-option__title">Source</span>
							<FontAwesomeIcon icon={faCode} />
						</div>
					</div>
				</div>
			</div>
		</span>
	);
};

const ProjectCard = props => {
	return (
		<div>
			<div className="project-btn-icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className="project-btn__title">{props.projectName}</div>
			<div className="project-btn__desc">HTML | CSS | Javascript</div>
		</div>
	);
};

export default Project;
