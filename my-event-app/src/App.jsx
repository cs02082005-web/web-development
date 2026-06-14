// import React from "react";

// function App(){
      
//   function handleclick(){
//     alert("button clicked")
//   }
//   return(

//     <div>
//        {/* event name inside the HTML tag itself  
//        react name of the events are - onEventName*/}

//        <button onClick={handleclick} >click me</button>
//     </div>
//   )
// }

// export default App;

// Example 2 - live search using onChange

import { useState } from "react";

function App(){

  const[text,setText]=useState("");

  return(
    
    <div>

      <label>Search Box</label>

      <input placeholder="Search...." onChange={(e) => setText(e.target.value)}/>

      <h3> You Typed : {text}</h3>

    </div>
  )
}
 export default App;