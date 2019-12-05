import React, { Component } from 'react';
import './competitors';

export default class Competitors extends Component {
	convertFeeNumber = (num, isPercent) => {
		console.log(num, isPercent);
		if (isPercent) {
			return `${num * 100}%`;
		} else {
			return `$${num}`;
		}
	};

	render() {
		const { companies } = this.props;

		const companiesList = companies.map(company => {
			return (
				<div className="competitor-container">
					<span>{company.name}</span>
					<span className="competitor-commission-amt">
						{this.convertFeeNumber(company.fee, company.isPercent)}
						{company.specialInformation ? (
							<span className="special-information">{company.specialInformation}</span>
						) : null}
					</span>
					<span style={{ color: 'var(--priceCalcCompRed)' }}>${company.annualCost}</span>
					<span style={{ color: 'var(--priceCalcCompGreen)' }}>${companies[6].annualCost}</span>
				</div>
			);
		});

		return (
			<div className="competitor-wrapper">
				<div className="companies">
					<div className="companies-table-title">
						<h3>Online Ordering Company</h3>
						<h3>Per Order Fee</h3>
						<h3>Annual Cost From Fees</h3>
						<h3>Annual Ordereze Cost </h3>
					</div>
					{companiesList}
				</div>
			</div>
		);
	}
}

// <div id="grubhub" className="competitor-container">
// <span className="competitor-company ">Grubhub</span>
// <span className="competitor-commission-amt" />
// <span id="grubhub-competitor" className="competitor-price-amt competitor-red">
//    $479,024
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>

// <div id="eatstreet" className="competitor-container">
// <span className="competitor-company ">Eatstreet</span>
// <span className="competitor-commission-amt" />
// <span id="eatstreet-competitor" className="competitor-price-amt competitor-red">
//    $287,414
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
// <div id="chownow" className="competitor-container">
// <span className="competitor-company ">Chownow</span>
// <span className="competitor-commission-amt"> $119</span>
// <span id="chownow-competitor" className="competitor-price-amt competitor-red">
//    $1,428
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
// <div id="menufy" className="competitor-container">
// <span className="competitor-company ">Menufy</span>
// <span className="competitor-commission-amt">$1.50</span>
// <span id="menufy-competitor" className="competitor-price-amt competitor-red">
//    $36,660
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
// <div id="uber-eats" className="competitor-container">
// <span className="competitor-company ">Uber Eats</span>
// <span className="competitor-commission-amt">30%</span>
// <span id="uber-eats-competitor" className="competitor-price-amt competitor-red">
//    $718,536
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
// <div id="door-dash" className="competitor-container">
// <span className="competitor-company ">Door Dash</span>
// <span className="competitor-commission-amt">20%</span>
// <span id="door-dash-competitor" className="competitor-price-amt competitor-red">
//    $479,024
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
// <div id="ordereze" className="competitor-container">
// <span className="competitor-company competitor-green">Ordereze</span>
// <span className="competitor-commission-amt">5%</span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// <span id="ordereze-competitor" className="competitor-price-amt competitor-green">
//    $2,388
// </span>
// </div>
