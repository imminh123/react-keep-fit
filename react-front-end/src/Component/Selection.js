import React, { Component } from 'react'
import './Style/dashboard.css'


export default class Navbar extends Component {
    render() {
        return (
            <div className="DashBoard">
            <div className="container main-content">
                <div classNameclass="row">
                    <div className="col-4">
                        <div className="col-12 selection-1">
                            <div className="gradient-selection"></div>
                            <button style={{"text-decoration" : "none"}} className="button">Create your menu</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col-12 selection-2">
                            <div className="gradient-selection"></div>
                            <button style={{"text-decoration" : "none"}} className="button" href="#">All cooking recepi</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col-12 selection-3">
                            <div className="gradient-selection"></div>
                            <button style={{"text-decoration" : "none"}} className="button" href="#">Show my menu</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

