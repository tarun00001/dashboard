import axios from 'axios';
import React, { Component } from 'react'
import {Col, Row ,Form , Button} from 'react-bootstrap'
import './settings.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Settings extends Component {
    state={  
        passwordOld:"",
        passwordUpdated:"",
        passwordOldError:"",
        passwordUpdatedError:"",
        isLoading: false,
    }

changePassword = (e) => {  

this.setState({isLoading: true, passwordOld: "", passwordUpdated: "",passwordOldError:"",passwordUpdatedError:""});
    console.log(e);
    e.preventDefault();
    const isValid = this.validate();
    console.log(isValid)
    if(isValid) {
      console.log(this.state)
   

    const changedPassword = JSON.stringify(this.state);
    console.log(changedPassword )
    const apiUrl = 'https://insulink-backend.herokuapp.com/api/v1/users/changePassword'
    axios({
        method: "POST",
        url: apiUrl,
        headers: { Authorization: `Bearer ${cookies.get("token")}` ,
        'Content-Type': 'application/json'},
        data: changedPassword,
    }).then((response) => {
        console.log(response)
       // console.log(response.data.message)
        this.setState({isLoading: false});
        alert(response.data.message)
    }).catch((error) => {
        console.log(error)
        //console.log(error.response.data.data.err.msg)
        this.setState({isLoading: false});
        alert(error.response.data.data.err.msg)
    })
    
  } else {  
    this.setState({isLoading: false});
  }
}

validate = () => {
  let passwordOldError = "";
  let passwordUpdatedError = "";

  if(!this.state.passwordOld){  
    passwordOldError = "Current Password cannot be blank"
  }

  if(!this.state.passwordUpdated){  
    passwordUpdatedError = "New Password cannot be blank"
  }

  if(passwordOldError || passwordUpdatedError){
    this.setState({passwordOldError,passwordUpdatedError })
    return false;
    
}

return true;

}

  render() {
    return (
      <>
        <Row>
            <Col md="6">
            <Form className="settings">
            <h1>Create New Password</h1>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Current Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Current Password"  value={this.state.passwordOld} onChange={(e) => { this.setState({ passwordOld: e.target.value }); }} />
            {this.state.passwordOldError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.passwordOldError}</div> : ''}
          </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter New Password" value={this.state.passwordUpdated} onChange={(e) => { this.setState({ passwordUpdated: e.target.value }); }} />
              {this.state.passwordUpdatedError ? <div style={{fontSize: 12, color: 'red'}}>{this.state.passwordUpdatedError}</div> : ''}
            </Form.Group>
           
            <Button variant="success" type="submit" disabled={this.state.isLoading} onClick={this.changePassword}>
              {this.state.isLoading ? 'Sending...' : 'Submit'}
            </Button>
          </Form>
            </Col>
        </Row>
      </>
    )
  }
}
