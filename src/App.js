import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Current from './Components/Current';
import WantTo from './Components/WantTo';
import Read from './Components/Read';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Current />
        <WantTo />
        <Read />
      </div>
    );
  }
}

export default App;
