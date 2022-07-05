//@ts-check
import React from "react";
import ItemCount from "./ItemCount";
import './Item.css';


export default function Item({ id, price, title, pictureURL }) {
  function onAdd(){
    alert("¡Agregado al carrito!")
  }
  return (
    <div className="card" style={{ width: "12rem", height: "24rem" }}>
      <img src={pictureURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title} / id:{id}</h5>
        <p className="card-text">Precio:{price}</p>
        <a href={pictureURL} className="btn btn-outline-dark btn-sm">Ver detalles</a>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )

}