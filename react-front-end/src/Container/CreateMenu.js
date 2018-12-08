import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar';
import CreateMenuBody from '../Component/CreateMenuBody';
import Footer from '../Component/Footer'

export default class CreateMenu extends Component {
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
