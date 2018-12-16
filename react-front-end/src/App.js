import React, { Component } from 'react';
import Login from './Container/Login';
import Dashboard from './Container/Dashborad';
import AllFood from './Container/AllFood';
import CreateMenu from './Container/CreateMenu';
import ViewMenu from './Container/ViewMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import User from "./Container/User";
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
        <BrowserRouter>
          <div>        
            {this.state.username} ? <Route path="/dashboard" component={Dashboard}/> :<Route path="/login" component={(props) => <Login {...props} username={this.state.username} _changeState={this._changeState} />}/>
            <Route path="/user/:userId" component={User}/>
            <Route path="/menu" component={ViewMenu}/>
            <Route path="/createmenu" component={CreateMenu}/>
            <Route path="/allfood" component={AllFood}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
