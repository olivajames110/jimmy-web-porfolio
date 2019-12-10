import React, { Component } from 'react';
import './websiteGrillMarx.css';
import Button from '../../../../../../assets/button/button';
import Map from '../../../../../../assets/map/map';
import websiteGrillMarxImages from './images/images';

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
					<div id="section1">
						<div className="content-area">
							<div className="text-box-container">
								<h1>
									Premium Cocktails, Grilled Steak, Fresh Seafood, Salads & Sandwiches Crafted with
									House-Made Ingredients
								</h1>
							</div>
							<Button
								text={'View Locations'}
								icon={'faCloudSunRain'}
								backgroundColor={'#bf1e2e'}
								borderRadius={'2px'}
								border={'none'}
							/>
						</div>
					</div>
					<div id="section2">
						<div className="social-media-container">
							<span id="facebook" className="social-media-icon">
								F
							</span>
							<span id="twittter" className="social-media-icon">
								T
							</span>
							<span id="instagram" className="social-media-icon">
								I
							</span>
						</div>
						<h2>Welcome To Grillmarx Steakhouse & Raw Bar</h2>
						<p>
							An upscale yet casual dining environment where you can find a large selection to appeal to
							your mood and food cravings. Whether you’re in the mood for tasty cocktail, a salad, a
							sandwich, seafood or a hearty steak we are here to prepare it fresh with house-made
							ingredients, including hand-cut steaks and house fileted fish along with fresh ingredients
							delivered and prepped daily so we can keep our promise in delivering a delicious and
							satisfying meal to every guest that walks through our doors.
						</p>
						<Button
							text={'Read More'}
							icon={'faCloudSunRain'}
							color={'white'}
							backgroundColor={'#bf1e2e'}
							borderRadius={'2px'}
							border={'none'}
						/>
					</div>
					<div id="section3">
						<div className="three-image-container">
							<div className="image-item">
								<img src={websiteGrillMarxImages.tunaSteak} alt="" />
							</div>
							<div className="image-item">
								<img src={websiteGrillMarxImages.s1_background} alt="" />
							</div>
							<div className="image-item">
								<img src={websiteGrillMarxImages.mussels} alt="" />
							</div>
						</div>
					</div>
					<div id="section4" className="offset-container">
						<img src={websiteGrillMarxImages.steak} alt="" />
						<div className="content-area">
							<div id="featured-weekly__content-container">
								<h2 className="title">Featured Weekly</h2>
								<div className="day-wrapper">
									<h3 className="day-title">Monday</h3>
									<p>1/2 Price Bottle of Wine</p>
								</div>
								<div className="day-wrapper">
									<h3 className="day-title">Tuesday</h3>
									<p>$1 Oyster Night</p>
								</div>
								<div className="day-wrapper">
									<h3 className="day-title">Wednesday</h3>
									<p>Brunch From 10am - 2pm</p>
								</div>
							</div>
							<div className="happy-hour-container">
								<h2 className="title">Happy Hour</h2>
								<div className="day-wrapper">
									<h3 className="day-title">Monday</h3>
									<p>1/2 off</p>
								</div>
							</div>
						</div>
					</div>
					<div id="section5" className="offset-container">
						<div className="content-area">
							<div id="catering__content-container">
								<h2 className="title title--red">Grillmarx Catering</h2>
								<h3 className="day-title">Full Service Catering Available!</h3>
								<p>
									Entrée Selections, Sandwiches, Salads, Pasta, Dips, Fruit Platters, Dessert, Drinks
									and all paper goods are available for delivery within 25 miles of our locations.
									Further destinations will be accommodated for an increased travel charge. Menus are
									designed with your needs in mind.
								</p>
							</div>
						</div>
						<img src={websiteGrillMarxImages.table} alt="" />
					</div>
					<div id="section6">
						<h2>Check Our All Three Of Our Locations!</h2>
						<div className="restaurant-location-container">
							<div className="location-container">
								<img src={websiteGrillMarxImages.location_1} alt="" srcset="" />
								<Button
									text={'View Locations'}
									icon={'faMapPin'}
									backgroundColor={'#bf1e2e'}
									borderRadius={'2px'}
									border={'none'}
									margin={'15px 0'}
									color={'white'}
								/>
								<div className="address-container">
									<p>12011 Snowden Farm Pkwy</p>
									<p>Clarksburg, Maryland 20871</p>
									<p>301-916-1691</p>
								</div>
							</div>
							<div className="location-container">
								<img src={websiteGrillMarxImages.location_2} alt="" srcset="" />
								<Button
									text={'View Locations'}
									icon={'faMapPin'}
									backgroundColor={'#bf1e2e'}
									borderRadius={'2px'}
									border={'none'}
									margin={'15px 0'}
									color={'white'}
								/>
								<div className="address-container">
									<p>18149 Town Center Drive</p>
									<p>Olney, Maryland 20832</p>
									<p>301-570-1111</p>
								</div>
							</div>
							<div className="location-container">
								<img src={websiteGrillMarxImages.location_1} alt="" srcset="" />
								<Button
									text={'View Locations'}
									icon={'faMapPin'}
									backgroundColor={'#bf1e2e'}
									borderRadius={'2px'}
									border={'none'}
									margin={'15px 0'}
									color={'white'}
								/>
								<div className="address-container">
									<p>10175 Little Patuxent Pkwy,</p>
									<p>Columbia, Maryland 21044</p>
									<p>301-570-3373</p>
								</div>
							</div>
						</div>
					</div>
					<Map />
				</div>
				<div className="footer" />
			</div>
		);
	}
}
