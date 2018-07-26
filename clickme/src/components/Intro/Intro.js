import React, {Component} from 'react';
import './Intro.css';

class Intro extends Component {
	closeIntro = () => {
		const intro = document.querySelector('.App-intro');
		intro.style.maxHeight = '0';
		intro.style.marginTop = '0';
		intro.style.padding = '38px';
		intro.style.opacity = '0';
	};

	render(){
		return(
			<header className="App-intro d-none d-md-block">
				<div className="App-intro-bg"></div>
				<p>Click on a leaf to earn points, but don't click on any more than once!</p>
				<i className="fas fa-window-close close" onClick={this.closeIntro}></i>
			</header>
		);
	};
};

export default Intro;
