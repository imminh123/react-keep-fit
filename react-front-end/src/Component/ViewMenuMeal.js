import React, { Component } from 'react'

export default class ViewMenuMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            meal: nextProps.meal
        })
    }

    foodForChoosing(allFood) {
        return allFood.map(food => (
            <div class="card in-line" style={{ "width": "25%", "margin": "2%" }}>
                <img class="card-img-top" src={food.link}
                    alt="Card image cap" />
                <div class="card-body">
                    <p class="card-text"> <span class="totalKcal">Name: {food.name}</span></p>
                    <p class="card-text"> <span class="totalKcal">Năng lượng: {food.totalKcal}</span>Kcal</p>
                    <p class="card-text "><span class="gProtein">Protein: {food.protein}</span>g Protein</p>
                    <p class="card-text gCarb"><span class="gCarb">Carb: {food.carb}</span>g Carb</p>
                    <p class="card-text gFat"><span class="gFar">Fat: {food.fat}</span>g Fat</p>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div class="row" style={{ "padding": "20px", "display": "flex", "justifyContent": "center" }}>
                <div style={{ "display": "flex", "justifyContent": "center", "flexWrap": "wrap" }}>
                    {this.foodForChoosing(this.props.meal)}
                    {/* <div class="card in-line" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div>

                    <div class="card" style={{ "width": "25%", "margin": "2%" }}>
                        <img class="card-img-top" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                            alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                            <p class="card-text "><span class="gProtein"></span>g Protein</p>
                            <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                            <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
