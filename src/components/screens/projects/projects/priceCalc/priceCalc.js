import React, { Fragment } from 'react';
import './priceCalc.css';

const PriceCalc = (props) => {
	return (
		<Fragment>
			<div class="range-widget-container fade-in">
				<div class="range-container">
					<div class="range-slider-wrapper">
						<div id="avg-price">
							<div class="range-title">
								<span class="range-title-step">Step 1</span>
								<span class="range-title-desc">
									Choose the average price of an online order that is placed at your restaurant.
								</span>
							</div>
							<span
								id="rs-bullet--price"
								class="rs-label"
								style={{
									left: '43.61%'
								}}
							>
								$98
							</span>
						</div>
						<div class="box-minmax bottom-rounded-corners">
							<div class="range-slider-input">
								<input
									id="rs-range-line--price"
									class="range-slider__range"
									type="range"
									value="100"
									min="0"
									max="200"
									style={{
										background:
											'linear-gradient(90deg, rgb(12, 78, 126) 49%, rgb(215, 220, 223) 49.1%)'
									}}
								/>
							</div>
							<div class="box-minmax-key">
								<span>$0</span>
								<span>$200</span>
							</div>
						</div>
					</div>
					<div class="range-slider-wrapper">
						<div id="avg-amt">
							<div class="range-title">
								<span class="range-title-step">Step 2</span>
								<span class="range-title-desc">
									Choose the average number of online orders that you receive in one week.
								</span>
							</div>
							<span
								id="rs-bullet--amt"
								class="odometer rs-label"
								style={{
									left: '84.6%'
								}}
							>
								470
							</span>
						</div>
						<div class="box-minmax bottom-rounded-corners">
							<div class="range-slider-input">
								<input
									id="rs-range-line--amt"
									class="range-slider__range"
									type="range"
									value="200"
									min="0"
									max="500"
									style={{
										background:
											'linear-gradient(90deg, rgb(12, 78, 126) 94%, rgb(215, 220, 223) 94.1%)'
									}}
								/>
							</div>
							<div class="box-minmax-key">
								<span>0</span>
								<span>500</span>
							</div>
						</div>
					</div>
				</div>
				<div class="competitor-wrapper">
					<div class="range-title">
						<span class="range-title-step">Step 3</span>
						<span class="range-title-desc">
							Compare companies and see how much money you could be save by using Ordereze.
						</span>
					</div>
					<div class="list-of-competitors bottom-rounded-corners">
						<div id="grubhub" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Grubhub</span>
								<span class="competitor-commission-amt">
									at
									<span class="odometer">~20%</span>
									per order is costing you annually
								</span>
							</div>
							<span id="grubhub-competitor" class="competitor-price-amt competitor-red">
								$479,024
							</span>
						</div>
						<div id="eatstreet" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Eatstreet</span>
								<span class="competitor-commission-amt">
									at
									<span>12%</span>
									per order is costing you annually
								</span>
							</div>
							<span id="eatstreet-competitor" class="competitor-price-amt competitor-red">
								$287,414
							</span>
						</div>
						<div id="chownow" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Chownow</span>
								<span class="competitor-commission-amt">
									at
									<span>$119</span>
									per month (with annual contract) is costing you annually
								</span>
							</div>
							<span id="chownow-competitor" class="competitor-price-amt competitor-red">
								$1,428
							</span>
						</div>
						<div id="menufy" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Menufy</span>
								<span class="competitor-commission-amt">
									at
									<span>$1.50</span>
									per order is costing you annually
								</span>
							</div>
							<span id="menufy-competitor" class="competitor-price-amt competitor-red">
								$36,660
							</span>
						</div>

						<div id="uber-eats" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Uber Eats</span>
								<span class="competitor-commission-amt">
									at
									<span>30%</span>
									per order is costing you annually
								</span>
							</div>

							<span id="uber-eats-competitor" class="competitor-price-amt competitor-red">
								$718,536
							</span>
						</div>

						<div id="door-dash" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-red">Door Dash</span>
								<span class="competitor-commission-amt">
									at
									<span>20%</span>
									per order is costing you annually
								</span>
							</div>
							<span id="door-dash-competitor" class="competitor-price-amt competitor-red">
								$479,024
							</span>
						</div>
						<div id="ordereze" class="competitor-container">
							<div class="competitor-company-commission-wrapper">
								<span class="competitor-company competitor-green">Ordereze</span>
								<span class="competitor-commission-amt">
									at
									<span>5%</span>
									AND
									<span>capping monthly at $199</span>
									is costing you annually
								</span>
							</div>
							<span id="ordereze-competitor" class="competitor-price-amt competitor-green">
								$2,388
							</span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PriceCalc;
