//@ts-check
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {

const  [productlist, setProductlist] = useState ([])

useEffect (() => {
  let productos =  [  
    {id: "1", title: "mate", price: "2000", pictureURL: "https://www.cleanipedia.com/images/iohqr4whhl17/77WTkW5a5Cz0T3gVY9bFYP/b5c637fe5e05d0a5d4b16dbf717cecdf/MTEuanBn/990w-660h/mate-de-calabaza-y-yerba.jpg"}
  ];
  
  new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      resolve(productos)
    }, 2000)
  }).then((res)=>{
    setProductlist(res)
  })
}, [])

    return (
    <>
    <h2 className="segundoTitulo">{greeting}</h2>
    <ItemList productlist={productlist}/>
    </>
    )
  }