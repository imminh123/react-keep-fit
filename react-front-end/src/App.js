import React, { Component } from 'react';
import Login from './Container/Login';
import Dashboard from './Container/Dashborad';
import AllFood from './Container/AllFood';
import CreateMenu from './Container/CreateMenu';
import ViewMenu from './Container/ViewMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import User from "./Container/User";
import FoodDetail from "./Container/FoodDetail";

class App extends Component {

  state = {
    username : null,
    userId: null
  }

  _changeState = (property, content) => {
    this.setState({[property] : content})
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>        
            <Route path="/dashboard" component={(props) => <Dashboard {...props}/>}/>
            <Route path="/login" component={(props) => <Login {...props} username={this.state.username} _changeState={this._changeState} />}/>
            <Route path="/user/:userId" component={(props) => <User {...props}/>}/>
            <Route path="/createmenu" component={ViewMenu}/>
            <Route path="/allfood" component={AllFood}/>
          </div>
        </BrowserRouter>
        {/* {this.state.username ? <Dashboard /> : <Login _changeState={this._changeState} />} */}
      </div>
    );
  }
}

export default App;
