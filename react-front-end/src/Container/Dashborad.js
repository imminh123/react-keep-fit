import React, { Component } from 'react'
import { withRouter } from "react-router";
import MainNavbar from '../Component/MainNavbar'
import Quote from '../Component/Quote'
import Footer from '../Component/Footer'
import Selection from '../Component/Selection'

class Dashboard extends Component {
    render() {
        console.log(this.props.userId)
        return (
            <div>
                <MainNavbar  userId={this.props.userId}/>
                <Quote />
                <Selection history={this.props.history}/>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Dashboard)