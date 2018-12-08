import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar'
import Quote from '../Component/Quote'
import Footer from '../Component/Footer'
import Selection from '../Component/Selection'

export default class Login extends Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <Quote />
                <Selection />
                <Footer />
            </div>
        )
    }
}
