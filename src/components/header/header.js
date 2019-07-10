import React, { Component, Fragment } from 'react';
import './header.css';
import NavLink from './navLink/navLink';
import BackDrop from '../body/backdrop/backdrop';
import { GithubIcon, HamburgerIcon, Logo, HamburgerIconAnimation } from '../../assets/svgs/svgs';
import classNames from 'classnames';
import { withRouter } from 'react-router';

class Header extends Component {
	state = {
		mobileNavIsOpen: false,
		currentPage: 'projects'
	};
	//for function use lo dash -> debounce method
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleMobileNavToggle = (params) => {
		console.log('clicked');
		this.setState({ mobileNavIsOpen: !this.state.mobileNavIsOpen });
	};

	handleResize = (params) => {
		if (window.innerWidth > 1100) {
			this.setState({ mobileNavIsOpen: false });
		}
	};

	handleCurrentPage = () => {};

	renderNavButton = () => {
		const { mobileNavIsOpen } = this.state;
		return (
			<button
				className={`hamburger-icon mobilenav-btn--${mobileNavIsOpen ? 'open' : 'close'}`}
				onClick={this.handleMobileNavToggle}
			>
				{!mobileNavIsOpen ? <HamburgerIcon /> : <HamburgerIconAnimation />}
			</button>
		);
	};

	renderNavButton = () => {
		const { mobileNavIsOpen } = this.state;
		return (
			<button
				className={`hamburger-icon mobilenav-btn-color--${mobileNavIsOpen
					? 'open'
					: 'close'} mobilenav-btn--${mobileNavIsOpen ? 'open' : 'close'} `}
				onClick={this.handleMobileNavToggle}
			>
				{!mobileNavIsOpen ? <HamburgerIcon /> : <HamburgerIconAnimation />}
			</button>
		);
	};

	render() {
		const { mobileNavIsOpen } = this.state;

		const appHeaderClasses = classNames('app-header', {
			'mobile-menu--open': mobileNavIsOpen,
			'mobile-menu--closed': !mobileNavIsOpen
		});
		const Links = () => (
			<Fragment>
				<NavLink
					currentPage={this.state.currentPage}
					handleActiveLink={this.handleCurrentPage}
					linkTitle="About"
					url="#"
				/>
				<NavLink
					currentPage={this.state.currentPage}
					handleActiveLink={this.handleCurrentPage}
					linkTitle="Portfolio"
					url=""
				/>
				<NavLink
					currentPage={this.state.currentPage}
					handleActiveLink={this.handleCurrentPage}
					linkTitle="Projects"
					url="/projects"
				/>
				<NavLink
					currentPage={this.state.currentPage}
					handleActiveLink={this.handleCurrentPage}
					linkTitle="Contact"
					url=""
				/>
			</Fragment>
		);

		return (
			<div>
				{mobileNavIsOpen ? <BackDrop /> : ''}
				<div style={{ height: mobileNavIsOpen ? '90% ' : '' }} className={appHeaderClasses}>
					<div
						className={`navigation-logo-container ${mobileNavIsOpen &&
							'menunav-header-blue'}  mobilenav-btn-color--${mobileNavIsOpen ? 'open' : 'close'}`}
					>
						<a href="/home">
							<Logo state={this.state.mobileNavIsOpen} />
						</a>
						{this.renderNavButton()}
					</div>
					<div className={`${mobileNavIsOpen ? ' navigation-links-cont--open' : 'navigation-links-cont '}`}>
						<Links />
					</div>
				</div>{' '}
			</div>
		);
	}
}

export default Header;
