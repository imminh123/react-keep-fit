import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import BodyHome from './Component/BodyHome';
import Footer from './Component/Footer';
import MainNavbar from './Component/MainNavbar';
import Quote from './Component/Quote';
import Selection from './Component/Selection';
import User from './Component/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        {/* <Quote /> */}
        {/* <Selection /> */}
        {/* <Navbar/>  */}
        {/* <BodyHome/> */}
        <User/>
        <Footer />
      </div>
    );
  }
}

export default App;
