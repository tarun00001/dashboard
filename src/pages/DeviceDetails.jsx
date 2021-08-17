import React, { Component } from 'react'
import DeviceDetail from './DeviceDetail'

export default class DeviceDetails extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <>
      <div className="row home">
     
        <DeviceDetail detail={this.props.battery} src={"images/battery.png"} title="Battery" />
        <DeviceDetail detail={this.props.reservoir}  src={"images/water.png"} title="Reservoir" />
        <DeviceDetail detail={this.props.patchTimestamp} src={"images/patch.png"} title="Patch" />
      </div>
      </>
    ) 
  }
}
