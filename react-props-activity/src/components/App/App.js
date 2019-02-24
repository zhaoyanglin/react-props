import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import EnterNumber from '../EnterNumber/EnterNumber';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <EnterNumber />
      </>
    );
  }
}

export default App;
