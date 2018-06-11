import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import images from './images.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      clicked: [],
      score: 0,
      highScore: 0,
      correctChoice: null
    };
  }

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
    console.log('You win!!');
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

  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score} 
          highScore={this.state.highScore} 
          correctChoice={this.state.correctChoice}
        />
        <Intro />
        <Board 
          images={this.state.images} 
          correctChoice={this.state.correctChoice} 
          shuffleImages={this.shuffleImages}
          onClick={this.handleClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
