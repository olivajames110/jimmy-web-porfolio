import React, { Component, Fragment } from 'react';
import Slider from './components/slider/slider';
import Competitors from './components/competitors/competitors';
import './priceCalc.css';

class PriceCalc extends Component {
	state = {
		pricePerOrder: 100,
		ordersPerWeek: 50,
		pricePerOrderAmount: 100,
		companies: [
			{ name: 'GrubHub', commissionPercent: 51, annualCost: 0 },
			{ name: 'Eat Street', commissionPercent: 15, annualCost: 0 },
			{ name: 'Chow Now', commissionPercent: 119, annualCost: 0 },
			{ name: 'Menufy', commissionPercent: 1.5, annualCost: 0 },
			{ name: 'Uber Eats', commissionPercent: 30, annualCost: 0 },
			{ name: 'Door Dash', commissionPercent: 20, annualCost: 0 },
			{ name: 'Ordereze', commissionPercent: 5, annualCost: 0 }
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
					commissionPercent: 51,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.2
					).toLocaleString()
				},
				{
					name: 'Eat Street',
					commissionPercent: 15,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.12
					).toLocaleString()
				},
				{
					name: 'Chow Now',
					commissionPercent: 119,
					annualCost: (this.state.pricePerOrder * 12).toLocaleString()
				},
				{
					name: 'Menufy',
					commissionPercent: 1.5,
					annualCost: Math.round(this.state.ordersPerWeek * 1.5 * weeks).toLocaleString()
				},
				{
					name: 'Uber Eats',
					commissionPercent: 30,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.3
					).toLocaleString()
				},
				{
					name: 'Door Dash',
					commissionPercent: 20,
					annualCost: Math.round(
						this.state.pricePerOrder * this.state.ordersPerWeek * weeks * 0.2
					).toLocaleString()
				},
				{
					name: 'Ordereze',
					commissionPercent: 5,
					annualCost: 0
				}
			]
		});
	};

	render() {
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
							<Slider
								title={'Each online order is about '}
								minAmt={'0'}
								maxAmt={'200'}
								defaultValue={this.state.pricePerOrder}
								numberValueDesc={'per order.'}
								dynamicNumber={this.state.pricePerOrder}
								handleNumberUpdate={this.updatePricePerOrder}
							/>
							<Slider
								title={'I receive about '}
								minAmt={'0'}
								maxAmt={'500'}
								defaultValue={this.state.ordersPerWeek}
								numberValueDesc={'online orders in one week.'}
								dynamicNumber={this.state.ordersPerWeek}
								handleNumberUpdate={this.updateOrdersPerWeek}
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
