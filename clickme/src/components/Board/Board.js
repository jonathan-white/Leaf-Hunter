import React from 'react';
import './Board.css';
import Image from '../Image';

const Board = (props) => {
	return (
		<main className="container">
			<div className={`wrapper row ${props.shake ? 'shake' : ''}`}>
				{props.images.map(image => (
					<Image
						key={image.id}
						id={image.id}
						name={image.name}
						source={image.src}
						handleClick={props.onClick}
					/>
				))}
			</div>
		</main>
	);
};

export default Board;
