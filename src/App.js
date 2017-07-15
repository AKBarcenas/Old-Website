import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var FontAwesome = require('react-fontawesome');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello my name is Alexander Barcenas. </h1>
          <h3>I have studied at UCSD for three years and plan on finishing my studies June 2018.</h3>
          <h3>I'm currently rebulding my website using React, but you can check out my resume and profiles below.</h3>
        </div>
        <div className="Links">
          <a href="http://akbarcenas.github.io/AlexanderBarcenasResume.pdf" className="button">Resume</a>
          <div>
            <a href="https://github.com/AKBarcenas">
              <FontAwesome name="github" size="2x" className="Icons"/>
            </a>
            <a href="https://www.linkedin.com/in/alexander-barcenas-792196107">
              <FontAwesome name="linkedin-square" size="2x" className="Icons"/>
            </a>
            <a href="https://www.hackerrank.com/Alexbrc">
              <FontAwesome name="code" size="2x" className="Icons"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
