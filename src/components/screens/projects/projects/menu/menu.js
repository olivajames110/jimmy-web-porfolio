import React, { Fragment } from 'react';
import './css/main.css';

const Menu = (props) => {
	return (
		<Fragment>
			<div className="root-menu-container">
				<h1>Menu Titles</h1>
				<div className="menu-item-container">
					<div className="menu-item-wrapper">
						<div className="menu-item--item">Hamburger</div>
					</div>
					<div className="menu-item-wrapper">
						<div className="menu-item--item">Hamburger</div>
					</div>
					<div className="menu-item-wrapper">
						<div className="menu-item--item">Hamburger</div>
					</div>
					<div className="menu-item-wrapper">
						<div className="menu-item--item">Hamburger</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Menu;
