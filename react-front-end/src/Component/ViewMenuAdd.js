import React, { Component } from 'react'

export default class ViewMenuAdd extends Component {
    render() {
        return (
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" style={{"height":"500px", "display": "flex", "justifyContent": "center"}}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="Monday" />
                            <div className="carousel-caption d-none d-md-block text-danger">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g || Carb: <span className='carb'>0</span>g || Fat: <span className='fat'>0</span>g</h2>
                                <button type="button" className="btn btn-info">Add this item</button>
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
