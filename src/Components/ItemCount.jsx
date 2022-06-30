import React, { useState } from "react";


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
           <div><button type="button" className="btn btn-outline-danger" onClick={() => restar()}>-</button></div>
           <div className="text-dark num">{auxInitial}</div>
           <div><button type="button" className="btn btn-outline-success" onClick={() => sumar()}>+</button></div>
           <button type="button" className="btn btn-outline-info" onClick={() => onAdd(auxInitial)}>Agregar al carrito</button>
        </div>
    )}