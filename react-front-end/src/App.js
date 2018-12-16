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
            <Route path="/dashboard" component={(props) => <Dashboard {...props} userId={this.state.userId}/>}/>
            <Route path="/login" component={(props) => <Login {...props} username={this.state.username} _changeState={this._changeState} />}/>
            <Route path="/user/:userId" component={(props) => <User {...props} userId={this.state.userId}/>}/>
            <Route path="/createmenu" component={(props) => <ViewMenu userId={this.state.userId}/>}/>
            <Route path="/allfood" component={(props) => <AllFood userId={this.state.userId}/>}/>
            <Route path="/food/:foodId" component={(props) => <FoodDetail userId={this.state.userId}/>}/>
          </div>
        </BrowserRouter>
        {/* {this.state.username ? <Dashboard /> : <Login _changeState={this._changeState} />} */}
      </div>
    );
  }
}

export default App;
