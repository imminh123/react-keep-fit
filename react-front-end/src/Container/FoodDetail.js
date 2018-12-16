import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar'
import Footer from '../Component/Footer'
import FoodDetail from "../Component/FoodDetail";

export default class Login extends Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <FoodDetail/>
                <Footer />
            </div>
        )
    }
}
