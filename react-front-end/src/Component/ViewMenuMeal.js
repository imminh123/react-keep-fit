import React, { Component } from 'react'

export default class ViewMenuMeal extends Component {
    render() {
        return (
            <div class="row" style={{"padding-bottom": "20px"}}>
                <ul class="list-inline mx-auto">
                    <li class="list-inline-item">
                        <div class="card in-line" style={{"width": "18rem"}}>
                            <img class="card-img-top" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                                <p class="card-text "><span class="gProtein"></span>g Protein</p>
                                <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                                <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                            </div>
                        </div>
                    </li>

                    <li class="list-inline-item">
                        <div class="card" style={{"width": "18rem"}}>
                            <img class="card-img-top" src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                                alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                                <p class="card-text "><span class="gProtein"></span>g Protein</p>
                                <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                                <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                            </div>
                        </div>
                    </li>

                    <li class="list-inline-item">
                        <div class="card" style={{"width": "18rem"}}>
                            <img class="card-img-top" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                                alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text"> <span class="totalKcal"></span> Kcal</p>
                                <p class="card-text "><span class="gProtein"></span>g Protein</p>
                                <p class="card-text gCarb"><span class="gCarb"></span>g Carb</p>
                                <p class="card-text gFat"><span class="gFar"></span>g Fat</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
