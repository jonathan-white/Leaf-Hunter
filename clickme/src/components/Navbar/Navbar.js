import React from 'react';
import './Navbar.css';
import Brand from '../Brand/Brand';

const Navbar = props => {
	return(
		<nav className="navbar App-header">
			<Brand />
			<h4 className={`status ${props.statusClass}`}>
				{props.status}
			</h4>
			<div>
				<h4>Score: {props.score} | Highest Score: {props.highScore}</h4>
				<span>Time Remaining: {props.counter}</span>
			</div>
		</nav>
	);
};

export default Navbar;