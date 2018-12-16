import React, { Component } from 'react';
import Slider from "react-slick";

export default class ViewMenuAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFood: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allFood: nextProps.allFood
        })
    }

    foodForChoosing(allFood) {
        return allFood.map(food => (
            <div key={food._id} className="border-danger">
                <img style={{"height": "250px"}} className="w-100" src={food.link} alt="Monday" />
                <div className="text-danger">
                    <h3>Name: <span className='totalCalo'>{food.name}</span></h3>
                    <h3>Total: <span className='totalCalo'>{food.totalKcal}</span> kcal</h3>
                    <h4>Protein: <span className='protein'>{food.protein}</span>g</h4>
                    <h4>Carb: <span className='carb'>{food.carb}</span>g </h4> 
                    <h4>Fat: <span className='fat'>{food.fat}</span>g</h4>
                    <button type="button" className="btn btn-info" onClick={() => {this._onAdd(food._id)}}>Add this item</button>
                </div>
            </div>
            // <div>
            //     <h1>LOL</h1>
            // </div>
        ));
    }

    _onAdd(foodId) {
        this.props.addFood(foodId);
    }

    render() {
        console.log(this.state.allFood)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <div style={{textAlign: "center", padding: "0 25px"}}>
                <Slider {...settings}>
                    {this.state.allFood ? this.foodForChoosing(this.state.allFood) : ""}
                </Slider>
            </div>
        )
    }
}
