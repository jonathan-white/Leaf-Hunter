import React from 'react';
import './Navbar.css';
import Brand from '../Brand';

const Navbar = (props) => {
	return(
		<nav className="navbar App-header">
			<div className="navbar-main">
				<Brand />
				<h4 className={`status ${props.statusClass}`}>
					{props.status}
				</h4>
				<div>
					<div className="score">
						<span className="score-round">Score: {props.score}</span>
						<span className="score-divider"> | </span>
						<span className="score-highest">Highest Score: {props.highScore}</span>
					</div>
					<span className={`countdown-a ${props.timeBonus}`}>Time Remaining: {props.counter}</span>
				</div>
			</div>
			<div className={`countdown-b ${props.timeBonus}`}>Time Remaining: {props.counter}</div>
		</nav>
	);
};

export default Navbar;
