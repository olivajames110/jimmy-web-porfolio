import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudSunRain, faScroll, faPencilAlt, faChartBar, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import Form from '../form/form';
import PriceCalc from '../priceCalc/priceCalc';
import Home from '../../home/home';
import './projects.css';

class Projects extends Component {
	state = {
		currentProject: '',
		currentProjectName: 'Choose a project above!',
		viewType: ''
	};

	handleFormChange = () => {
		this.setState({
			currentProject: <Form/>,
			currentProjectName: 'Form'
		});
	};

	handleWeatherChange = () => {
		this.setState({
			currentProject: <Home/>,
			currentProjectName: 'Drawing Board'
		});
	};

	handlePriceCalcChange = () => {
		this.setState({
			currentProject: <PriceCalc/>,
			currentProjectName: 'Price Calculator'
		});
	};

	handleChange() {
		return <div className="project-screen-cont fade-in">{this.state.currentProject}</div>
	}

	handleCheckActive(p) {
		return (this.state.currentProjectName == p
			? 'project-is-active'
			: '')
	}

	render() {
		return (
			<Fragment>
				<div
					style={{
					height: this.state.currentProject == ''
						? '100%'
						: '70%'
				}}
					className="interior-body">
					<div id="projects" className="screen-section-container">
						<h1 className="screen-section-container-title">Projects</h1>
						<p className="screen-section-container-desc">
							Here are a few examples of some small projects that I have been working on for
							fun. Please don't judge, none of them are fully complete, this is more of a
							playground where I can work and experiment with them. Enjoy!
						</p>
						<div className="project-btn-container">
							<div onClick={this.handleWeatherChange} className="project-btn">
								<div className="project-btn-icon">
									<FontAwesomeIcon icon={faPencilAlt}/>
								</div>
								<div className="project-btn-text">Drawing Board</div>
							</div>
							<div
								state={this.state.currentProject}
								onClick={this.handleFormChange}
								className={`project-btn ${this.handleCheckActive('Form')}`}>
								<div className="project-btn-icon"/>
								<FontAwesomeIcon icon={faScroll}/>
								<div className="project-btn-text">Form</div>
							</div>
							<div className="project-btn">
								<div className="project-btn-icon"/>
								<FontAwesomeIcon icon={faChartBar}/>
								<div className="project-btn-text">Dashboard</div>
							</div>
							<div className="project-btn">
								<div className="project-btn-icon"/>
								<FontAwesomeIcon icon={faCloudSunRain}/>
								<div className="project-btn-text">Weather App</div>
							</div>
							<div
								onClick={this.handlePriceCalcChange}
								className={`project-btn ${this.handleCheckActive('Price Calculator')}`}>
								<div className="project-btn-icon"/>
								<FontAwesomeIcon icon={faMoneyBill}/>
								<div className="project-btn-text">Price Calc</div>
							</div>
						</div>
					</div>
					<div className="current-project">{this.state.currentProjectName}</div>
				</div>
				{this.handleChange()}
			</Fragment>
		);
	}
}

export default Projects;
