import React from 'react';
import './Navbar.css';
import Brand from '../Brand/Brand';

const Navbar = props => {
	const guessedCorrectly = props.correctChoice;

	let status;
	let highlight = 'white';

	if(guessedCorrectly) {
		status = "You guessed correctly!";
	} else if (guessedCorrectly === false) {
		status = "You guessed incorrectly!";
		highlight = 'danger';
	} else {
		status = "Click a leaf below";
	}
	return(
		<nav className="navbar App-header">
			<Brand />
			<h4 className={`status text-${highlight}`}>{status}</h4>
			<h4>Score: {props.score} | Highest Score: {props.highScore}</h4>
		</nav>
	);
};

export default Navbar;