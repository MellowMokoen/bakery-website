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
        <h1 className="Menu-h1">On the menu we have :</h1>
        <div className="container">
          <div>
            <p>Cinnamon Bread</p>
            <img src={bread} alt="Bread" />
          </div>
          <div>
            <p>Cookies</p>
            <img src={cookie} alt="Cookie" />
          </div>
          <div>
            <p>Swede-Cakes</p>
            <img src={cakes} alt="Swede-cakes" />
          </div>
          <div>
            <p>Croissant</p>
            <img src={croissant} alt="Croissant" />
          </div>
          <div>
            <p>Cupcakes</p>
            <img src={cupcakes} alt="Cupcakes" />
          </div>
          <div>
            <p>Sweets</p>
            <img src={sweets} alt="Sweets" />
          </div>
            
        </div>
     </div>  
    );
}