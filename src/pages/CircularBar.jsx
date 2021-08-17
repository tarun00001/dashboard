import React, { Component } from 'react'

export default class CircularBar extends Component {
    constructor(props) {
        super(props);
        this.circularRef = React.createRef();
       
    } 

    componentDidMount(){  
       this.circularRef.current.style.transform = `rotate(${this.props.data && this.props.data !== '_' ? this.props.data : 0}deg)`
    }
    
  render() {
    return (
      <>
      
      <div className="card">
      <div className="card-body">
   
            <h5>{this.props.title}</h5>
            <div className="progress-circle p10">
            <span>{this.props.data} {this.props.unit}</span>
            <div className="left-half-clipper">
               <div className="first50-bar"></div>
               <div ref={this.circularRef} className="value-bar"></div>
            </div>
         </div>
         
      </div>
      </div>
     
      </>
    )
  }
}
