import React, { Component } from 'react'
import './Style/allFood.css'
import axios from '../axious'
import config from '../config'
import {Link} from 'react-router-dom';
import FoodImage from './FoodImage';


export default class AllFoodContent extends Component {
    state = {
        foodList: null
    }

    componentDidMount = () => {
        axios({
            url: `${config.rootPath}/api/food`,
            method: "GET",
        }).then(response => {
            console.log("data ne:")
            console.log(response.data);
            this.setState({
                foodList: response.data.map(food => (
                    <Link to={`/food/${food._id}`}>
                        <FoodImage food={food} />
                    </Link>
                ))
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="AllFood container">
                <ul className="list-inline mx-auto" style={{ "text-align": "center" }}>
                    {this.state.foodList}
                </ul>
            </div>
        )
    }
}
