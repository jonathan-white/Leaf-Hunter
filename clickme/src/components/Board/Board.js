import React from 'react';
import './Board.css';
import Image from '../Image/Image';

const Board = props => {

	const guessedCorrectly = props.correctChoice;

	let shake = "";
	if(guessedCorrectly === false) {
		shake = "shake";
	}

	return (
		<main className="container">
			<div className={`wrapper row ${shake}`}>
				{props.shuffleImages(props.images).map(image => (
					<Image 
						id={image.id}
						name={image.name}
						source={image.src} 
						key={image.id} 
						handleClick={props.onClick}
					/>
				))}
			</div>
		</main>
	);

};

export default Board;