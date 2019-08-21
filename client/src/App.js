import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
