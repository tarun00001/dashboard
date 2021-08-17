import React, { Component } from 'react'

export default class ProressBar extends Component {
    constructor(props) {
        super(props);
        this.progressRef = React.createRef();
  
    } 

    componentDidMount(){  
      console.log(`Width: ${this.props.data}`)
        this.progressRef.current.style.width = `${this.props.data}%`
     }

  render() {
    return (
      <>
    
      <div className="card">
      <div className="card-body">
    
            <div>
            <h1>{this.props.title}</h1>
              <h5>Average Insulin</h5>
              <div className="progress">
                <div ref={this.progressRef} className="progress-bar" role="progressbar" style={{width: `${this.props.data}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>{(Math.round(this.props.data * 100) / 100).toFixed(2)}
              </div>
            </div>
        
      </div>
      </div>
      
      </>
    )
  }
}
