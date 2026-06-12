// import React from "react";

// function App(){

//   // js code -

//   let count = 10

//   function Greet(){
//     alert("hii How Are YOu")
//   }


//   return(
//     <div>
//       <h1>Hello Guys , Welcome To React + Vite </h1>
//       <h2>likes {count} </h2>

//       <button onClick={Greet}>Get Alert Message</button>
//     </div>
//   )
// }

// export default App;

// example 2 - variables in react

// js variable in react
// import React from "react";

// function App(){

//   let count=0

//   function increaseCount(){
//     count = count + 1;
//     console.log(count)


//   }

//   return(
//     <div>
//       <h2>The Value of Count is : {count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//     </div>
//   )
// }

// export default App;

// Example 3 -using usestaehook in react

// basic syntax
// const [variablename , servariablename ] = useState(initial value) 

// import {useState} from "react";

// function App(){

//   const[likes , setLikes] = useState(0)

//   function increaseLike(){
//     setLikes(likes+1)

//     console.log(likes)

//   }

//   return(
//     <div>
//       <h2>Likes : {likes} </h2>
//       <button onClick={increaseLike}>Like</button>
//     </div>
//   )
// }

// export default App;

// example 4 : Show/Hide password

import { useState } from "react"

function App(){

  const [show , setShow ]= useState(false)

  return(
    <div>

      <input type= {show ? "text" :"password"}  placeholder="enter your password" />

      <button onClick = {  ()=> setShow(!show)  }>Show/Hide</button> 
    </div>
  )
}

export default App;