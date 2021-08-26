import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Settings from "./pages/Settings";
import Search from "./pages/Search";
import { Container, Row, Col } from "react-bootstrap";
// import "./App.css";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class App extends Component {
 
  render() {
    return (
      <>
        <Router>
        
        <Container>
          <Row>
            <Col md={3}>
          <Sidebar />
          </Col>
          <Switch>
          <Col md={9}>
          <Route path="/Signup" exact render={()=>(
              cookies.get("token") ? (alert("You can't register if you are logged in!") (<Redirect to="/Login"/>)) : (<RegisterForm/>)
          )} />
          <Route path="/Login" exact render={()=>(
              cookies.get("token") ? (alert("You can't login if you are logged in!") (<Redirect to="/"/>)) : (<LoginForm/>)
          )} />
          <Route path="/" exact render={()=>(
              cookies.get("token") ? (<Home/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
          )} />
          <Route path="/Profile" exact render={()=>(
              cookies.get("token") ? (<Profile/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
          )} />
          <Route path="/Settings" exact render={()=>(
              cookies.get("token") ? (<Settings/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
          )} />
          <Route path="/Search" exact render={()=>(
              cookies.get("token") ? (<Search/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
          )} />
          </Col>
          <Route path="*" component={NotFound}/>
          
      </Switch>
      </Row>
      </Container>
        </Router>
      </>
    );
  }
}
