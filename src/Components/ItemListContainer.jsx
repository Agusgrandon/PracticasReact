//@ts-check
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
  const  [productlist, setProductlist] = useState ([]);

useEffect(() => {
  let products =  [  
    {id: "1", title: "mate", price: "2000", pictureURL: "https://th.bing.com/th/id/OIP._Q0Zolf0wmseFfvbSwR9BQHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"}
  ];
  new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products)
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