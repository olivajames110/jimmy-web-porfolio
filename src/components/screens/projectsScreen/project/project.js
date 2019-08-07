import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';

const Project = props => {
	return (
		<span
			style={{ opacity: props.comingSoon ? '.5' : '' }}
			onClick={props.handlePriceCalcChange}
			className={`project-btn ${props.handleCheckActive('project', props.projectName)}`}
		>
			<div className="project-btn-icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div style={{ marginTop: props.comingSoon ? '-10px' : '' }} className="project-btn-text">
				{props.projectName}
				{props.comingSoon ? <span className="coming-soon">Coming Soon</span> : ''}
			</div>
		</span>
	);
};

export default Project;
