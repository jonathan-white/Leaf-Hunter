import React from 'react';
import './Footer.css';
import Brand from '../Brand';

const Footer = (props) => {
	return (
		<footer className="App-footer">
			<Brand />
			<a href="http://www.jwhite.co" className="footer-link">Jonathan White &copy; 2018</a>
		</footer>
	);
};

export default Footer;
