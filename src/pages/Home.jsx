import React, { Component } from "react";

import axios from "axios";
import DeviceDetails from "./DeviceDetails";
import "./home.css";
import Cookies from 'universal-cookie';
import Graphs from "./Graphs";
import Bars from "./Bars";


const cookies = new Cookies();
//console.log(cookies.get('token'))

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userReport: {},
      userIntake: {},
      userDevice: {},
      glucose: [],
      basal: [],
      bolus: [],
      userReport2: {},
      token: cookies.get('token')
    };
   // console.log(this.state.token)
  }
  
  componentDidMount() {
    
    const apiurl1 =
      `https://insulink-backend.herokuapp.com/api/v1/dashboard/get-avg-report?startDate=${new Date(Date.now() - 604800000).toISOString().slice(0,10)}&endDate=${new Date().toISOString().slice(0, 10)}`;
    const apiurl2 =
      "https://insulink-backend.herokuapp.com/api/v1/dashboard/today-intake";
    const apiurl3 =
      "https://insulink-backend.herokuapp.com/api/v1/dashboard/get-updated-device-details";
    const apiurl4 =
      "https://insulink-backend.herokuapp.com/api/v1/dashboard/get-monthly-avg-report/12";
    const apiurl5 =
      `https://insulink-backend.herokuapp.com/api/v1/dashboard/get-avg-report?startDate=${new Date(Date.now() - 1209600000).toISOString().slice(0,10)}&endDate=${new Date(Date.now() - 604800000).toISOString().slice(0,10)}`;

    const promiseResponse1 = axios(apiurl1, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    });
    const promiseResponse2 = axios(apiurl2, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    });
    const promiseResponse3 = axios(apiurl3, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    });
    const promiseResponse4 = axios(apiurl4, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    });
    const promiseResponse5 = axios(apiurl5, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    });

    axios
      .all([
        promiseResponse1,
        promiseResponse2,
        promiseResponse3,
        promiseResponse4,
        promiseResponse5,
      ])
      .then(
        axios.spread((...responses) => {
          console.log(
            promiseResponse1,
            promiseResponse2,
            promiseResponse3,
            promiseResponse4,
            promiseResponse5,
          );
          console.log(responses);
          const response1 = responses[0];
          var response2 = responses[1];
          const response3 = responses[2];
          const response4 = responses[3];
          const response5 = responses[4];

         
         // console.log(avgGlu);
          // console.log(response1, response2, response3, response4);
          // this.carbRef.current.style.transform = `rotate(${response2.data.data.carb && response2.data.data.carb !== -1 ? response2.data.data.carb : 0}deg)`
          // this.glucoseRef.current.style.transform = `rotate(${response2.data.data.glucose}deg)`
          // this.insulinRef.current.style.transform = `rotate(${response2.data.data.insulin}deg)`
          // // this.sumInsulinRef.current.style.width = `${response1.data.data.insulin.sumInsulin}`
          // this.avgInsulinRef.current.style.width = `${response1.data.data.insulin.avgInsulin}%`
          // this.preAvgInsulinRef.current.style.width = `${response5.data.data.insulin.avgInsulin}%`
          //  console.log(this.preAvgInsulinRef.current.style.width)

          this.setState({...this.state, userReport: response1.data.data.insulin });
          this.setState({ ...this.state, userReport2: response5.data.data.insulin });
          this.setState({ ...this.state, userIntake: response2.data.data });
          this.setState({...this.state, userDevice: response3.data.data.device});
          this.setState({...this.state,glucose: response4.data.data.glucose });
          this.setState({ ...this.state, bolus: response4.data.data.bolus });
          this.setState({ ...this.state, basal: response4.data.data.basal });
          
        })
      )
      .catch((error) => {
        console.error(error);
      });
     
  }

  render() {
    
    const { battery, reservoir, patchTimestamp } = this.state.userDevice;
    const { avgInsulin } = this.state.userReport;
    const  prevAvgInsulin = this.state.userReport2.avgInsulin;
   
    return (
      <>
     <DeviceDetails battery={ battery} reservoir={ reservoir} patchTimestamp={ patchTimestamp}/>

     {(() => {
      if ((!this.state.glucose || this.state.glucose.length === 0) && (!this.state.bolus || this.state.bolus.length === 0) && (!this.state.basal || this.state.basal.length === 0) ) {
        console.log("Loading chart ............");
        return <h1>Loading chart .......... </h1>;
      } else {
   
        return(
      <Graphs glucose={this.state.glucose} basal={this.state.basal} bolus={this.state.bolus}/>
        )}
    })()}

    {(() => {
      if (!this.state.userIntake) {
        console.log("Loading progress bar ............");
        return <h1>Loading  progress bar .......... </h1>;
      } else {
        return(
       <Bars carb={this.state.userIntake.carb} glucose={this.state.userIntake.glucose} insulin={this.state.userIntake.insulin} avgInsulin={avgInsulin}  prevAvgInsulin={prevAvgInsulin}/>   
       )}
      })()}
     </>
    );
  }
}
