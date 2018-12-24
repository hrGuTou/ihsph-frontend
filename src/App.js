import React, { Component } from 'react';
import NavBar from './components/navBar';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <p1>Hello World! </p1>
      </div>
    );
  }
}

export default App;
