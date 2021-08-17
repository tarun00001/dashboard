import axios from "axios";
import React, { Component } from "react";
import "./profile.css";
import Cookies from 'universal-cookie';
import Device from "./Device";

const cookies = new Cookies();

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      token: cookies.get('token')
    };
  }


  async componentDidMount() {
    const apiUrl =
      "https://insulink-backend.herokuapp.com/api/v1/users/myProfile";
    const res = await axios(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });

    console.log(res);
    this.setState({ ...this.state, user: res.data.data.user });

    if (!res.status === 200) {
      const error = new Error(res.error);
     console.log(error);
    }
  }

  render() {
    //console.log(this.state.user.devices);
    const { user } = this.state;
    //console.log(user.devices); 
    return (
      // { this.state.user ?
      
      <div className="row profile">
      <div className="col-lg-12 ">
        <div className="card">
          <div className="card-body">
          
            <h5 className="">
           <strong>Name:</strong> {user.firstName} {user.lastName}
            </h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className=""><strong>Country:</strong> {user.country}</p>
            <p className=""><strong>Phone:</strong> {user.phone}</p>
            </div>
          </div>
        </div>
    
        {user.devices ? user.devices.map((device) => {
          return (
           <Device device={device} key={device._id}/>)
        }): <p>No devices found</p>}
      </div>
      // : <p>No user Found</p>}
    );
  }
}
