import React from 'react';
import './css/navLink.css';

const NavLink = props => (
	<a className="app-link" href={props.url} rel="noopener noreferrer">
		<span>{props.linkTitle}</span>
		{window.location.pathname.split('/')[1] === props.linkTitle.toLowerCase() ? (
			<div className="nav-link--active" />
		) : (
			''
		)}
	</a>
);

export default NavLink;
