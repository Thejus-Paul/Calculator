import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      expression: ''
    }
    this.insert = this.insert.bind(this)
    this.clear = this.clear.bind(this)
    this.backspace = this.backspace.bind(this)
    this.evaluate = this.evaluate.bind(this)
    this.credits = this.credits.bind(this)
  }

  insert = (x) => {
  this.setState({
    expression: document.getElementById('display').innerText + x
  })
  document.getElementById('display').innerText += x
  console.log(this.state.expression)
  }

  
  clear = () => {
    this.setState({
      expression: ''
    })
    document.getElementById('display').innerText = ''
  }
  
  backspace = () => {
    let text = document.getElementById('display').innerText
    text = text.split('')
    text.pop()
    document.getElementById('display').innerText = text.join('')
    this.setState({
      expression: text.join('')
    })
    console.log(this.state.expression)
  }
  
  evaluate = () => {
    document.getElementById('display').innerHTML = eval(this.state.expression)
  }
  
  credits = () => {
    this.clear()
    alert("Made with ♥ by Thejus Paul \nGithub: https://github.com/Thejus-Paul")
  }

  render() {
    return (
      <div className="App">
        <span className="display" id="display"></span>
        <div className="inputs">
        <div className="inputs__row row--1">
            <button className="btn" id="clear" onClick={this.backspace} aria-label="Backspace">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#00bfa5"><path d="M137.6,28.66667h-103.2c-12.66493,0 -22.93333,10.2684 -22.93333,22.93333v68.8c0,12.66493 10.2684,22.93333 22.93333,22.93333h103.2c12.66493,0 22.93333,-10.2684 22.93333,-22.93333v-68.8c0,-12.66493 -10.2684,-22.93333 -22.93333,-22.93333zM120.4,91.73333h-60.69307l13.14653,13.14653c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-22.93333,-22.93333c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693l22.93333,-22.93333c2.24173,-2.24173 5.8652,-2.24173 8.10693,0c2.24173,2.24173 2.24173,5.8652 0,8.10693l-13.14653,13.14653h60.69307c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333z"></path></g></g></svg>
            </button>
            <button className="btn operation" onClick={()=>this.insert('/')} aria-label="Divide">&#247;</button>
            <button className="btn operation" onClick={()=>this.insert('%')} aria-label="Modulus">%</button>
            <button className="btn operation" id="backspace" onClick={this.clear} aria-label="Clear">&#x2718;</button>
          </div>
          <div className="inputs__row row--2">
            <button className="btn operation" onClick={()=>this.insert('*')} aria-label="Multiply">&#215;</button>
            <button className="btn" onClick={()=>this.insert(9)} aria-label="9">9</button>
            <button className="btn" onClick={()=>this.insert(8)} aria-label="8">8</button>
            <button className="btn" onClick={()=>this.insert(7)} aria-label="7">7</button>
          </div>
          <div className="inputs__row row--3">
            <button className="btn operation" onClick={()=>this.insert('-')} aria-label="Subtract">&#8722;</button>
            <button className="btn" onClick={()=>this.insert(6)} aria-label="6">6</button>
            <button className="btn" onClick={()=>this.insert(5)} aria-label="5">5</button>
            <button className="btn" onClick={()=>this.insert(4)} aria-label="4">4</button>
          </div>
          <div className="inputs__row row--4">
            <button className="btn operation" onClick={()=>this.insert('+')} aria-label="Add">&#43;</button>
            <button className="btn" onClick={()=>this.insert(3)} aria-label="3">3</button>
            <button className="btn" onClick={()=>this.insert(2)} aria-label="2">2</button>
            <button className="btn" onClick={()=>this.insert(1)} aria-label="1">1</button>
          </div>
          <div className="inputs__row row--5">
            <button className="btn operation" onClick={this.evaluate}>&#x3d;</button>
            <svg className="btn info" onClick={this.credits} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fff"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM86,37.84c-5.69958,0 -10.32,4.62042 -10.32,10.32c0,5.69958 4.62042,10.32 10.32,10.32c5.69958,0 10.32,-4.62042 10.32,-10.32c0,-5.69958 -4.62042,-10.32 -10.32,-10.32zM72.24,72.24v6.88h3.44h3.44v44.72h-3.44h-3.44v6.88h3.44h3.44h13.76h3.44h3.44v-6.88h-3.44h-3.44v-51.6h-3.44h-13.76z"></path></g></g></svg>
            <button className="btn" onClick={()=>this.insert(0)} aria-label="0">0</button>
            <button className="btn" onClick={()=>this.insert('.')} aria-label=".">.</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
