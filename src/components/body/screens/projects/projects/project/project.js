import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudSunRain, faScroll, faPencilAlt, faChartBar, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import './project.css';

const Project = (props) => {
 return (
  <div className="project-btn">
   <div className="project-btn-icon"/>
   <FontAwesomeIcon icon={this.props.icon}/>
   <div className="project-btn-text">{this.props.buttonText}</div>
  </div>
 )
}

export default Project;
