import React, { Component } from 'react';
import logo from './Leaf_icon_15.svg';
import './App.css';
import ImageCard from './components/ImageCard/ImageCard';
import images from './images.json';

class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0,
    highScore: 0,
    correctChoice: null
  };

  handleIncrement = () => {
    if(this.state.score === 11){
      this.winGame();
    }

    if (this.state.score >= this.state.highScore) {
      this.setState({ 
        score: this.state.score + 1,
        highScore: this.state.highScore + 1 
      });
    } else {
      this.setState({ score: this.state.score + 1 });
    }
  };

  // reset the clicked array, score and shuffle images
  resetGame = () => {
    this.setState({
      clicked: [],
      score: 0,
      images: this.shuffleImages(this.state.images),
    });
  };

  winGame = () => {
    // DIsplay celebration once the game has been won!
    alert('You win!!!');
  };  

  correctGuess = () => {
    this.setState({
      correctChoice: true,
    });
  };

  incorrectGuess = () => {
    this.setState({
      correctChoice: false,
    });
  };

  handleClick = i => {
    const clickedItems = this.state.clicked;

    // If the player has already clicked the image reset the game
    if(clickedItems.includes(i)) {
      this.incorrectGuess();
      this.resetGame();
      return;
    } else {
      // Increment the score and highScore
      this.handleIncrement();
      this.correctGuess();
    }

    // record the index of the clicked image and reshuffle images
    this.setState({ 
      clicked: [...clickedItems, i],
      images: this.shuffleImages(this.state.images)
    });

  };

  // Shuffle image array
  shuffleImages = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );

  closeIntro = () => {
    const intro = document.querySelector('.App-intro');
    intro.style.maxHeight = '0';
    intro.style.marginTop = '0';
    intro.style.padding = '38px';
    intro.style.opacity = '0';
  };

  render() {
    const guessedCorrectly = this.state.correctChoice;

    let status;
    let highlight = 'white';
    let shake = "";
    if(guessedCorrectly) {
      status = "You guessed correctly!";
    } else if (guessedCorrectly === false) {
      status = "You guessed incorrectly!";
      highlight = 'danger';
      shake = "shake";
    } else {
      status = "Click a leaf below";
    }

    return (
      <div className="App">
        <nav className="navbar App-header">
          <a href="/Leaf-Hunter">
            <div className="App-logo-title">
              <img src={logo} alt="logo" className="App-logo" />
              <h1 className="App-title">Leaf Hunter</h1>
            </div>
          </a>
          <h4 className={`status text-${highlight}`}>{status}</h4>
          <h4>Score: {this.state.score} | Highest Score: {this.state.highScore}</h4>
        </nav>
        <header className="App-intro">
          <div className="App-intro-bg"></div>
          <p>Click on a leaf to earn points, but don't click on any more than once!</p>
          <i className="fas fa-window-close close" onClick={this.closeIntro}></i>
        </header>
        <div className="container">
          <div className={`wrapper row ${shake}`}>
          {this.shuffleImages(this.state.images).map(image => (
            <ImageCard 
              id={image.id}
              name={image.name}
              source={image.src} 
              key={image.id} 
              handleClick={this.handleClick}
            />
          ))}
          </div>
        </div>
        <footer className="App-footer">
          <a href="/Leaf-Hunter">
            <div className="App-logo-title">
              <img src={logo} alt="logo" className="App-logo" />
              <h1 className="App-title">Leaf Hunter</h1>
            </div>
          </a>
          <a href="https://github.com/jonathan-white">
            Jon White &copy; 2018
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
