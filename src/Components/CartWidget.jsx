import React from "react";
import './CartWidget.css';
import { useContext } from 'react';
import { MyContext } from "./Components/CartContext";
import {Link} from 'react-router-dom'

export default function CartWidget() {

  const {auxInitial} = useContext(MyContext);

    return 
    <>
    <Link to= {`/Cart`}></Link>
    <div className="cart">
    <ion-icon name="cart-outline"></ion-icon>
    <span className="itemTotal">{auxInitial}</span>
    </div>
    </>
  }