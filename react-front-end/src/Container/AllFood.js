import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar'
import Quote from '../Component/Quote'
import Footer from '../Component/Footer'
import Selection from '../Component/Selection'
import AllFoolHeader from '../Component/AllFoolHeader';
import AllFoodContent from '../Component/AllFoodContent';

export default class Login extends Component {
    render() {
        return (
            <div>
                <MainNavbar userId={this.props.userId}/>
                <AllFoolHeader />
                <AllFoodContent />
                <Footer />
            </div>
        )
    }
}
