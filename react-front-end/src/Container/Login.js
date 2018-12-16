import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import BodyHome from '../Component/BodyHome'
import Footer from '../Component/Footer'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Navbar _changeState={this.props._changeState} />
                <BodyHome />
                <Footer />
            </div>
        )
    }
}
