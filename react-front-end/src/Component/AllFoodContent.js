import React, { Component } from 'react'
import './Style/allFood.css'
import axios from '../axious'
import config from '../config'

export default class AllFoodContent extends Component {
    state = {

    }

    componentDidMount = ()=> {
        axios({
            url: `${config.rootPath}/api/food`,
            method: "GET",
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="AllFood container">
                <ul className="list-inline mx-auto">
                    <li className="list-inline-item">
                        <div className="card in-line" style={{"width": "18rem"}}>
                            <img className="card-img-top" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text"> <span className="totalKcal"></span> Kcal</p>
                                <p className="card-text "><span className="gProtein"></span>g Protein</p>
                                <p className="card-text gCarb"><span className="gCarb"></span>g Carb</p>
                                <p className="card-text gFat"><span className="gFar"></span>g Fat</p>
                            </div>
                        </div>
                    </li>

                    </ul>
            </div>
        )
    }
}
