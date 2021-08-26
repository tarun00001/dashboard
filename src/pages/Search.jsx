import React, { Component } from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import instance from '../api/axios'
import {debounce} from '../pages/Debounce'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={  
        users:[]
    }
    this.debouncedFetch = debounce(this.fetchData, 200);
  }

  fetchData(input) {
    if (input !== '') {
      console.log(`fetching data for ${input}`);
    }
  }

    onSearchChange = (e) => {  
        
        const newSearchInput = e.target.value
        console.log(newSearchInput)
        console.log(newSearchInput.length)
     
        this.debouncedFetch(newSearchInput);

        const apiUrl = `http://192.168.1.13:8000/api/v2/test/all-users?name=${newSearchInput}`;
        instance({
            method: 'GET',
            url: apiUrl,
        }).then((response) => {
            console.log("API Response", response.data.data.users)

            // this.setState({users: ""})
            this.setState({users: response.data.data.users})
        }).catch((error) => {
            console.log(error)
            
        })
    }

  render() {
console.log("State:",this.state.users)
    return (
      <>
        <Form inline>
          <Row style={{ marginTop: "2%" }}>
            <Col md="6">
              <input
              
              value={this.state.result}
              onChange={(e) => {this.onSearchChange(e)}}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
           
          </Row>
          <Row>
          <Col>
          <ul style={{ listStyleType: "none"}}>{this.state.users.length === 0 ? '' : this.state.users.map((user) => {
            return <li key={user.id}>{user.firstName}{user.lastName}</li>
          })}</ul>
          </Col>
          </Row>
        </Form>
      </>
    );
  }
}
