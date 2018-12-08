import React, { Component } from 'react'

export default class ViewMenuFilter extends Component {
    render() {
        return (
            <div class="container" style={{"padding-left" : "20%"}}>
                <div class="row justify-content-md-center">
                    <div class="col">
                        <h2>Protein Choice</h2>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Chicken
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Pork
                            </label>
                        </div>
                    </div>

                    <div class="col">
                        <h2>Vegetable & Fruit</h2>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Chicken
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Pork
                            </label>
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col">
                        <h2>Cuisine Choice</h2>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Chicken
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Pork
                            </label>
                        </div>
                    </div>

                    <div class="col">
                        <h2>Restriction</h2>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Chicken
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Pork
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
