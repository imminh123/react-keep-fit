import React, { Component } from 'react'

export default class ViewMenu extends Component {
  render() {
    return (
      <div style={{"display": "flex", "justifyContent": "center"}}>
        <div class="date" style={{"padding": "20px"}}><button type="button" class="btn btn-outline-danger">Monday</button></div>
        <div class="row justify-content-md-center daySelection" style={{"padding": "20px"}}>
          <div class="input-group-prepend">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">How many meals?</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">1 meal</a>
              <a class="dropdown-item" href="#">2 meals</a>
              <a class="dropdown-item" href="#">3 meals</a>
              <a class="dropdown-item" href="#">4 meals</a>
              <a class="dropdown-item" href="#">5 meals</a>
              <a class="dropdown-item" href="#">6 meals</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
