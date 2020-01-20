import React, {useState} from 'react'
import ScoreBoard from './ScoreBoard'


function Form(){

   const [input, setInput]=useState({});
   
   const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }; 

  console.log(input)

   return (
       <>
       <form>
           <label>
               Home Team
           </label>
                <input type='text' name='homeTeam' onChange={handleChanges} placeholder='Home Team' value={input.homeTeam}>
                </input>
            <label>
               Away Team
           </label>
                <input type='text' name='awayTeam' onChange={handleChanges} placeholder='Away Team' value={input.awayTeam}>
                </input>
       </form>
       <ScoreBoard input={input} />
       </>
   )
}
export default Form
