import React, { Component } from 'react';
import './App.css';
import tyler from './tyler.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={tyler} alt="Tyler"/>
        <div>
          <h1>Tyler Graf</h1>
          <span>A special guy.</span>
        </div>
      </div>
    );
  }
}

export default App;
