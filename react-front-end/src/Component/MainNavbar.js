import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import avatar from '../Image/ava.jpg'

export default class MainNavbar extends Component {

    render() {
        return (
            <div className="DashBoard">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/Dashboard">Keep Fit.</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active nav-change">
                                    <Link className="nav-link" to="/dashboard">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nav-change">
                                    <Link className="nav-link" to="/createmenu">Menu</Link>
                                </li>
                                <li className="nav-item nav-change">
                                    <Link className="nav-link" to="/allfood">Foods</Link>
                                </li>
                                <li className="nav-item nav-change">
                                    <Link className="nav-link" to="#">Contact</Link>
                                </li>
                                <li className="nav-item nav-change">
                                    <Link className="nav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item dropdown avatar">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <img className="img-fluid" src={avatar} alt="" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to={"/user/" + this.props.userId}>Profile</Link>
                                        <Link className="dropdown-item" to="#">Logout</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Help</Link>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    <hr></hr>
                </div>
            </div>
        )
    }
}
