import React from "react";
import "./MenuPage.css";
import bread from "./images/bread.jpg";
import chocolate from "./images/chocolate.png";
import cookie from "./images/cookie.jpg";
import croissant from "./images/croissant.jpg";
import cupcakes from "./images/cupcakes.jpg";
import cakes from "./images/swede-cakes.jpg";

export default function() {
    return (
        <div>
            <img src={bread} alt="Bread" />
            <img src={chocolate} alt="chocolate" />
            <img src={cookie} alt="Cookie" />
            <img src={croissant} alt="Croissant" />
            <img src={cupcakes} alt="Cupcakes" />
            <img src={cakes} alt="Swede-cakes" />
        </div>
    );
}