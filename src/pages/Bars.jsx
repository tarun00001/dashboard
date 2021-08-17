import React, { Component } from 'react'
import CircularBar from './CircularBar';
import ProgressBar from "./ProgressBar";

export default class ProgressBars extends Component {
  render() {
    return (
      <>
      <div className="row home">
      <div className="col-sm-6 mt-3">

        <CircularBar data={this.props.carb && this.props.carb !== -1 ? this.props.carb : "_"} title="CARB INTAKE" unit="units" />
        <CircularBar data={this.props.glucose} title="GLUCOMETER" unit="mg/dl" />
        <CircularBar  data={this.props.insulin} title="INSULIN DOSE" unit="units" />
        </div>
        <div className="col-sm-6 mt-3">
        <ProgressBar data={this.props.avgInsulin} title="This Week"/>
        <ProgressBar data={this.props.prevAvgInsulin} title="Previous Week" />
        </div>

</div>
      </>
    )
  }
}
