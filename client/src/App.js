import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchCard from './components/SearchCard';
import ResultsCard from './components/ResultsCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <SearchCard />
        <ResultsCard />
      </div>
    );
  }
}

export default App;
