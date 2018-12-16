import React, { Component } from 'react'
import "./Style/homescreen.css"
import axios from '../axious'
import config from '../config'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    state = {
        email: null,
        password: null,
        name: null,
        repassword: null,
        isShow : false
    }

    _changePopUp = ()=>{
        this.setState({
            isShow : (this.state.isShow ? false : true)
        })
    }

    _handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
    }

    _handeSubmit = (event) => {
        event.preventDefault();
        axios({
            url: `${config.rootPath}/api/auth/login`,
            method: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(response => {
            this.props._changeState("username", response.data.user.name);
            this.props._changeState("userId", response.data.user._id);
            this.props.history.push("/dashboard");
        }).catch(error => {
            console.log(error);
        });
    }

    _handleSignUp = (event) => {
        event.preventDefault();
        axios({
            url: `${config.rootPath}/api/user`,
            method: "POST",
            data: {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        var popupClassname = this.state.isShow ? "overlay" : "overlay";
        return (
            <div className="HomeScreen">
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
                                <a style={{ "text-decoration": "none" }} className="button" onClick={this._changePopUp}>Start your journey now</a>
                                
                                <div id="popup1" className={this.state.isShow ? "overlay" : "hidden"}>
                                    <div className="popup">
                                        <h5>Can't wait to see you again</h5>
                                        <a className="close" onClick={this._changePopUp}>&times;</a>
                                        <form className="form-horizontal" action="">
                                            <div className="form-group">
                                                <input type="email" onChange={this._handleInputChange} className="form-control" id="email" placeholder="Enter email" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" onChange={this._handleInputChange} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" onClick={this._handeSubmit} className="btn btn-default">Login</button>
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

                        <div className="col-6 sign-up-container text-center">
                        <div className={this.state.isShow ? "hidden" : ""}>
                            <div className="container">
                                <p>Or Sign-up with only a few steps</p>
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <input type="text" onChange={this._handleInputChange} className="form-control" placeholder="Enter name" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" onChange={this._handleInputChange} className="form-control" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={this._handleInputChange} className="form-control" placeholder="Enter password" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={this._handleInputChange} className="form-control" placeholder="Enter password again" name="repassword" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={this._handleSignUp} className="btn btn-default">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

