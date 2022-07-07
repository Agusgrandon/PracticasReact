import React from "react";
import './CartWidget.css';

export default function CartWidget() {
    return <div className="cart">
    <ion-icon name="cart-outline"></ion-icon>
    <span className="itemTotal">0</span>
    </div>
   

  
  }