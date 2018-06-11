import React from 'react';
import './Brand.css';
import logo from '../../Leaf_icon_15.svg';

const Brand = props => {
	return(
		<a href="/Leaf-Hunter/">
			<div className="App-logo-title">
				<img src={logo} alt="logo" className="App-logo" />
				<h1 className="App-title">Leaf Hunter</h1>
			</div>
		</a>
	);
};

export default Brand;