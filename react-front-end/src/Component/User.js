import React, { Component } from "react";
import UserInfo from './UserInfo';
import InfoDetails from './InfoDetails';
import axios from '../axios';
import './Style/User.css'
import config from '../config'

class User extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        axios
            .get(`${config.rootPath}/api/user/5c0be63e00db3f13d031725f`)
            .then(response => {
                    const user = response.data.user
                    this.setState({
                        user: user
                    })
                }
            )
            .catch(err => console.error(err));
    }




    render() {
        return (
            <div className="User">
                <div className="row">
                    <div className="col-4 rounded">
                        <UserInfo  user={this.state.user}/>
                    </div>
                    <div className="col-8 rounded">
                        <InfoDetails user={this.state.user} />
                    </div>
                </div>
            </div>
        );
    }
}

export default User;