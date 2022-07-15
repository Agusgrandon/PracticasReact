//@ts-check
import React from 'react'
import { useContext } from 'react';
import { MyContext } from './CartContext';


export default function Cart(){
    const {carrito, removeItem, clear, carritoVacio, total} = useContext(MyContext);
}