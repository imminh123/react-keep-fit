import React, { Component } from 'react'
import { withRouter } from "react-router";
import MainNavbar from '../Component/MainNavbar'
import Footer from '../Component/Footer'
import FoodDetail from "../Component/FoodDetail";

class FoodDetailContainer extends Component {
    render() {
        return (
            <div>
                <MainNavbar  userId={this.props.userId}/>
                <FoodDetail {...this.props}/>
                <Footer />
            </div>
        )
    }
}

export default withRouter(FoodDetailContainer);