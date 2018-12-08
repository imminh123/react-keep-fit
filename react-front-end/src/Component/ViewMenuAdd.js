import React, { Component } from 'react'

export default class ViewMenuAdd extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{"width" : "18rem"}}>
                            <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Name</h5>
                                <p class="card-text">Hello World Eat Me</p>
                                <a href="#" class="btn btn-primary">+</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{"width" : "18rem"}}>
                            <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Hello World Eat Me</p>
                                <a href="#" class="btn btn-primary">+</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{"width" : "18rem"}}>
                            <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Hello World Eat Me</p>
                                <a href="#" class="btn btn-primary">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
