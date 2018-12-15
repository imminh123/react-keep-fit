import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar';
import ViewMenuMeal from '../Component/ViewMenuMeal';
import ViewMenuAdd from '../Component/ViewMenuAdd';
import ViewMenuFilter from '../Component/ViewMenuFilter';
import ViewMenuDropDown from '../Component/ViewMenuDropDown';
import Footer from '../Component/Footer'

export default class ViewMenu extends Component {
    state = {
        meal : [],
    }
    render() {
        return (
            <div>
                <MainNavbar />
                <ViewMenuDropDown meal={this.state.meal}/>
                <ViewMenuAdd />
                <ViewMenuMeal meal={this.state.meal}/>
                {/* <ViewMenuFilter /> */}
                <Footer />
            </div>
        )
    }
}
