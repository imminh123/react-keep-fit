import React, { Component } from 'react'

import "./Style/homescreen.css"

export default class Navbar extends Component {
    render() {
        return (
            <div className="header container-fluid">
                <div className="gradient" ></div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>

                <div className="row">
                    <div className="col-6">
                        <div className="slogan">
                            <p>Stay Fit</p>
                            <p>Stay Healthy</p>
                            <a style={{ "text-decoration": "none" }} className="button" href="#popup1">Start your journey now</a>

                            <div id="popup1" className="overlay">
                                <div className="popup">
                                    <h5>Can't wait to see you again</h5>
                                    <a className="close" href="#">&times;</a>
                                    <form className="form-horizontal" action="">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-default">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="other-info">
                                <p className="instruction">Or let's get to know each other a little bit</p>
                                <i className="fas fa-angle-down"></i>
                            </div>

                        </div>
                    </div>

                    <div class="col-6 sign-up-container text-center">
                        <div class="container">
                            <p>Or Sign-up with only a few steps</p>
                            <form class="form-horizontal" action="/action_page.php">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default">Sign up</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

