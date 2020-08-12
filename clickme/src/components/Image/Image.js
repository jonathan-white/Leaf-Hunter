import React from 'react';
import './Image.css';

const Image = props => {
	return (
		<div className="card leaf" onClick={() => props.handleClick(props.id)}>
			<img 
				src={process.env.PUBLIC_URL + props.source} 
				alt={props.name}
			/>
		</div>
	);
}

export default Image;