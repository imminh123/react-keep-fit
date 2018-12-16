import React, { Component } from 'react'
import './Style/foodDetail.css'
import axios from '../axious'
import config from '../config'

export default class AllFoolHeader extends Component {

    componentDidMount = ()=> {
        axios({
            url: `${config.rootPath}/api/food/${this.props.match.params.imageId}`,
            method: "GET",
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="foodDetail container">  
                <div className="foodContent">
                    <div>
                        <h3 className="title1">Food Name</h3>
                        <img className="img-fluid" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="food" />
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
