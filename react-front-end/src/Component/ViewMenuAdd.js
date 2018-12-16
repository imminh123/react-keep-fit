import React, { Component } from 'react'

export default class ViewMenuAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFood: null
        }
        console.log("Constructor")
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            allFood: nextProps.allFood
        })
        console.log("componentWillReceiveProps")
    }

    foodForChoosing() {
        var foods = null;
        for(const food in this.state.allFood){
            foods += `<div className="carousel-item">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="Monday" />
                        <div className="carousel-caption d-none d-md-block text-danger">
                            <h1>Total: <span className='totalCalo'>${food.kcal}</span> kcal</h1>
                            <h2>Protein: <span className='protein'>${food.protein}</span>g || Carb: <span className='carb'>${food.carb}</span>g || Fat: <span className='fat'>${food.fat}</span>g</h2>
                            <button type="button" className="btn btn-info" data-foodId=${food._id} onClick=${this._onAdd(food._id)}>Add this item</button>
                        </div>
                    </div>
                    `
        }
        console.log("foodForChoosing")
        return foods;
    }

    _onAdd(foodId){
        this.props.addFood(foodId);
    }   

    render() {
        console.log("render")
        return (
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" style={{ "height": "500px", "display": "flex", "justifyContent": "center" }}>
                        {this.foodForChoosing}
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Monday" />
                            <div className="carousel-caption d-none d-md-block text-danger">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g || Carb: <span className='carb'>0</span>g || Fat: <span className='fat'>0</span>g</h2>
                                <button type="button" className="btn btn-info" data-foodId="#">Add this item</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Monday" />
                            <div className="carousel-caption d-none d-md-block text-danger">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g || Carb: <span className='carb'>0</span>g || Fat: <span className='fat'>0</span>g</h2>
                                <button type="button" className="btn btn-info" data-foodId="#">Add this item</button>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <style>

                </style>
            </div>
        )
    }
}
