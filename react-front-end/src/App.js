import React, { Component } from 'react';
import Login from './Container/Login';
import Dashboard from './Container/Dashborad';
import AllFood from './Container/AllFood';
import CreateMenu from './Container/CreateMenu';
import ViewMenu from './Container/ViewMenu';
import axios from './axious';
import { BrowserRouter, Route } from 'react-router-dom';
import User from "./Container/User";
import FoodDetail from "./Container/FoodDetail";

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

      <FoodDetail />
      
        
        {/* <CreateMenu /> */}
        {/* <ViewMenu /> */}

        {/* {this.state.username ? <Dashboard /> : <Login changeState={this._changeState} />} */}


        {/* <BrowserRouter>
          <Route path="/api/user/:userId" component={User}/>
        </BrowserRouter> */}
          {/* <ViewMenu/> */}
          {/* <CreateMenu/> */}
      </div>
    );
  }
}

export default App;
