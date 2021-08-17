import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default class Graph extends Component {
  render() {
    return (
      <>
      <div className="col-sm-6 mt-3">
      <div className="card">
      <div className="card-body">
      <ResponsiveContainer width="95%" height={400}>
     <BarChart
            width={400}
            height={300}
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              
              dataKey={this.props.dataKey}
              fill={this.props.fill}
              
            />
            </BarChart>
            </ResponsiveContainer>
      </div>
    </div>
    </div>
      </>
    )
  }
}
