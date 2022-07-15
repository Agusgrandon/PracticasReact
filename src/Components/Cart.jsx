//@ts-check
import React from 'react'
import { useContext } from 'react';
import { MyContext } from './CartContext';


export default function Cart() {
    const { carrito, removeItem, clear, carritoVacio, total } = useContext(MyContext);

    return (
        <>
            <h2>Su carrito</h2>
            <table>
                <thead>
                    <tr>
                        <th>precio</th>
                    </tr>
                </thead>
            </table>
            <div>
                <button type="button" className='btn btn-outline-danger' onClick={()=>{  removeItem()}}>Eliminar</button>
            </div>
            <div>
                <button type="button" className='btn btn-outline-warning' onClick={()=>{  clear()}}>Vaciar carrito</button>
            </div>
            <div>
                <button type="button" className='btn btn-outline-success'>Finalizar compra</button>
            </div>
        </>
    );
}