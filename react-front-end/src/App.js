import React, { Component } from 'react';
import Login from './Container/Login';
import Dashboard from './Container/Dashborad';
import AllFood from './Container/AllFood';
import CreateMenu from './Container/CreateMenu';
import ViewMenu from './Container/ViewMenu';
import axios from './axious';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  state = {
    username : null
  }

  _changeState = (property, content) => {
    this.setState({[property] : content})
  }

  render() {
    return (

      <div className="App">
      {/* <BrowserRouter>
      <AllFood />
      </BrowserRouter> */}
        
        {/* <CreateMenu /> */}
        {/* <ViewMenu /> */}

        {this.state.username ? <Dashboard /> : <Login changeState={this._changeState} />}


        {/* <BrowserRouter>
          <div className="App">
            <Route exact path="/" render={(props) => {
              return <Login {...props} username={this.state.username} changeState={this._changeState} />
            }} />
            <Route path="/images/:imageId" render={(props) => {
              return <DetailScreen {...props} username={this.state.username} />
            }} /> 
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
