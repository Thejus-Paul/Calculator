import React from 'react';
import './variables.css';
import './App.css';

function insert(x) {
  document.getElementById('display').innerText += x;
}

function clear() {
  document.getElementById('display').innerText = '';
}

function backspace() {
  let text = document.getElementById('display').innerText;
  text = text.split('');
  text.pop();
  document.getElementById('display').innerText = text.join('');
}

function evaluate() {
  let value = eval(document.getElementById('display').innerText);
  clear();
  if(!Number.isSafeInteger(value)) {
    document.getElementById('display').innerText = value.toPrecision(3);
  } else {
    document.getElementById('display').innerText = value;
  }
}

function App() {
  return (
    <div className="App">
      <span className="display" id="display"></span>
      <div className="inputs">
      <div className="inputs__row row--1">
          <button className="btn" id="clear" onClick={backspace.bind(this)} aria-label="Backspace">&#10140;</button>
          <button className="btn operation" onClick={insert.bind(this, '/')} aria-label="Divide">&#247;</button>
          <button className="btn operation" onClick={insert.bind(this, '%')} aria-label="Modulus">%</button>
          <button className="btn operation" id="backspace" onClick={clear.bind(this)} aria-label="Clear">C</button>
        </div>
        <div className="inputs__row row--2">
          <button className="btn operation" onClick={insert.bind(this, '*')} aria-label="Multiply">&#215;</button>
          <button className="btn" onClick={insert.bind(this, '9')} aria-label="9">9</button>
          <button className="btn" onClick={insert.bind(this, '8')} aria-label="8">8</button>
          <button className="btn" onClick={insert.bind(this, '7')} aria-label="7">7</button>
        </div>
        <div className="inputs__row row--3">
          <button className="btn operation" onClick={insert.bind(this, '-')} aria-label="Subtract">&#8722;</button>
          <button className="btn" onClick={insert.bind(this, '6')} aria-label="6">6</button>
          <button className="btn" onClick={insert.bind(this, '5')} aria-label="5">5</button>
          <button className="btn" onClick={insert.bind(this, '4')} aria-label="4">4</button>
        </div>
        <div className="inputs__row row--4">
          <button className="btn operation" onClick={insert.bind(this, '+')} aria-label="Add">&#43;</button>
          <button className="btn" onClick={insert.bind(this, '3')} aria-label="3">3</button>
          <button className="btn" onClick={insert.bind(this, '2')} aria-label="2">2</button>
          <button className="btn" onClick={insert.bind(this, '1')} aria-label="1">1</button>
        </div>
        <div className="inputs__row row--5">
          <button className="evaluate" onClick={evaluate.bind(this)} aria-label="Evaluate">=</button>
          <span className="space"></span>
          <button className="btn" onClick={insert.bind(this, '0')} aria-label="0">0</button>
          <button className="btn" onClick={insert.bind(this, '.')} aria-label=".">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
