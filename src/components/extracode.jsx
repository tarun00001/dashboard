 
        // <div className="col-lg-4">
        // <div className="card">
        //   <div className="card-body">
        //     {(() => {
        //       if (!this.state.glucose || this.state.glucose.length === 0) {
        //         console.log("Loading ............");
        //         return <h1>Loading .......... </h1>;
        //       } else {
        //         console.log("Data success : " + this.state.glucose.length);

        //         return this.state.glucose.map((glucoses) => {
        //           return (
        //             <h5 key={glucoses.id}>Glucose: {glucoses.avgGlucose}</h5>
        //           );
        //         });
        //       }
        //     })()}
        //   </div>
        // </div>
        // </div>

        // <div className="col-lg-4">
        // <div className="card">
        //   <div className="card-body">
        //     {(() => {
        //       if (!this.state.basal || this.state.basal.length === 0) {
        //         console.log("Loading ............");
        //         return <h1>Loading .......... </h1>;
        //       } else {
        //         console.log("Data success1 : " + this.state.basal.length);
        //         return this.state.basal.map((basals) => {
        //           return <h5 key={basals.id}>Basal: {basals.avgBasal}</h5>;
        //         });
        //       }
        //     })()}
        //   </div>
        // </div>
        // </div>

        // <div className="col-lg-4">
        // <div className="card">
        //   <div className="card-body">
        //     {(() => {
        //       if (!this.state.bolus || this.state.bolus.length === 0) {
        //         console.log("Loading ............");
        //         return <h1>Loading .......... </h1>;
        //       } else {
        //         console.log("Data success1 : " + this.state.bolus.length);
        //         return this.state.bolus.map((bol) => {
        //           return <h5 key={bol.id}>bolus: {bol.avgBolus}</h5>;
        //         });
        //       }
        //     })()}
        //   </div>
        // </div>
        // </div>

        // <div className="col-lg-4">
        // <div className="card">
        // <div className="card-body">
        // {console.log("Bolus :- " , this.state.bolus)}
        // {console.log("Basal :- " , this.state.basal)}
        // {(() => {
        //   if (!this.state.bolus || this.state.bolus.length === 0 || !this.state.basal || this.state.basal.length === 0) {
        //     console.log("Loading Average ............");
        //     return <h1>Loading Average.......... </h1>;
        //   } else {
        //     return ( this.state.basal.map((num,index) => {  
        //       // console.log( this.state.basal.map((num,index) => {  
        //       //   return (num.avgBasal + this.state.bolus[index].avgBolus)/2;
        //       //   }))
        //       //console.log(num)
        //       //console.log(this.state.bolus[index])
        //       return(<h5>Average Insulin: {(num.avgBasal + this.state.bolus[index].avgBolus)/2}</h5> );
        //       }))
        //   }
        // })()}
        // </div>
        // </div>
        // </div>

        // <div className="row home">
        // <div className="col-lg-4 mt-3">
        // <div className="card">
        //   <div className="card-body">
        //     <h5 className="card-title">
        //     <strong>Carbohydrates:</strong> {this.state.userIntake.carb}
        //     </h5>
        //     <h5 className="card-title"><strong>Insulin:</strong> {this.state.userIntake.insulin}</h5>
        //     <h5 className="card-title"><strong>Glucose:</strong> {this.state.userIntake.glucose}</h5>
        //   </div>
        // </div>
        // </div>

        // <div className="col-lg-4  mt-3">
        // <div className="card">
        //   <div className="card-body">
        //     <h5 className="card-title"><strong>Average Insulin Intake:</strong> {avgInsulin}</h5>
        //     <h5 className="card-title"><strong>Sum Insulin Intake:</strong> {sumInsulin}</h5>
        //   </div>
        // </div>
        // </div>
        // </div>

//         <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
// <style>
// body {
//   margin: 0;
//   font-family: "Lato", sans-serif;
// }

// .sidebar {
//   margin: 0;
//   padding: 0;
//   width: 200px;
//   background-color: #f1f1f1;
//   position: fixed;
//   height: 100%;
//   overflow: auto;
// }

// .sidebar a {
//   display: block;
//   color: black;
//   padding: 16px;
//   text-decoration: none;
// }
 
// .sidebar a.active {
//   background-color: #04AA6D;
//   color: white;
// }

// .sidebar a:hover:not(.active) {
//   background-color: #555;
//   color: white;
// }

// div.content {
//   margin-left: 200px;
//   padding: 1px 16px;
//   height: 1000px;
// }

// @media screen and (max-width: 700px) {
//   .sidebar {
//     width: 100%;
//     height: auto;
//     position: relative;
//   }
//   .sidebar a {float: left;}
//   div.content {margin-left: 0;}
// }

// @media screen and (max-width: 400px) {
//   .sidebar a {
//     text-align: center;
//     float: none;
//   }
// }
// </style>
// </head>
// <body>

// <div class="sidebar">
//   <a class="active" href="#home"><i class="fas fa-home"></i> Home</a>
//   <a href="#contact"><i class="fas fa-phone"></i> Contact</a>
// </div>

// <div class="content">
//   <h2>Responsive Sidebar Example</h2>
//   <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
//   <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
//   <h3>Resize the browser window to see the effect.</h3>
// </div>

// </body>
// </html>
