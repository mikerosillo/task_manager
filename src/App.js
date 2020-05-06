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
    successAlert:null,
    tasks:[null],
    taskName:'',
    taskDescription:'',
    taskEstimatedTime:'',
    hours:'',
    minutes:'',
    seconds:'',
  }
  handleValues = (newState) => {
    this.setState(newState)
  }
  handleValue = event => {
    // if (this.state.successAlert) {
    //   this.setState({ successAlert: null });
    // }
    // if (this.state.alert) {
    //   this.setState({ alert: null });
    // }
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    alert(name)
  }
  render = () => {
    return(
    <div className="App">
      <header className="App-header">
        <h1>TASK MANAGER</h1>
      </header>
      <Container handleValues={this.handleValues} taskDescription={this.taskDescription} taskName={this.taskName} tasks={this.tasks} taskEstimatedTime={this.taskEstimatedTime} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
    </div>
    )
  };
}

export default App;
