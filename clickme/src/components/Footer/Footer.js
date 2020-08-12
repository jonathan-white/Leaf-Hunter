import React from 'react';
import './Footer.css';
import Brand from '../Brand';

const Footer = (props) => {
	return (
		<footer className="App-footer">
			<Brand />
			<span className={`footer-countdown ${props.timeBonus}`}>Time Remaining: {props.counter}</span>
			<a href="http://www.jwhite.co" className="footer-link">Jonathan White &copy; 2020</a>
		</footer>
	);
};

export default Footer;
