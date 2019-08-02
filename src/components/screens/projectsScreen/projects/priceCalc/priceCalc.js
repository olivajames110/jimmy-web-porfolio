import React, { Component, Fragment } from 'react';
import Slider from './components/slider/slider';
import Competitors from './components/competitors/competitors';
import './css/priceCalcMain.css';

class PriceCalc extends Component {
	state = {
		pricePerOrder: 100,
		ordersPerWeek: 50,
		pricePerOrderAmount: 100,
		companies: [
			{ name: 'GrubHub', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Eat Street', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Chow Now', fee: 119, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Menufy', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Uber Eats', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Door Dash', fee: null, specialInformation: null, isPercent: null, annualCost: 0 },
			{ name: 'Ordereze', fee: null, specialInformation: null, isPercent: null, annualCost: 0 }
		]
	};

	componentDidMount() {
		this.handleAnnualCost();
	}

	updatePricePerOrder = e => {
		this.setState({
			pricePerOrder: e.target.value
		});

		this.handleAnnualCost();
	};

	updateOrdersPerWeek = e => {
		this.setState({
			ordersPerWeek: e.target.value
		});

		this.handleAnnualCost();
	};

	handleAnnualCost = () => {
		let weeks = 52;
		this.setState({
			companies: [
				{
					name: 'GrubHub',
					fee: 0.2,
					specialInformation: false,
					isPercent: true,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.2
					).toLocaleString()
				},
				{
					name: 'Eat Street',
					fee: 0.12,
					specialInformation: false,
					isPercent: true,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.12
					).toLocaleString()
				},
				{
					name: 'Chow Now',
					fee: 119,
					specialInformation: 'monthly (annual contract)',
					isPercent: false,
					annualCost: (this.state.companies[2].fee * 12).toLocaleString()
				},
				{
					name: 'Menufy',
					fee: 1.5,
					specialInformation: false,
					isPercent: false,
					annualCost: Math.round(this.state.ordersPerWeek * 1.5 * weeks).toLocaleString()
				},
				{
					name: 'Uber Eats',
					fee: 0.3,
					specialInformation: false,
					isPercent: true,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.3
					).toLocaleString()
				},
				{
					name: 'Door Dash',
					fee: 0.2,
					specialInformation: false,
					isPercent: true,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.2
					).toLocaleString()
				},
				{
					name: 'Ordereze',
					fee: 0.05,
					specialInformation: 'caps monthly at $199',
					isPercent: true,
					annualCost: Math.round(
						ozMonthlyPricing(this.state.pricePerOrder, this.state.ordersPerWeek) * 12
					).toLocaleString()
				}
			]
		});
		function ozMonthlyPricing(avgPrice, orderQty) {
			let totalPrice = avgPrice * orderQty * 0.05 * 4.3;
			if (totalPrice <= 199) {
				return totalPrice;
			} else {
				return 199;
			}
		}
	};

	render() {
		return (
			<Fragment>
				<div class="range-widget-container">
					<div className="bg" />
					<div className="range-widget-container">
						<div className="intro-header">
							<h1>Online Ordering Commission Calculator</h1>
							<span className="description">
								How much money are you giving away to various third-party online ordering companies?
							</span>
						</div>
						<div className="range-container">
							<Slider
								title={'The average price of an order placed online is about'}
								minAmt={'0'}
								maxAmt={'200'}
								defaultValue={this.state.pricePerOrder}
								numberValueDesc={'per order.'}
								dynamicNumber={this.state.pricePerOrder}
								handleNumberUpdate={this.updatePricePerOrder}
								isPercent={true}
							/>
							<Slider
								title={'In a span of one week, I receive an average of about'}
								minAmt={'0'}
								maxAmt={'500'}
								defaultValue={this.state.ordersPerWeek}
								numberValueDesc={'online orders.'}
								dynamicNumber={this.state.ordersPerWeek}
								handleNumberUpdate={this.updateOrdersPerWeek}
								isPercent={false}
							/>
						</div>
						<Competitors companies={this.state.companies} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default PriceCalc;
