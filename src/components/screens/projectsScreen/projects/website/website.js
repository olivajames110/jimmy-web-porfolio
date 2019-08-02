import React, { Component, Fragment } from 'react';
import './css/websiteMain.css';

class Website extends Component {
	render() {
		return (
			<Fragment>
				<div className="website-project-container">
					<nav>
						<img
							src="https://digitalmarketing.blob.core.windows.net/8981/images/items/image566182.png"
							alt="ordereze"
						/>
						<div className="mobile-nav-icon">H</div>
						<div className="nav-link-container">
							<span className="link">Menu Of Services</span>
							<span className="link">Company</span>
							<span className="link">Support</span>
							<span className="link">Resources</span>
							<button className="link">Request a Demo</button>
						</div>
					</nav>
					<section id="section1">
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
					</section>
					<section id="section2">
						<div className="text-content-area">
							<h2>Sample header</h2>
							<div>Sub header sample text line</div>
							<p>
								Lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
								ipsum ipsum lorem ipsum lorem ipsum lorem ipsum
							</p>
						</div>
					</section>
				</div>
			</Fragment>
		);
	}
}

export default Website;
