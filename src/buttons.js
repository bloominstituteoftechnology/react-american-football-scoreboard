// import React, {useState} from "react";
// //import ScoreBoard from "./scoreboard.js"
// import "./App.css";

//  function Buttons(){
//     const [home, setHome] = useState(0);
//     const [away, setAway] = useState(0);

//     return( 
//         <div>
//         <div className="homeButtons">
//             <button 
//                 className="homeButtons__touchdown"
//                 onClick={() => {
//                 setHome(home + 6);
//                 console.log("here", home)
//                 }}>
//                     Home Touchdown
//             </button>

//             <button 
//                 className="homeButtons__fieldGoal"
//                 onClick={() => {
//                 setHome(home + 3);
//                 }}>
//                     Home Field Goal
//             </button>

//             <button
//                 className= "homeButtons__extaPoint"
//                 onClick={() => {
//                 setHome(home + 1);
//                 }}>
//                     Home Extra Point
//             </button>
//         </div>

//          <div className="awayButtons">
//              <button 
//                 className="awayButtons__touchdown"
//                 onClick={() => {
//                 setAway(away + 6);
//                 }}>
//                     Away Touchdown
//             </button>
//             <button 
//                 className="awayButtons__fieldGoal"
//                 onClick={() => {
//                 setAway(away + 3);
//                 }}>
//                     Away Field Goal
//             </button>

//             <button 
//                 className= "awayButtons__extaPoint"
//                 onClick={() => {
//                 setAway(away + 1);
//                 }}>
//                     Away Extra Point
//             </button>
//         </div>
//     </div>
//       )
//  };
//  export default Buttons;