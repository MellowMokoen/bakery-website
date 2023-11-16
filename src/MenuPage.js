import React from "react";
import "./MenuPage.css";
import bread from "./images/bread.jpg";
import cookie from "./images/cookie.jpg";
import croissant from "./images/croissant.jpg";
import cupcakes from "./images/cupcakes.jpg";
import cakes from "./images/swede-cakes.jpg";
import sweets from "./images/sweets.jpg";

export default function MenuPage() {
    return (
     <div>
        <h1 className="Menu-h1">Find your favorite</h1>
        <div className="container">
            
            <img src={bread} alt="Bread" />
            <img src={cookie} alt="Cookie" />
            <img src={croissant} alt="Croissant" />
            <img src={cupcakes} alt="Cupcakes" />
            <img src={cakes} alt="Swede-cakes" />
            <img src={sweets} alt="Sweets" />
        </div>
     </div>  
    );
}