import React, { Component } from 'react'
import ScrollReveal from './scrollReveal'
import menu from '../Image/menu-card.png'
import "./Style/homescreen.css"

export default class BodyHome extends Component {

    componentDidMount = () => {
        const config = {
            origin: 'left',
            duration: 1200,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        }

        ScrollReveal.reveal(this.refs.foo1, config);
        ScrollReveal.reveal(this.refs.foo2, config);
        ScrollReveal.reveal(this.refs.foo3, config);
    }

    render() {
        return (
            <div>
                <div className="body container-fluid">
                    <div className="row intro-container" ref='foo1'>
                        <div className="col-6 image-intro">
                            <img src={menu} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6">
                            <div className="content-intro">
                                <h4>Make your own healthy menu</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue, est a
                                    interdum congue, lectus ligula varius est, et hendrerit sapien diam nec lacus.
                        Phasellus ullamcorper mauris id magna porta finibus. Nulla suscipit erat a ex posuere egestas.</p>
                            </div>

                        </div>
                    </div>

                    <div className="row intro-container-2" ref='foo2'>
                        <div className="col-6">
                            <div className="content-intro-2">
                                <h4>Make your own healthy menu</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue, est a
                                    interdum congue, lectus ligula varius est, et hendrerit sapien diam nec lacus.
                        Phasellus ullamcorper mauris id magna porta finibus. Nulla suscipit erat a ex posuere egestas.</p>
                            </div>
                        </div>
                        <div className="col-6 image-intro">
                            <img src={menu} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="row intro-container" ref='foo3'>
                        <div className="col-6 image-intro">
                            <img src={menu} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6">
                            <div className="content-intro">
                                <h4>Make your own healthy menu</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue, est a
                                    interdum congue, lectus ligula varius est, et hendrerit sapien diam nec lacus.
                        Phasellus ullamcorper mauris id magna porta finibus. Nulla suscipit erat a ex posuere egestas.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

