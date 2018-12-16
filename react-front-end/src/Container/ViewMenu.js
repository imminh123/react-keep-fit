import React, { Component } from 'react'
import MainNavbar from '../Component/MainNavbar';
import ViewMenuMeal from '../Component/ViewMenuMeal';
import ViewMenuAdd from '../Component/ViewMenuAdd';
import ViewMenuFilter from '../Component/ViewMenuFilter';
import ViewMenuDropDown from '../Component/ViewMenuDropDown';
import config from '../config';
import Footer from '../Component/Footer'
import axios from '../axios';

export default class ViewMenu extends Component {
    state = {
        allFood: [],
        meal : []
    }

    componentWillMount() {
        axios
        .get(`${config.rootPath}/api/food/`)
        .then(response => {
                const food = response.data
                this.setState({
                    allFood: food
                })
            }
        )
        .catch(err => console.error(err));
    }

    addFood(foodId){
        for(const food in this.state.allFood){
            if(food._id == foodId){
                this.setState({meal: [this.setState.meal, food]});
                break;
            }
        }
    }

    _confirm(){
        
    }

    render() {
        return (
            <div>
                <MainNavbar/>
                <ViewMenuDropDown meal={this.state.meal}/>
                <ViewMenuAdd allFood={this.state.allFood} addFood={this.addFood}/>
                <ViewMenuMeal meal={this.state.meal}/>
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <button class="btn btn-lg btn-success" onClick={this._confirm}>Confirm</button>
                </div>
                <Footer />
            </div>
        )
    }
}
