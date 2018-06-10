import React from 'react';

const ImageCard = props => {
	return (
		<div className="card leaf">
			<img 
				src={props.source} 
				alt={props.name}
				onClick={() => props.handleClick(props.id)}
			/>
		</div>
	);
}

export default ImageCard;