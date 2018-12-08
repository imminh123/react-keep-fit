import React, { Component } from 'react'

export default class ViewMenu extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-md-center daySelection" style={{"padding": "20px"}}>
          <div class="date" style={{"padding": "20px"}}>Monday</div>
          <div class="input-group-prepend">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">How many meals?</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">1</a>
              <a class="dropdown-item" href="#">2</a>
              <a class="dropdown-item" href="#">3</a>
              <a class="dropdown-item" href="#">4</a>
              <a class="dropdown-item" href="#">5</a>
              <a class="dropdown-item" href="#">6</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
