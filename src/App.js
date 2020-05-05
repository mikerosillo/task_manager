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
        <h1>TASK MANAGER</h1>
      </header>
      <Container handleValues={this.handleValues} one={this.state.one} two={this.state.two} three={this.state.three}/>
    </div>
    )
  };
}

export default App;
