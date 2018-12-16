import React, { Component } from "react";
import UserInfo from '../Component/UserInfo';
import InfoDetails from '../Component/InfoDetails';
import axios from '../axios';
import '../Component/Style/User.css'
import config from '../config'
import MainNavbar from "../Component/MainNavbar";
import Footer from "../Component/Footer";

class User extends Component {
    state = {
        user: {}
    }

    componentWillMount() {
        axios
            .get(`${config.rootPath}/api/user/${this.props.match.params.userId}`)
            .then(response => {
                    const user = response.data
                    console.log(response.data);
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
                <MainNavbar userId={this.props.userId}/>
                <div className="row">
                    <div className="col-4 rounded">
                        <UserInfo  user={this.state.user}/>
                    </div>
                    <div className="col-8 rounded">
                        <InfoDetails user={this.state.user} />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default User;