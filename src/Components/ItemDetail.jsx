//@ts-check
import { createContext } from 'react';
import ItemCount from "./ItemCount";
import {myContext} from "./Components/CartContext";


export default function ItemDetail({ itemProducto }) {

  const {addItem} = useContext(myContext);
    function onAdd(productos, stock){
      if((productos>0)&&(stock>0)){ 
        addItem(itemProducto, productos);
        alert("¡Agregado al carrito!")
      }
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
      </div>
    </div>
    </> 
 )

  }