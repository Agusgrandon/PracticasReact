//@ts-check
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';


export default function ItemListContainer({greeting}) {
  const  [productlist, setProductlist] = useState ([]);

useEffect(() => {
  const products =  [  
    {id: "1", title: "mate", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "2", title: "mate2", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "3", title: "mate", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "4", title: "mate2", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "5", title: "mate", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "6", title: "mate2", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "7", title: "mate", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "8", title: "mate2", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
     
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
    <br/>
    <br/>
    <br/>
    <br/>
    <ItemList productlist={productlist}/>
    </>
    )
  }