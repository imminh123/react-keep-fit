import React, { Component } from 'react'
import { withRouter } from "react-router";
import MainNavbar from '../Component/MainNavbar';
import CreateMenuBody from '../Component/CreateMenuBody';
import Footer from '../Component/Footer'

class CreateMenu extends Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <CreateMenuBody />
                <Footer />
            </div>
        )
    }
}

export default withRouter(CreateMenu);
