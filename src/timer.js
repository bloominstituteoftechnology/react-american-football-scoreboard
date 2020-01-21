 import React, {useState, useEffect} from "react";
 import "./App.css";

function Timer = () =>{
    const [seconds, setSeconds]= useState(60);
    const[isON, setIsOn] = useState(false); //timer not on

    function turnOn(){
        setIsOn(!isOn)
    }
    useEffect(()=> {

  // Timer Code
    let countdown;
    if(isActive){
        countdown= setCountdown(()=>{
            setSeconds(seconds = seconds -1); // countdown from 60
        }, 1000);
    }
})
// Reset Code
function reset(){
    setSeconds(60)
}

}


export default Timer


// function Example() {
//     const [count, setCount] = useState(0);
  
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//       // Update the document title using the browser API
//       document.title = `You clicked ${count} times`;
//     });
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );
//   }







///// For logic refrence


// let seconds=0;
// let minutes=0;
// let hours=0;




// // stopwatch code here
// function stopWatch(){
//     seconds++;

//     
//     if (seconds/60===1){
//         seconds=0;
//         minutes++;
//        
//         if(minutes/60===1){
//             minutes =0;    //resets mins to 0
//             hours++;    // increment hour by 1
//         }
//     }
//    
//     if(seconds ===10){
//        
//     }
//     // SECONDS RESET AT 10
//     if(seconds===11){     
//         seconds=0;
//         
//        
        
//     }
// }

// window.setInterval(stopWatch, 1000)