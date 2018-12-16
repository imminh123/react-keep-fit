import React, { Component } from 'react'
import { withRouter } from "react-router";
import Navbar from '../Component/Navbar'
import BodyHome from '../Component/BodyHome'
import Footer from '../Component/Footer'

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar _changeState={this.props._changeState} history={this.props.history} />
                <BodyHome />
                <Footer />
            </div>
        )
    }
}

export default withRouter(Login);
