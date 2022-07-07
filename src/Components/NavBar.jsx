import React from "react";
import mate from './img/iconomate2.jpg'
import './NavBar.css';
import './CartWidget.css';
import CartWidget from "./CartWidget";


export default function NavBar() {
  return <>
  <h1 className="titulo">PLAYADITO</h1>
  <img src={mate} className="icono" alt="mate" />
  <ul className="nav justify-content-center">
   <li className="nav-item">
     <a className="nav-link" href="#">Home</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="#">Mates</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="#">Termos</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="#">Yerba</a>
   </li>
   <CartWidget/>
 </ul>
 </>
}