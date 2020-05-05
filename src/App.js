import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// import './assets/style/aplication.scss'
import Container from './components/Container.js';

class App extends Component {
  state={
    one:'1',
    two:'2',
    three:'3',
    showModal:false,
  }
  handleValues = (newState) => {
    this.setState(newState)
  }
  // handleValue = event => {
  //   if (this.state.successAlert) {
  //     this.setState({ successAlert: null });
  //   }
  //   if (this.state.alert) {
  //     this.setState({ alert: null });
  //   }
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }
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
