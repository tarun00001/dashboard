import React, { Component } from "react";
import axios from "axios";
import "./sidebar.css";
import { NavLink, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      token: cookies.get("token"),
    };
  }

  async logout() {
    const apiUrl = "https://insulink-backend.herokuapp.com/api/v1/auth/logout";
    const res = await axios(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });

    console.log(res);

    cookies.remove('token');
    this.props.history.push("/Login");

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  }

  render() {
    return (
      <>
   
<button style={{ marginTop: "10px" }} className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  toggle
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   
    <div className="dropdown mt-3">
      <ul className="ul">
    {(() => {
            
                if (!cookies.get("token")) {
                  return [
                    <li className="active" style={{}} >
                      <NavLink className="nav-link" to="/Login">
                     <span className="dis"><i className="fas fa-sign-in-alt"></i> Login</span>
                      </NavLink>
                    </li>,
                    <li className="active">
                      <NavLink className="nav-link" to="/Signup">
                      <span className="dis"><i className="fas fa-user-plus"></i> Register</span>
                      </NavLink>
                    </li>
                  ];
                } else {
                  return [
                    <li className="active">
                      <NavLink className="nav-link" to="/">
                      <span className="pro"><i className="fas fa-home"></i> Home</span>
                      </NavLink>
                    </li>,
                    <li className="active">
                      <NavLink className="nav-link" to="/Profile">
                      <span className="pro"> <i className="far fa-id-card"></i> Profile</span>
                      </NavLink>
                    </li>,
                    <li className="active">
                      <NavLink className="nav-link" to="/Settings">
                      <span className="pro"> <i class="fas fa-cog"></i> Settings</span>
                      </NavLink>
                    </li>,
                    <li className="active">
                      <NavLink className="nav-link" to="/Search">
                      <span className="pro"> <i class="fas fa-search"></i> Search</span>
                      </NavLink>
                    </li>,
                    <li className="nav-link active logo"
                      onClick={() => {
                        this.logout();
                      }}>
                      <span className=""><i className="fas fa-sign-out-alt"></i> Logout</span>
                    </li>,
                  ];
                }
              })()}
              </ul>
    </div>
  </div>
</div>
      </>
    )
  }
}

export default withRouter(Sidebar);
