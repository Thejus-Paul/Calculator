import React from 'react';
import './variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="display"></div>
      <div className="inputs">
      <div className="inputs__row">
          <button className="btn">C</button>
          <button className="btn">()</button>
          <button className="btn">/</button>
          <button className="btn">%</button>
        </div>
        <div className="inputs__row">
          <button className="btn">x</button>
          <button className="btn">9</button>
          <button className="btn">8</button>
          <button className="btn">7</button>
        </div>
        <div className="inputs__row">
          <button className="btn">-</button>
          <button className="btn">6</button>
          <button className="btn">5</button>
          <button className="btn">4</button>
        </div>
        <div className="inputs__row">
          <button className="btn">+</button>
          <button className="btn">3</button>
          <button className="btn">2</button>
          <button className="btn">1</button>
        </div>
        <div className="inputs__row">
          <button className="btn" id="evaluate">=</button>
          <button className="btn">0</button>
          <button className="btn">.</button>
        </div>
      </div>

    </div>
  );
}

export default App;
