import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Saved from './pages/Saved';
import './App.css'


class App extends Component {
  state = {
    saved: null
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Wrapper>
            <Route exact path='/' component={Home} />
            <Route exact path='/saved' component={Saved} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
