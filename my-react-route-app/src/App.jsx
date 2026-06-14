import React from "react";
//Important Imports for React-Router 
import {BrowserRouter , Routes , Route , Link } from 'react-router-dom'

function Home(){
    return <h2>Home Page</h2>
}

function About(){
    return <h2>About Page</h2>
}



function App(){  //Main Function - Output
    return(

        <BrowserRouter>
        
        <nav>
            <Link to="/" >Home</Link>  
            <Link to="/about">About Us⚡</Link>
        </nav>


        <Routes>

        <Route path="/"    element={ <Home />  }     />

        <Route path="/about" element={ <About /> }    />

        </Routes>
        
        
        </BrowserRouter>
    );
}

export default App;

  

