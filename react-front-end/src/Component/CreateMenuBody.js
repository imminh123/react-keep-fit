import React, { Component } from 'react'
import './Style/createMenu.css'

export default class CreateMenuBody extends Component {
    render() {
        return (
            <div className="createMenu containerForMenu">
                <div id="carouselExampleIndicators" className="carousel slide mx-auto" data-ride="carousel" style={{"width" : "700px"}}>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Monday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Monday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Tuesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Tuesday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Wednesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Wednesday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Wednesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Thursday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Wednesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Friday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Wednesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Saturday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1539683/pexels-photo-1539683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Wednesday" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Total: <span className='totalCalo'>0</span> kcal</h1>
                                <h2>Protein: <span className='protein'>0</span>g Carb: <span className='carb'>0</span>g Fat: <span className='fat'>0</span>g</h2>
                                <h5>Sunday</h5>
                                <p>Hello World</p>
                                <a style={{ "text-decoration": "none" , "padding-left": "15px", "padding-right": "15px"}} className="button" href="#">  View Menu  </a>
                                <a style={{ "text-decoration": "none" }} className="button" href="#">Change Menu</a>
                            </div>

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
