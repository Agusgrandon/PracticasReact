import React, { useState } from "react";
import './ItemCount.css';


export default function ItemCount({stock, initial, onAdd}) {
    const [auxInitial, setAuxInitial] = useState(initial);

    function restar() {
        if (auxInitial !== 1){
            setAuxInitial(auxInitial - 1);
        }}

    function sumar(){
        if (auxInitial !== stock){
            setAuxInitial(auxInitial + 1);
        }}  
    
    return (
        <div className="bg-light contador">
           <div className="primerBoton"><button type="button" className="btn btn-outline-danger btn-sm btn-block" onClick={() => restar()}>-</button></div>
           <div className="text-dark num">{auxInitial}</div>
           <div className="segundoBoton"><button type="button" className="btn btn-outline-success botones btn-sm btn-block" onClick={() => sumar()}>+</button></div>
           <button type="button" className="btn btn-outline-info btn-sm" onClick={() => onAdd(auxInitial)}>Agregar al carrito</button>
        </div>
    )}