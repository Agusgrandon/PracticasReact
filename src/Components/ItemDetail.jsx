//@ts-check
import React from 'react'
import { useContext } from 'react';
import { MyContext } from './CartContext';
import ItemCount from "./ItemCount";




export default function ItemDetail({ itemProducto }) {


  const {addItem} = useContext(MyContext);

    function onAdd(){
        alert("¡Agregado al carrito!")
      }
     
    
 return(
    <> 
    <div className="card" style={{ width: "12rem", height: "27rem" }}>
      <img src={itemProducto.pictureURL} className="card-img-top" alt={itemProducto.title} />
      <div className="card-body">
        <h5 className="producto text-center">{itemProducto.title}{itemProducto.id}</h5>
        <p className="precio text-center">Precio:{itemProducto.price}</p>
        <br />
        <br />
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <button type="button" className='btn btn-outline-success'>Finalizar compra</button>
      </div>
    </div>
    </> 
 )

  }