import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';

const Project = (props) => {
	return (
		<a
			href="#"
			onClick={props.handlePriceCalcChange}
			className={`project-btn ${props.handleCheckActive('project', props.projectName)}`}
		>
			<div className="project-btn-icon" />
			<FontAwesomeIcon icon={props.icon} />
			<div className="project-btn-text">{props.projectName}</div>
		</a>
	);
};

// const Project = (props) => {
// 	return (
// 		<div className="project-btn">
// 			<div className="project-btn-icon" />
// 			<FontAwesomeIcon icon={this.props.icon} />
// 			<div className="project-btn-text">{this.props.buttonText}</div>
// 		</div>
// 	);
// };

export default Project;
