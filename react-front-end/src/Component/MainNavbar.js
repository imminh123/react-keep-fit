import React, { Component } from 'react'
import avatar from '../Image/ava.jpg'

export default class MainNavbar extends Component {
    render() {
        return (
            <div className="DashBoard">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">Keep Fit.</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active nav-change">
                                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item nav-change">
                                    <a className="nav-link" href="#">Menu</a>
                                </li>
                                <li className="nav-item nav-change">
                                    <a className="nav-link" href="#">Foods</a>
                                </li>
                                <li className="nav-item nav-change">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item nav-change">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item dropdown avatar">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <img className="img-fluid" src={avatar} alt="" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
