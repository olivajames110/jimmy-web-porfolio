import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.css';

const Project = (props) => {
	return (
		<span onClick={props.handlePriceCalcChange} className={`project-btn `}>
			<div className="project-btn-icon">
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className={`project-btn-text ${props.handleCheckActive('project', props.projectName)}`}>
				{props.projectName}
			</div>
		</span>
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
