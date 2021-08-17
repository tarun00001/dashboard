import React, { Component } from 'react'

export default class Device extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <>
      <div className="col-lg-4 device">
          <div className="card" >
          <div className="card-body">
            <h5 className="">
             <strong> Device SerialNo:</strong> {this.props.device.serialNo} 
            </h5>
            <p className="card-text"><strong>Manufacture Date:</strong> {(this.props.device.manufactureDate).substring(0, this.props.device.manufactureDate.indexOf('T'))}</p>
            <p className=""><strong>Model Type:</strong> {this.props.device.modelType}</p>
          </div>
        </div>
        </div>
      </>
    )
  }
}
