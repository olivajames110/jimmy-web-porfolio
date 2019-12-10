import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../../../../../assets/backdrop/backdrop';
import {
	faEllipsisV,
	faSmileBeam,
	faUtensils,
	faHeadphonesAlt,
	faWifi,
	faBell,
	faShoppingCart,
	faMobile,
	faEnvelope,
	faCommentSlash,
	faUsers
} from '@fortawesome/free-solid-svg-icons';
import './css/websiteMain.css';

class Website extends Component {
	state = {
		websiteMobileNavIsOpen: false
	};

	handleMobileNavToggle = () => {
		this.setState({
			websiteMobileNavIsOpen: !this.state.websiteMobileNavIsOpen
		});
	};

	render() {
		// const mobileNavState = '';
		const { websiteMobileNavIsOpen } = this.state;
		let mobileNavState = websiteMobileNavIsOpen ? 'website-mobile-nav--closed' : null;
		const ozLogoWhite = 'https://digitalmarketing.blob.core.windows.net/8981/images/items/image566182.png';
		const ozLogoColor =
			'https://digitalmarketing.blob.core.windows.net/7395/skins/OrderezeTrainingSite4/images/logo.png';

		return (
			<Fragment>
				<div className="website-project-container">
					<nav>
						<div className="nav-wrapper">
							<img src={websiteMobileNavIsOpen ? ozLogoColor : ozLogoWhite} alt="ordereze" />
							<div
								onClick={this.handleMobileNavToggle}
								style={{ color: websiteMobileNavIsOpen ? 'black' : 'white' }}
								className="mobile-nav-icon-btn"
							>
								<FontAwesomeIcon icon={faEllipsisV} />
							</div>
							<div className={`nav-link-container ${mobileNavState}`}>
								<span className="link">Menu Of Services</span>
								<span className="link">Company</span>
								<span className="link">Support</span>
								<span className="link">Resources</span>
								<button className="link">Request a Demo</button>
							</div>
						</div>
					</nav>
					<section id="section1-oz">
						<div className="text-content-area">
							<h1>Online Ordering</h1>
							<span className="sub-heading">Built Exclusively for the Independent Restaurateur</span>
							<button>Request a Demo</button>
							<svg
								id="curve"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								viewBox="0 0 1183 58"
							>
								<path
									class="bottom-curve"
									d="M1,34C133.75,60.78,338.48,92,592.5,92c140.32,0,351.18-9.53,591.5-58V92H1Z"
									transform="translate(0 -34)"
								/>
							</svg>
						</div>
					</section>
					<section id="section2-oz">
						<div className="text-content-area">
							<span>
								Trusted By <span>Sysco</span> For Over 10 Years
							</span>
							<h2>Dedicated to Helping Your Business Grow</h2>
							<p>
								At Ordereze, our mission is simple: we provide big solutions for small businesses.
								Whether you offer a fine dining experience or operate a food truck, we’re here to
								provide you with the best technology, resources, and support available in the industry.
							</p>
							<img
								src="https://digitalmarketing.blob.core.windows.net/8981/images/items/image566101.png"
								alt="computer"
							/>
						</div>
					</section>
					<section id="section3-oz">
						<h2>Over 10+ Years Of Restaurant Marketing Experience</h2>
						<div className="icon-container-wrapper">
							<div className="icon-container">
								<FontAwesomeIcon icon={faSmileBeam} />
								<span className="text">3,000+ Happy Customers</span>
							</div>
							<div className="icon-container">
								<FontAwesomeIcon icon={faUtensils} />
								<span className="text">Restaurant Specific</span>
							</div>
							<div className="icon-container">
								<FontAwesomeIcon icon={faHeadphonesAlt} />
								<span className="text">Caring Customer Support</span>
							</div>
						</div>
					</section>
					<section id="section-oz">
						<img
							src="https://digitalmarketing.blob.core.windows.net/9553/images/items/image499697.png"
							alt="computer"
						/>
						<div className="verbiage">
							<h2>Customizable Solutions For All Business Types</h2>
							<span>
								We know that every business is unique, which is why we offer a variety of user-friendly
								products and services to fit your needs.
							</span>
							<div className="list-container">
								<div className="column">
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faHeadphonesAlt} />
										</div>
										<span className="list-item-text">Customer Support</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faBell} />
										</div>
										<span className="list-item-text">Review Response</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faShoppingCart} />
										</div>
										<span className="list-item-text">Online Ordering</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faWifi} />
										</div>
										<span className="list-item-text">Wifi Marketing</span>
									</div>
								</div>
								<div className="column">
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faMobile} />
										</div>
										<span className="list-item-text">Mobile Websites</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faEnvelope} />
										</div>
										<span className="list-item-text">Email Marketing</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faCommentSlash} />
										</div>
										<span className="list-item-text">Social Hub</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faUsers} />
										</div>
										<span className="list-item-text">Do It For Me Services</span>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="section5-oz">
						<div className="quote">
							"Since we have begun working with Ordereze, our website is beautiful and reflects who we are
							as a business. Everything that we needed was all in one place. There was more to offer than
							any local company could. Having a true statement of what the business is and what we have to
							offer our customers.” — The Blarney Stone
						</div>
						<button>View Success Stories</button>
					</section>
					<section id="section6-oz">
						<div className="verbiage">
							<h2>Customizable Solutions For All Business Types</h2>
							<span>
								We know that every business is unique, which is why we offer a variety of user-friendly
								products and services to fit your needs.
							</span>
							<div className="list-container">
								<div className="column">
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faHeadphonesAlt} />
										</div>
										<span className="list-item-text">Monitor All Website Traffic</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faBell} />
										</div>
										<span className="list-item-text">Analyze Effective Time Ranges</span>
									</div>
									<div className="list-item">
										<div className="icon">
											<FontAwesomeIcon icon={faShoppingCart} />
										</div>
										<span className="list-item-text">Track Data & Take Action</span>
									</div>
								</div>
							</div>
						</div>
						<img
							src="https://digitalmarketing.blob.core.windows.net/9553/images/items/image501481.png"
							alt="computer"
						/>
					</section>
					<section id="section7-oz">
						<h2>Ready to Grow?</h2>
						<span>Learn more about how Ordereze can help grow your business!</span>
						<button>Request a Demo</button>
					</section>
					<div id="footer">
						<div className="column">
							<h3>Products</h3>
							<ul>
								<li>Pricing</li>
								<li>Responsive Websites</li>
								<li>Mobile Websites</li>
								<li>Online Ordering PRO</li>
								<li>Menu Sync</li>
								<li>Social Hub</li>
								<li>Facebook Integration</li>
								<li>Wifi Connect</li>
								<li>Do It For Me Services</li>
							</ul>
						</div>
						<div className="column">
							<h3>Company</h3>
							<ul>
								<li>Our Story</li>
								<li>Values</li>
								<li>Careers - USA</li>
								<li>Careers - Europe</li>
								<li>Blog</li>
								<li>Our Work</li>
								<li>Partners</li>
								<li>Newsletter</li>
								<li>Refer A Friend</li>
							</ul>
						</div>
						<div className="column">
							<h3>Support</h3>
							<ul>
								<li>File Upload System</li>
								<li>Submit A Ticket</li>
								<li>Employee Login</li>
							</ul>
							<h3>Free Services</h3>
							<d>
								<li>Online Presence Grader </li>
								<li> Website Concept Request</li>
								<li>Free Trial Portal</li>
							</d>
						</div>
						<div className="column">
							<h3>Contact</h3>
							<ul>
								<li>140 Wilbur Place, Suite 1</li>
								<li>Bohemia, NY 11716</li>
								<li>Phone: 631-271-3470</li>
								<li>Info@ordereze.com</li>
							</ul>
							<div className="social-media-icon-container">
								<span id="facebook" className="social-media-icon">
									<FontAwesomeIcon icon={faShoppingCart} />
								</span>
								<span id="twitter" className="social-media-icon">
									<FontAwesomeIcon icon={faShoppingCart} />
								</span>
								<span id="instagram" className="social-media-icon">
									<FontAwesomeIcon icon={faShoppingCart} />
								</span>
								<span id="linkedIn" className="social-media-icon">
									<FontAwesomeIcon icon={faShoppingCart} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Website;
