import React from 'react';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

// backgroundColor , height , width, text , icon
const Button = props => {
	const styles = {
		backgroundColor: props.backgroundColor,
		color: props.color,
		width: props.width,
		height: props.height,
		border: props.border,
		borderColor: props.borderColor,
		borderRadius: props.borderRadius,
		padding: props.padding,
		padding: props.padding,
		margin: props.margin
	};
	return (
		<div style={styles} className="button-wrapper">
			<div className="button_text">{props.text}</div>
			<div className="icon">
				<FontAwesomeIcon icon={faCloudSunRain} />
			</div>
		</div>
	);
};

export default Button;
