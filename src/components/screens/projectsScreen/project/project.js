import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/project.css';
import { faEye, faLessThan, faCode } from '@fortawesome/free-solid-svg-icons';
// import priceCalcPreview from '../../../../images/priceCalcPreview.png';
// import baseballCardPreview from '../../../../images/baseballCardPreview.jpg';
import websitePreview from '../images/websitePreview.jpg';

const Project = props => {
	let image = <img src={websitePreview} alt="" />;
	let flexStyles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		flexDirection: 'column'
	};
	let comingSoonCard = (
		<div style={flexStyles}>
			<div className="project-btn-text">{props.projectName}</div>
			<div className="project-btn__desc"> 'Project Coming Soon'</div>
		</div>
	);
	let projectCard = (
		<div className="project-btn__header-container">
			<div className="project-btn-image">
				<img src={props.image} alt="" />
			</div>
			<div className="project-btn-text-container">
				<div className="project-btn-text">{props.projectName}</div>
				<div className="project-btn__desc">{props.description}</div>
				<div className="project-btn__btns">
					<div onClick={props.handleProjectChange} className="project-btn-option">
						<span className="project-btn-option__title">View</span>
						<FontAwesomeIcon icon={props.icon} />
					</div>
					<div className="project-btn-option">
						<a href={props.sourceUrl} target="_blank" className="project-btn-option__title">
							Source
						</a>
						<FontAwesomeIcon icon={faCode} />
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<span className={`project-btn ${props.handleCheckActive('project', props.projectName)}`}>
			{!props.comingSoon ? projectCard : comingSoonCard}
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
