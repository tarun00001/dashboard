import React, { Component } from 'react'

export default class DeviceDetail extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <>
      <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
        <img src={this.props.src} alt="logo" width="150" height="100"/>
          <h5 className="card-title"><strong> {this.props.title}:</strong> {this.props.detail}</h5>
        </div>
      </div>
      </div>

      </>
    )
  }
}
 