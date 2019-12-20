import React, { Component } from 'react';
import './websiteGrillMarx.css';
import Button from '../../../../../../assets/button/button';
import Map from '../../../../../../assets/map/map';
import websiteGrillMarxImages from './images/images';

export default class GrillMarx extends Component {
	state = {
		navIsOpen: false
	};

	handleMobileNav = () => {
		this.setState({
			navIsOpen: !this.state.navIsOpen
		});
	};

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
					<div className="nav-link-container-wrapper">
						<div onClick={this.handleMobileNav} className="mobile-nav-btn">
							<span className="bar" />
							<span className="bar" />
							<span className="bar" />
						</div>
						<div
							className={`nav-links-container ${this.state.navIsOpen ? 'mobile-nav-link-position' : ''}`}
						>
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
						<div className="grid three-image-container">
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
					<div id="section4" className="grid offset-container">
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
					<div id="section5" className="grid offset-container">
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
						<div className="grid restaurant-location-container">
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
					<Map
						center={{
							lat: 39.2289,
							lng: -77.25123
						}}
						c2={{
							lat: 39.21694,
							lng: -76.85702
						}}
						c3={{
							lat: 39.15184,
							lng: -77.06208
						}}
						zoom={11}
					/>
				</div>
				<div id="footer">
					<div className="footer-row">
						<div id="social-media-container">
							<div className="social-media-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="facebook-f"
									class="svg-inline--fa fa-facebook-f fa-w-10"
									role="img"
									viewBox="0 0 320 512"
								>
									<path
										fill="currentColor"
										d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
									/>
								</svg>
							</div>
							<div className="social-media-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="twitter"
									class="svg-inline--fa fa-twitter fa-w-16"
									role="img"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
									/>
								</svg>
							</div>
							<div className="social-media-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="instagram"
									class="svg-inline--fa fa-instagram fa-w-14"
									role="img"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
									/>
								</svg>
							</div>
						</div>
						<div id="mailing-list-container">
							<div className="mailing-list__title-container">
								<span className="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										focusable="false"
										data-prefix="far"
										data-icon="envelope"
										class="svg-inline--fa fa-envelope fa-w-16"
										role="img"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
										/>
									</svg>
								</span>
								<span>Join Our Mailing List</span>
							</div>
							<input placeholder="Enter your mailing address" />
							<button>Submit</button>
						</div>
					</div>


				</div>
			</div>
		);
	}
}
