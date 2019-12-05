import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

const ProjectNavOpenBtn = props => {
	return (
		<div
			onClick={props.handleProjectNav}
			id="open"
			className={`nav-project-toggle-container ${props.projectNavIsOpen ? 'open-nav--closed' : ''}`}
		>
			<FontAwesomeIcon icon={faHammer} />
			<span>Projects</span>
		</div>
	);
};

export default ProjectNavOpenBtn;
