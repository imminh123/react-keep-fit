import React, { Component } from 'react'
import './Style/dashboard.css'
import avatar from '../Image/ava.jpg'

export default class MainNavbar extends Component {
    render() {
        return (
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">Keep Fit.</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active nav-change">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item nav-change">
                                <a class="nav-link" href="#">Menu</a>
                            </li>
                            <li class="nav-item nav-change">
                                <a class="nav-link" href="#">Foods</a>
                            </li>
                            <li class="nav-item nav-change">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item nav-change">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown avatar">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img class="img-fluid" src={avatar} alt="" />
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
