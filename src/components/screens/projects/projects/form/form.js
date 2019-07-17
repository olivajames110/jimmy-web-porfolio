import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCloudSunRain, faScroll} from '@fortawesome/free-solid-svg-icons';
import './form.css';

const Form = (props) => {
	return (
		<div className="form-wrapper fade-in">
			<div className="form-modal">
				<div className="form-modal-title">
					<h1>Form Title</h1>
				</div>
				<div className="form-modal-inputs">
					<form>
						<div className="form-modal-row">
							<div className="form-modal-input-container">
								<label>First Name</label>
								<input type="text" />
							</div>
							<div className="form-modal-input-container">
								<label>Last Name</label>
								<input type="text" />
							</div>
						</div>
						<div className="form-modal-input-container">
							<label>Street Address</label>
							<input type="text" />
						</div>
						<div className="form-modal-input-container">
							<label>Lable Name</label>
							<input type="text" />
						</div>
						<div className="form-modal-input-container">
							<label>Lable Name</label>
							<input type="text" />
						</div>
						<div className="form-modal-input-container">
							<label>Lable Name</label>
							<input type="text" />
						</div>
						<div className="form-modal-input-container">
							<label>Lable Name</label>
							<input type="text" />
						</div>
						<input className="submit" type="submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
