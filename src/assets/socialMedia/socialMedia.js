import React from 'react';
import './css/socialMedia.css';
import { LinkedInIcon, GitHubIcon, FacebookIcon } from '../svgs/svgs';
// const Comet = () => <img className="comet" src={comet} alt="svg" />;

const SocialMedia = props => (
	<div className="social-media-container">
		<div className="position-container">
			<div className="social-media-wrapper">
				<FacebookIcon width={props.width} color={props.color} />
			</div>
			<div className="social-media-wrapper">
				<GitHubIcon width={props.width} color={props.color} />
			</div>
			<div className="social-media-wrapper">
				<LinkedInIcon width={props.width} color={props.color} />
			</div>
		</div>
	</div>
);

export default SocialMedia;
