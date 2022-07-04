//@ts-check
import React from "react";
import './Item.css';


export default function Item({id, price, title, pictureURL}) {
 return(
    <div className="card" style={{width: "12rem", height: "24rem"}}>
  <img src={pictureURL} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title} / id:{id}</h5>
    <p className="card-text">Precio:{price}</p>
    <a href={pictureURL} className="btn btn-outline-dark">Ver detalles</a>
  </div>
</div>
 )

  }