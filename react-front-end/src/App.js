import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import BodyHome from './Component/BodyHome';
import Footer from './Component/Footer';
import MainNavbar from './Component/MainNavbar';
import Quote from './Component/Quote';
import Selection from './Component/Selection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        <Quote />
        <Selection />
      </div>
    );
  }
}

export default App;
