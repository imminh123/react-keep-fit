import React, { Component } from 'react'
import './Style/allFood.css'
import axios from '../axious'
import config from '../config'

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
                    <li className="list-inline-item" style={{ "paddingRight": "25px" }}>
                        <div className="card in-line" style={{ "width": "15rem", "marginTop": "60px" }}>
                            <img className="card-img-top" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ "border-rounded": "1px solid #f34f2e" }}>{food.name}</h5>
                                <div style={{ "textAlign": "right" }}>
                                <div className="row" style={{ "border-left": "1.5px solid #ff5454" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{food.totalKcal}</div>
                                    <div className="col-6" >Total Kcal (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.8px solid #90ff9d" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{food.protein}</div>
                                    <div className="col-6">Protein (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.5px solid #1c6957" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{food.fiber}</div>
                                    <div className="col-6">Fiber (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.5px solid #ffec7c" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{food.fat}</div>
                                    <div className="col-6">Fat (g)</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
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
