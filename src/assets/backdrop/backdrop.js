import React from 'react';
import './backdrop.css';

// const Comet = () => <img className="comet" src={comet} alt="svg" />;

const BackDrop = props => <div onClick={props.clickEvent} className="backdrop" />;

export default BackDrop;
