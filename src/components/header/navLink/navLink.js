import React from 'react';
import './navLink.css';

const NavLink = (props) => (
	<a
		className={`app-link ${props.currentPage === props.linkTitle ? '' : 'app-link-active'}`}
		href={props.url}
		rel="noopener noreferrer"
	>
		{props.linkTitle}
	</a>
);

export default NavLink;
