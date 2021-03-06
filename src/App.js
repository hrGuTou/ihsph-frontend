import React, { Component } from 'react';
import NavBar from './components/navBar';
import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clubs from './pages/Clubs';
import Internships from './pages/Internships';
import Activities from './pages/Activities';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div className="App">

            <NavBar />

            <Route exact path='/clubs' component={Clubs} ></Route>

            <Route exact path='/internships' component={Internships} ></Route>

            <Route exact path='/activities' component={Activities} ></Route>

          </div>


        </Router>
      </ParallaxProvider>

    );
  }
}

export default App;
