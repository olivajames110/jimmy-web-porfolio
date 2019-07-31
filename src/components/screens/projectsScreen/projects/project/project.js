import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';

const Project = props => {
	return (
		<span
			onClick={props.handlePriceCalcChange}
			className={`project-btn ${props.handleCheckActive('project', props.projectName)}`}
		>
			<div className="project-btn-icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className="project-btn-text">{props.projectName}</div>
		</span>
	);
};

export default Project;
