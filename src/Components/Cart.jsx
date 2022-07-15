//@ts-check
import React from 'react'
import { useContext } from 'react';
import { MyContext } from './CartContext';


export default function Cart() {
    const { carrito, removeItem, clear, carritoVacio, total, value } = useContext(MyContext);
    //para que aparesca en carrito
    const [menu, setMenu] = value.menu

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return (
        <>
            <div className={show1}>
                <div className={show2}>
                    <h2>Su pedido</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>{carrito}</th>
                                <th>{total}</th>
                            </tr>
                        </thead>
                    </table>
                    <div>
                        <button type="button" className='btn btn-outline-danger' onClick={() => { removeItem() }}>Eliminar</button>
                    </div>
                    <div>
                        <button type="button" className='btn btn-outline-warning' onClick={() => { clear() }}>Vaciar carrito</button>
                    </div>
                    <div>
                        <button type="button" className='btn btn-outline-success'>Finalizar compra</button>
                    </div>

                </div>
            </div>
        </>
    );
}