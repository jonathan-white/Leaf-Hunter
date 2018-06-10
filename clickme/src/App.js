import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './components/ImageCard/ImageCard';
import images from './images.json';

class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0,
    highScore: 0,
  };

  handleIncrement = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({ 
        score: this.state.score + 1,
        highScore: this.state.highScore + 1 
      });
    } else {
      this.setState({ score: this.state.score + 1 });
    }
  };

  resetGame = () => {
    this.setState({
      clicked: [],
      score: 0,
      images: this.shuffleImages(this.state.images)
    });
  };

  handleClick = i => {
    const clickedItems = this.state.clicked;
    if(clickedItems.includes(i)) {
      this.resetGame();
      return;
    }
    this.setState({ 
      clicked: [...clickedItems, i],
      images: this.shuffleImages(this.state.images)
    });
    this.handleIncrement();
    // console.log(this.state.clicked);
  };

  shuffleImages = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );

  render() {
    return (
      <div className="App">
        <nav className="navbar App-header">
          <h1 className="App-title">Click Me</h1>
          <h4>Click an image below</h4>
          <h4>Score: {this.state.score} | Highest Score: {this.state.highScore}</h4>
        </nav>
        <header className="jumbotron App-intro">
          To get started, click on an image below.
        </header>
        <div className="container">
          <div className="wrapper row">
          {this.shuffleImages(this.state.images).map(image => (
            <ImageCard 
              id={image.id}
              source={image.src} 
              key={image.id} 
              handleClick={this.handleClick}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
