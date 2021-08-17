import React, { Component } from 'react'
import Graph from './Graph';

export default class Graphs extends Component {
  render() {
    return (
      <>
   
      <div className="row home">
        <Graph data={this.props.glucose} dataKey="avgGlucose" fill="#009900"/> 
        <Graph  data={ this.props.basal.map((num,index) => {  
          return {averageInsulin: (num.avgBasal + this.props.bolus[index].avgBolus)/2, month: num.month, year: num.year};
          })} dataKey="averageInsulin" fill="#00CCCC"/>
      </div>
      </>
    )
  }
}
