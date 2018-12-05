import React, { Component } from 'react'
import './Style/dashboard.css'


export default class Navbar extends Component {
    render() {
        return (
            <div className="DashBoard">
            <div class="container main-content">
                <div class="row">
                    <div class="col-4">
                        <div class="col-12 selection-1">
                            <div class="gradient-selection"></div>
                            <a style={{"text-decoration" : "none"}} class="button" href="#popup1">Create your menu</a>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="col-12 selection-2">
                            <div class="gradient-selection"></div>
                            <a style={{"text-decoration" : "none"}} class="button" href="#popup1">All cooking recepi</a>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="col-12 selection-3">
                            <div class="gradient-selection"></div>
                            <a style={{"text-decoration" : "none"}} class="button" href="#popup1">Show my menu</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

