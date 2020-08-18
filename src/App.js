import React from 'react';
import './variables.css';
import './App.css';

function insert(x) {
  document.getElementById('display').innerText += x;
}

function clear() {
  document.getElementById('display').innerText = '';
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
      <div className="inputs__row">
          <button className="btn" id="clear" onClick={insert.bind(this,'')}>&#10140;</button>
          <button className="btn operation" onClick={insert.bind(this, '/')}>&#247;</button>
          <button className="btn operation" onClick={insert.bind(this, '%')}>%</button>
          <button className="btn operation" id="backspace" onClick={clear.bind(this)}>C</button>
        </div>
        <div className="inputs__row">
          <button className="btn operation" onClick={insert.bind(this, '*')}>&#215;</button>
          <button className="btn" onClick={insert.bind(this, '9')}>9</button>
          <button className="btn" onClick={insert.bind(this, '8')}>8</button>
          <button className="btn" onClick={insert.bind(this, '7')}>7</button>
        </div>
        <div className="inputs__row">
          <button className="btn operation" onClick={insert.bind(this, '-')}>&#8722;</button>
          <button className="btn" onClick={insert.bind(this, '6')}>6</button>
          <button className="btn" onClick={insert.bind(this, '5')}>5</button>
          <button className="btn" onClick={insert.bind(this, '4')}>4</button>
        </div>
        <div className="inputs__row">
          <button className="btn operation" onClick={insert.bind(this, '+')}>&#43;</button>
          <button className="btn" onClick={insert.bind(this, '3')}>3</button>
          <button className="btn" onClick={insert.bind(this, '2')}>2</button>
          <button className="btn" onClick={insert.bind(this, '1')}>1</button>
        </div>
        <div className="inputs__row">
          <button className="btn" id="evaluate" onClick={evaluate.bind(this)}>=</button>
          <button className="btn" onClick={insert.bind(this, '')}></button>
          <button className="btn" onClick={insert.bind(this, '0')}>0</button>
          <button className="btn" onClick={insert.bind(this, '.')}>.</button>
        </div>
      </div>

    </div>
  );
}

export default App;
