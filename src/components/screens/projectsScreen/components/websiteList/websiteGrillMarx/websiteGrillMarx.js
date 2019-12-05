import React, { Component } from 'react';
import './websiteGrillMarx.css';

export default class GrillMarx extends Component {
	render() {
		return (
			<div className="grillMarx-container">
				<div className="header">
					<div className="logo-container">
						<img
							src="https://digitalmarketing.blob.core.windows.net/11851/images/items/image594034.png"
							alt=""
							srcset=""
						/>
					</div>
					<div className="nav-links-container">
						<span className="nav-link">Home</span>
						<span className="nav-link">About Us</span>
						<span className="nav-link-wrapper">
							<span className="nav-link">Locations</span>
							<div className="nav-sub-link-container">
								<span className="nav-sub-link">About Us</span>
								<span className="nav-sub-link">About Us</span>
							</div>
						</span>
						<span className="nav-link">Catering</span>
						<span className="nav-link">Contact Us</span>
						<span className="nav-link"> Gift Cards</span>
					</div>
				</div>
				<div className="website-body">
					<div className="section1">
						<div className="image-bg">
							<img
								src="https://digitalmarketing.blob.core.windows.net/11851/images/items/image594105.jpg"
								alt=""
								srcset=""
							/>
							<div className="content-area">
								<div className="text-box-container">
									<h1>
										Premium Cocktails, Grilled Steak, Fresh Seafood, Salads & Sandwiches Crafted
										with House-Made Ingredients
									</h1>
								</div>
							</div>
							<div className="button-wrapper">.but</div>
						</div>
					</div>
					<div className="section2">
						<p>Testtttttttt</p>
					</div>
				</div>
				<div className="footer" />
			</div>
		);
	}
}
