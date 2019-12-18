import React from 'react';
import NavLink from '../navLink/navLink';

const navLinkList = [
	{ linkTitle: 'About', url: '/about' },
	{ linkTitle: 'My Work', url: '/projects' },
	{ linkTitle: 'Contact', url: '/contact' }
];
export const NavLinkList = props => {
	return (
		<div className={`${props.className}`}>
			{navLinkList.map(link => {
				return (
					<NavLink
						currentPage={props.currentPage}
						handleActiveLink={props.handleCurrentPage}
						linkTitle={link.linkTitle}
						url={link.url}
					/>
				);
			})}
		</div>
	);
};

export default NavLinkList;
