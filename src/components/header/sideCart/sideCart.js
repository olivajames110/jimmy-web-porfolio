import React, { Fragment } from 'react';
import NavLinkList from '../navLinkList/navLinkList';
import './sideCart.css';

const SideCart = props => {
	return (
		<Fragment>
			<NavLinkList
				className="side-cart"
				currentPage={props.currentPage}
				handleActiveLink={props.handleCurrentPage}
			/>
		</Fragment>
	);
};

export default SideCart;
