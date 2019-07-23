import React, { Fragment } from 'react';
import './priceCalc.css';

const PriceCalc = (props) => {
	return (
		<Fragment>
			<div class="range-widget-container fade-in">
				<div className="bg" />
				<div className="range-widget-container">
					<div className="intro-headers">
						<h1>
							Online Ordering Cost <span> Commission Calculator</span>
						</h1>
						<span className="intro-desc">
							How much money are you giving away to various third-party online ordering companies?
						</span>
					</div>
					<div className="range-container">
						<div className="range-slider-wrapper">
							<div id="avg-price">
								<div className="range-title">
									<span className="range-title-step">
										Average price of an online order placed at your restaurant.
									</span>
									<span className="range-title-step-value">
										<div className="number-value">
											<span id="rs-bullet--price">16</span>{' '}
											<span className="number-value-desc">per order</span>
										</div>
									</span>
								</div>
								{/* <span id="rs-bullet--price" class="rs-label" style="left: 43.61%;">$98</span> */}
							</div>
							<div className="box-minmax bottom-rounded-corners">
								<div className="range-slider-input">
									<input
										id="rs-range-line--price"
										className="range-slider__range"
										type="range"
										defaultValue={100}
										min={0}
										max={200}
										style={{
											background :
												'linear-gradient(90deg, rgb(12, 78, 126) 49%, rgb(215, 220, 223) 49.1%)'
										}}
									/>
								</div>
								<div className="box-minmax-key">
									<span>$0</span>
									<span>$200</span>
								</div>
							</div>
						</div>
						<div className="range-slider-wrapper">
							<div id="avg-amt">
								<div className="range-title">
									<span className="range-title-step">
										Average amount of online orders received in one week.
									</span>
									<span className="range-title-step-value">
										<div className="number-value">
											<span id="rs-bullet--amt">16</span>{' '}
											<span className="number-value-desc">orders per week</span>
										</div>
									</span>
								</div>
								{/* <span id="rs-bullet--amt" class="odometer rs-label" style="left: 84.6%;">470</span> */}
							</div>
							<div className="box-minmax bottom-rounded-corners">
								<div className="range-slider-input">
									<input
										id="rs-range-line--amt"
										className="range-slider__range"
										type="range"
										defaultValue={200}
										min={0}
										max={500}
										style={{
											background :
												'linear-gradient(90deg, rgb(12, 78, 126) 94%, rgb(215, 220, 223) 94.1%)'
										}}
									/>
								</div>
								<div className="box-minmax-key">
									<span>0</span>
									<span>500</span>
								</div>
							</div>
						</div>
					</div>
					<div className="competitor-wrapper">
						<div className="range-title">
							<span className="range-title-step">
								Compare companies and see how much money you could be save by using Ordereze.
							</span>
						</div>
						<div className="companies">
							<div className="companies-table-title">
								<h3 id="company">Company</h3>
								<h3 id="commission">Commission %</h3>
								<h3 id="pay">Annual Cost </h3>
								<h3 id="ordereze">Annual Ordereze Cost </h3>
							</div>
							<div className="list-of-competitors bottom-rounded-corners">
								<div id="grubhub" className="competitor-container">
									<span className="competitor-company ">Grubhub</span>
									<span className="competitor-commission-amt">20%</span>
									<span id="grubhub-competitor" className="competitor-price-amt competitor-red">
										$479,024
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="eatstreet" className="competitor-container">
									<span className="competitor-company ">Eatstreet</span>
									<span className="competitor-commission-amt"> 12% </span>
									<span id="eatstreet-competitor" className="competitor-price-amt competitor-red">
										$287,414
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="chownow" className="competitor-container">
									<span className="competitor-company ">Chownow</span>
									<span className="competitor-commission-amt"> $119</span>
									<span id="chownow-competitor" className="competitor-price-amt competitor-red">
										$1,428
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="menufy" className="competitor-container">
									<span className="competitor-company ">Menufy</span>
									<span className="competitor-commission-amt">$1.50</span>
									<span id="menufy-competitor" className="competitor-price-amt competitor-red">
										$36,660
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="uber-eats" className="competitor-container">
									<span className="competitor-company ">Uber Eats</span>
									<span className="competitor-commission-amt">30%</span>
									<span id="uber-eats-competitor" className="competitor-price-amt competitor-red">
										$718,536
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="door-dash" className="competitor-container">
									<span className="competitor-company ">Door Dash</span>
									<span className="competitor-commission-amt">20%</span>
									<span id="door-dash-competitor" className="competitor-price-amt competitor-red">
										$479,024
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
								<div id="ordereze" className="competitor-container">
									<span className="competitor-company competitor-green">Ordereze</span>
									<span className="competitor-commission-amt">5%</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
									<span id="ordereze-competitor" className="competitor-price-amt competitor-green">
										$2,388
									</span>
								</div>
							</div>
						</div>
						<div
							className="chart-container"
							style={{ position: 'relative', height: '40vh', width: '80vw' }}
						>
							<canvas id="myChart" width={400} height={400} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PriceCalc;
