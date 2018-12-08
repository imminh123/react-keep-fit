import React, { Component } from "react";
import './Style/UserInfo.css'
import Image from '../Image/image.png';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            macro: null,
            user: props.user || {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        })
    }

    render() {
        return (
            <div className="UserInfo">
                <div className="profile menu">
                    <div className="profile-usermenu">
                        <div className="avatar">
                            {this.state.user.avatar ? <img src={this.state.user.avatar} alt="Avatar" className="round img-thumbnail" /> : <img src={Image} alt="Avatar" className="round img-thumbnail" />}
                        </div>
                        <div className="information">
                            <ul className="list-group">
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Tên:</p>
                                    <p className="value col-8">{this.state.user.name ? this.state.user.name : "Unknown"}</p>
                                </li>
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Tuổi:</p>
                                    <p className="value col-8">{this.state.user.age ? this.state.user.age : "Unknown"}</p>
                                </li>
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Email:</p>
                                    <p className="value col-8">{this.state.user.email ? this.state.user.email : "Unknown"}</p>
                                </li>
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Address:</p>
                                    <p className="value col-8">{this.state.user.address ? this.state.user.address : "Unknown"}</p>
                                </li>
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Phone:</p>
                                    <p className="value col-8">{this.state.user.phone ? this.state.user.phone : "Unknown"}</p>
                                </li>
                                <li className="list-group-item col-sm-12">
                                    <p className="label col-4">Facebook:</p>
                                    <p className="value col-8">{this.state.user.facebook ? this.state.user.facebook : "Unknown"}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;