import React, { Component } from "react";
import axios from '../axios';
import  config from '../config'

class UserDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.user || { }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    })
  }

  _handleTextChange = (event) => {
    let user = this.state.user;
    
    this.setState({user: {
      ...user,
      [event.target.name]: event.target.value
    }})
  }

  _handleMacroChange = (event) => {
    let user = this.state.user;
    let macro = user.macro;
    this.setState({user: {
      ...user,
      macro:{
        ...macro,
        [event.target.name]: event.target.value
      }
    }})
  }

  savePassword = () => {
    if(this.state.user.newPassword === this.state.user.confirmPassword){
      axios
      .post("/api/user", {
        _id: this.state._id,
        password: this.state.user.password,
        newPassword: this.state.user.newPassword
      })
      .then(response =>
        console.log("Password saved")
      )
      .catch(err => console.error(err));
    }
  }

  saveUserInfo = () => {
    axios
      .post("/api/user", {
        name: "admin",
      })
      .then(response =>
        console.log("Infomation saved")
      )
      .catch(err => console.error(err));
  }

  saveInfoDetails = () => {
    console.log(this.state, this.state.user._id);
    axios
      .put(`${config.rootPath}/api/user/` + this.state.user._id, {
        id: this.state.user._id,
        name: this.state.user.name,
        weight: this.state.user.weight,
        height: this.state.user.height,
        macro:{
          kcal: this.state.user.macro.kcal,
          protein: this.state.user.macro.protein,
          carb: this.state.user.macro.carb,
          fat: this.state.user.macro.fat,
        },
        goal: this.state.user.goal,
        workoutHabit: this.state.user.workoutHabit,
        bodyFat: this.state.user.bodyFat,
      })
      .then(response =>
        console.log("Infomation saved")
      )
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="InfoDetails">
        <div className="shadow-none p-3 mb-5 bg-light rounded">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Các chỉ số</a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Thiết lập tài khoản</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent" style={{ padding: "2%" }}>
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <h3>Chỉ số cơ thể</h3>
              <div style={{ marginLeft: "2%" }}>
                <form>
                  <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Weight</label>
                    <div className="col-sm-10">
                      <input type="number" name="weight" className="form-control" placeholder="Weight" value={this.state.user.weight} onChange={this._handleTextChange}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Height</label>
                    <div className="col-sm-10">
                      <input type="number" name="height" className="form-control" placeholder="Height" value={this.state.user.height} onChange={this._handleTextChange} />
                    </div>
                  </div>
                </form>
              </div>
              <h3>Hàm lượng dinh dưỡng mỗi ngày</h3>
              <div style={{ marginLeft: "2%" }}>
                <form>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Tổng kcal</label>
                    <div className="col-sm-10">
                      <input type="number" name="kcal" className="form-control" placeholder="Kcal" value={this.state.user.macro ? this.state.user.macro.kcal : "Unknown"} onChange={this._handleMacroChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Protein</label>
                    <div className="col-sm-10">
                      <input type="number" name="protein" className="form-control" placeholder="Weight" value={this.state.user.macro ? this.state.user.macro.protein : "Unknown"} onChange={this._handleMacroChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Carb</label>
                    <div className="col-sm-10">
                      <input type="number" name="carb" className="form-control" placeholder="Height" value={this.state.user.macro ? this.state.user.macro.carb : "Unknown"} onChange={this._handleMacroChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Fat</label>
                    <div className="col-sm-10">
                      <input type="number" name="fat" className="form-control" placeholder="Height" value={this.state.user.macro ? this.state.user.macro.fat : "Unknown"} onChange={this._handleMacroChange} />
                    </div>
                  </div>
                </form>
              </div>
              <h3>Hoạt động</h3>
              <div style={{ marginLeft: "2%" }}>
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Goal</label>
                    <textarea className="form-control" name="goal" id="exampleFormControlTextarea1" rows="3" value={this.state.user.goal} onChange={this._handleTextChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-form-label">Workout habit</label>
                    <select className="custom-select form-control" value={this.state.user.workoutHabit}>
                      <option value="0">None</option>
                      <option value="1">High (less than 2h/week)</option>
                      <option value="3">Medium (2 - 5h/week)</option>
                      <option value="5">Low (greater than 5h/week)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-form-label">Bodyfat</label>
                    <select className="custom-select form-control" value={this.state.user.workoutHabit}>
                      <option value="0">None</option>
                      <option value="1">High (less than 2h/week)</option>
                      <option value="3">Medium (2 - 5h/week)</option>
                      <option value="5">Low (greater than 5h/week)</option>
                    </select>
                  </div>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button type="button" className="btn btn-outline-success" onClick={this.saveInfoDetails}>Save changes</button>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style={{ padding: "2%" }}>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" style={{ textDecoration: "none" }} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Thay avatar
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" style={{ textDecoration: "none" }} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Thay đổi thông tin cá nhân
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <form>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Name</label>
                          <div className="col-sm-10">
                            <input type="text" name="name" className="form-control" placeholder="Name" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Age</label>
                          <div className="col-sm-10">
                            <input type="text" name="age" className="form-control" placeholder="Age" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="text" name="email" className="form-control" placeholder="Email" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Address</label>
                          <div className="col-sm-10">
                            <input type="text" name="address" className="form-control" placeholder="Address" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Phone</label>
                          <div className="col-sm-10">
                            <input type="text" name="phone" className="form-control" placeholder="Phone" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Facebook</label>
                          <div className="col-sm-10">
                            <input type="text" name="facebook" className="form-control" placeholder="Facebook" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <button type="button" className="btn btn-outline-success" onClick={this.saveUserInfo}>Save changes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ textDecoration: "none" }}>
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link" style={{ textDecoration: "none" }} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Đổi mật khẩu
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <form>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Mật khẩu cũ</label>
                          <div className="col-sm-10">
                            <input type="text" name="oldPassword" className="form-control" placeholder="Weight" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Mật khẩu mới</label>
                          <div className="col-sm-10">
                            <input type="text" name="newPassword" className="form-control" placeholder="Weight" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Xác nhận</label>
                          <div className="col-sm-10">
                            <input type="text" name="confirmPassword" className="form-control" placeholder="Weight" onChange={this._handleTextChange} />
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <button type="button" className="btn btn-outline-success" onClick={this.savePassword}>Save changes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script>
            {/* $('#myTab li:last-child a').tab('show') */}
          </script>
        </div>
      </div>
    );
  }
}

export default UserDetails;