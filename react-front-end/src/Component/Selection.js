import React, { Component } from 'react'
import './Style/dashboard.css'



export default class Selection extends Component {
    createMenu = (event) => {
        this.props.history.push("/createmenu");
    }

    allCookingRecepi() {
        this.props.history.push("/allfood");
    }

    showMenu() {

    }

    render() {
        return (
            <div className="DashBoard">
                <div className="container main-content">
                    <div className="row">
                        <div className="col-4">
                            <div className="col-12 selection-1">
                                <div className="gradient-selection"></div>
                                <button style={{ "text-decoration": "none" }} className="button" onClick={this.createMenu}>Create your menu</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-12 selection-2">
                                <div className="gradient-selection"></div>
                                <button style={{ "text-decoration": "none" }} className="button" onClick={this.allCookingRecepi}>All cooking recepi</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-12 selection-3">
                                <div className="gradient-selection"></div>
                                <button style={{ "text-decoration": "none" }} className="button" onClick={this.showMenu}>Show my menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

