import React from "react";
import "./cart.css"

export default function Cart({image, name}){


    return(
        <div className="cart">
          <img src={image} alt={name} className="img"/>
          <p className="title">{name}</p>
        </div>
    )
}