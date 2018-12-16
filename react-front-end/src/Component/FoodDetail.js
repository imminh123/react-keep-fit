import React, { Component } from 'react'
import './Style/foodDetail.css'
import axios from '../axious'
import config from '../config'

export default class AllFoolHeader extends Component {

    state={
        food: null
    }

    componentDidMount = ()=> {
        axios({
            url: `${config.rootPath}/api/food/${this.props.match.params.foodId}`,
            method: "GET",
        }).then(response => {
            console.log(response.data)
            this.setState({
                food: response.data
            });
            debugger
           
          
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        console.log('Food State');
        console.log(this.food);
        return (
            <div className="foodDetail container">  
                <div className="foodContent">
                    <div>
                        <h3 className="title1">Food Name</h3>
                        <img className="img-fluid" src="" alt="food" />
                    </div>
                    
                    <div className="step">
                        <h3 className="title2">How to cook <span>Some Food</span></h3>
                        <ul>
                            <li><span>Step 1  : </span>Go to your nearest supermarket</li>
                            <li><span>Step 2 : </span>Select a radom freeze food</li>
                            <li><span>Step 3 : </span>Go home as fast as you can</li>
                            <li><span>Step 4 : </span>Put it in your stupid microwave</li>
                            <li><span>Step 5 : </span>Bon Appetit!</li>
                        </ul>
                    </div>
                </div>

                <div className="progressBar">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                        aria-valuemin="0" aria-valuemax="100" style={{"width": "50%"}}>
                            <span class="sr-only">70% Complete</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                        aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}>
                            <span class="sr-only">70% Complete</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                        aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}>
                            <span class="sr-only">70% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
