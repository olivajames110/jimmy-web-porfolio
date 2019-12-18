import React, { Component, Fragment } from 'react';
import './css/headerMain.css';
import NavLink from './navLink/navLink';
import SideCart from './sideCart/sideCart';
import NavLinkList from './navLinkList/navLinkList';
import BackDrop from '../../assets/backdrop/backdrop';
import { HamburgerIcon, Logo, HamburgerIconAnimation } from '../../assets/svgs/svgs';
import classNames from 'classnames';

// import { withRouter } from 'react-router';

class Header extends Component {
	state = {
		mobileNavIsOpen: false,
		currentPage: '',
		isDarkMode: false,
		isSetToLocalStorage: false
	};

	componentWillMount() {}
	//for function use lo dash -> debounce method
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		console.log(localStorage.isDarkMode);
		if (localStorage.isDarkMode) {
			this.setState({
				isDarkMode: true
			});
			this.toggleDarkmode();
			document.querySelector('.darkmode-btn').checked = true;
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = params => {
		if (window.innerWidth > 1100) {
			this.setState({ mobileNavIsOpen: false });
		}
	};

	handleCurrentPage = page => {
		console.log(page);

		this.setState({
			currentPage: page
		});
	};

	handleMobileNavToggle = params => {
		console.log('clicked');
		this.setState({ mobileNavIsOpen: !this.state.mobileNavIsOpen });
	};

	toggleDarkmode = () => {
		console.log(this.state.isDarkMode);
		const html = document.documentElement;

		this.setState({
			isDarkMode: !this.state.isDarkMode,
			isSetToLocalStorage: true
		});

		if (!this.state.isDarkMode) {
			html.setAttribute('data-theme', 'dark');
			localStorage.setItem('isDarkMode', true);
		} else {
			html.setAttribute('data-theme', 'light');
			localStorage.removeItem('isDarkMode');
		}
	};

	render() {
		const { mobileNavIsOpen } = this.state;
		// const appHeaderClasses = classNames('app-header', {
		// 	'mobile-menu--open': mobileNavIsOpen,
		// 	'mobile-menu--closed': !mobileNavIsOpen
		// });
		// const smLinks = 	<SocialMedia position="relative" width="24" />
		const DarkModeToggle = () => (
			<div className="darkmode-container-toggle">
				<input onClick={this.toggleDarkmode} className="darkmode-btn" type="checkbox" id="switch" />
				<label htmlFor="switch">Toggle</label>
			</div>
		);

		const NavButton = () => {
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
		return (
			<div className="header-container">
				{DarkModeToggle}

				<div className="app-header">
					<div
						className={`navigation-logo-container ${mobileNavIsOpen &&
							'menunav-header-blue'}  mobilenav-btn-color--${mobileNavIsOpen ? 'open' : 'close'}`}
					>
						<a className={`mobilenav-logo--${mobileNavIsOpen ? 'open' : 'close'} `} href="/home">
							<Logo state={this.state.mobileNavIsOpen} />
						</a>
						{NavButton()}
					</div>
					<div id="side-cart-container" className={`${mobileNavIsOpen ? 'side-cart-container-active' : ''}`}>
						<SideCart
							mobileNavIsOpen={this.state.mobileNavIsOpen}
							currentPage={this.state.currentPage}
							handleActiveLink={this.handleCurrentPage}
						/>
					</div>
					<div className="navigation-links-cont">
						<NavLinkList />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
