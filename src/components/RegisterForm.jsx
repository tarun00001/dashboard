import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './registration.css'

export default class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      gender: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      phoneError: "",
      countryError: "",
      genderError: "",
    };
  }

  register = (e) => {
    console.log(e);
    e.preventDefault();
    const isValid = this.validate();
    console.log(isValid)
    if(isValid) {
      console.log(this.state)
    } 
    const registerData = JSON.stringify(this.state);
    console.log(this.state);
    axios({
      method: "POST",
      url: "https://insulink-backend.herokuapp.com/api/v1/auth/signup",
      headers: { "Content-Type": "application/json" },
      data: registerData,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => { 
        console.log(error.response.data.data.err.msg)
        console.log(error.response.data.data.err.errMsg.slice(31,99))
        console.log(error.response.data.data.err.errMsg.substr(31,99))
        alert(error.response.data.data.err.msg)
        alert(error.response.data.data.err.errMsg.slice(31,99))
      });

    // console.log(this.state.firstName)
    // console.log(this.state.lastName)
    // console.log(this.state.email)
    // console.log(this.state.password)
    // console.log(this.state.phone)
    // console.log(this.state.country)
    // console.log(this.state.gender)
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";
    let phoneError = "";
    let countryError = "";
    let genderError = "";
 
    if(!this.state.firstName){  
      firstNameError = "First Name cannot be blank"
    }

    if(!this.state.lastName){  
      lastNameError = "Last Name cannot be blank"
    }

    if(!this.state.email.includes('@')){  
      emailError = "Invalid Email"
    }

    if(!this.state.password){  
      passwordError = "Password cannot be blank"
    }

    if(!this.state.phone){  
      phoneError = "Phone cannot be blank"
    }

    if(!this.state.country){  
      countryError = "Country cannot be blank"
    }

    if(!this.state.gender){  
      genderError = "Gender cannot be blank"
    }

    if(firstNameError || lastNameError || emailError || passwordError || phoneError || countryError || genderError) {  
      this.setState({firstNameError,lastNameError,emailError,passwordError,phoneError,countryError,genderError });
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="container">
      <form className="register">
      <div className="form-row">
      <h1>Register a new account</h1>
      <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={(e) => {
              this.setState({ firstName: e.target.value });
            }}
          />
          {this.state.firstNameError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.firstNameError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }}
          />
          {this.state.lastNameError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.lastNameError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="email"
            required
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          {this.state.emailError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.emailError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="password"
            required
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          {this.state.passwordError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.passwordError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Phone"
            value={this.state.phone}
            onChange={(e) => {
              this.setState({ phone: e.target.value });
            }}
          />
          {this.state.phoneError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.phoneError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Country"
            value={this.state.country}
            onChange={(e) => {
              this.setState({ country: e.target.value });
            }}
          />
          {this.state.countryError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.countryError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
        
          <select
          required
          className="form-control"
            value={this.state.gender}
            onChange={(e) => {
              this.setState({ gender: e.target.value });
            }}
          >
            <option value="">Choose Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
          {this.state.genderError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.genderError}</div> : ''}
          </div>
          <br />
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              this.register(e);
            }}
          >
            Register
          </button>
          </div>
        </form>
        
        <Link className="register" to="/Login" variant = "body2">
           Already have an account ? Login here 
        </Link>
      </div>
    );
  }
}
