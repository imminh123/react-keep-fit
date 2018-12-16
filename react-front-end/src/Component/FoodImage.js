import React, { Component } from 'react'
import './Style/allFood.css'

export default class FoodImage extends Component {
    
    render() {
        return (
                <li className="list-inline-item" style={{ "paddingRight": "25px" , "color" : "#2b2b2b"}}>
                        <div className="card in-line" style={{ "width": "15rem", "marginTop": "60px" }}>
                            <img className="card-img-top" src={this.props.food.link}
                                alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ "border-rounded": "1px solid #f34f2e" }}>{this.props.food.name}</h5>
                                <div style={{ "textAlign": "right" }}>
                                <div className="row" style={{ "border-left": "1.5px solid #ff5454" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{this.props.food.totalKcal}</div>
                                    <div className="col-6" >Total Kcal (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.8px solid #90ff9d" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{this.props.food.protein}</div>
                                    <div className="col-6">Protein (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.5px solid #1c6957" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{this.props.food.fiber}</div>
                                    <div className="col-6">Fiber (g)</div>
                                </div>
                                <div className="row" style={{ "border-left": "1.5px solid #ffec7c" }}>
                                    <div className="col-6" style={{ "textAlign": "left" }}>{this.props.food.fat}</div>
                                    <div className="col-6">Fat (g)</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
        )
    }
}
