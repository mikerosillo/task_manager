import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// import './assets/style/aplication.scss'
import Container from './components/Container.js';

class App extends Component {
  state={
    one:'1',
    two:'2',
    three:'3'
  }
  handleValues = (newState) => {
    this.setState(newState)
  }
  render = () => {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div>some text</div>
      </header>
      <Container handleValues={this.handleValues} one={this.state.one} two={this.state.two} three={this.state.three}/>
    </div>
    )
  };
}

export default App;
