import React from "react";
import './ProductCard.css'  
import Btn from "./button";

//   this is used to connect css file

function ProductC(){

    return(
        <div className="product" style={{backgroundColor:"beige",border:"1 px solid black "}}>
            <img src="https://images.pexels.com/photos/26182241/pexels-photo-26182241.jpeg" height="150" width="150" />
            <h2>Cake</h2>
            <p>Rs 999</p>
        <Btn />
        </div>
    )
}

export default ProductC;