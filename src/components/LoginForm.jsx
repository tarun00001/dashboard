import axios from "axios";
import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { withRouter,Link } from 'react-router-dom';
import './LoginForm.css'
const cookies = new Cookies();
let authToken = null;

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  login(e) {
    console.log(e);
    e.preventDefault();
    const isValid = this.validate();
    console.log(isValid)
    if(isValid) {
      console.log(this.state)
    } 

    const loginData = JSON.stringify(this.state);
    console.log(this.state);
    axios({
      method: "POST",
      url: "https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingEmail",
      headers: { "Content-Type": "application/json" },
      data: loginData,
    })
      .then((result) => {
        console.log(result);
        authToken = result.data.data.user.token
        console.log(authToken)
        cookies.set('token', authToken)
        //console.log(result.data.data.user.token);
       // this.setState({ token: result.data.data.user.token})
        //this.props.childHandler(result.data.data.user.token)
        this.props.history.push('/')
      
      })
      .catch((error) => { 
        console.log(error.response.data.data.err.msg)
        alert(error.response.data.data.err.msg)
      });
        
  }

  validate = () => {
    
    let emailError = "";
    let passwordError = "";

    if(!this.state.email.includes('@')){  
      emailError = "Invalid Email"
    }

    if(!this.state.password){  
      passwordError = "Password cannot be blank"
    }

    if(emailError || passwordError) {  
      this.setState({ emailError,passwordError });
      return false;
    }
    return true;
  }
  
  render() {
    
    return (
      <div className="container">
        <form className="login">
        <div className="form-row ">
        <h1>Login to your account</h1>
        <div class="form-group col-md-12">
          <input
            type="text"
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              this.login(e);
            }}
          >
            Login
          </button>
          </div>
        </form>
        <Link className="login" to="/Signup" variant = "body2">
           Not have an account ? Sign up here 
        </Link>
      </div>
    );
  }
}

export default withRouter(Loginform);