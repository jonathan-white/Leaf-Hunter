import React from 'react';
import './Footer.css';
import Brand from '../Brand/Brand';

const Footer = props => {
	return (
		<footer className="App-footer">
			<Brand />
			<a href="https://github.com/jonathan-white">
			  Jon White &copy; 2018
			</a>
		</footer>
	);
};

export default Footer;