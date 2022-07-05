//@ts-check
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';


export default function ItemListContainer({greeting}) {
  const  [productlist, setProductlist] = useState ([]);

useEffect(() => {
  const products =  [  
    {id: "1", title: "Mate 1", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "2", title: "Mate 2", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "3", title: "Mate 3", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "4", title: "Mate 4", price: "2002", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "5", title: "Mate 5", price: "2000", pictureURL: "https://www.mateandco.com.ar/wp-content/uploads/2022/02/Mates-madera-bombilla-corazon-web-verde-agua-768x768.jpg"},
    {id: "6", title: "Termo 1", price: "2000", pictureURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/663/products/apa-termos-margaritas1-d5066b2e761ded976016364746193894-640-0.jpg"},
    {id: "7", title: "Termo 2", price: "2002", pictureURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/663/products/apa-termos-margaritas1-d5066b2e761ded976016364746193894-640-0.jpg"},
    {id: "8", title: "Termo 3", price: "2000", pictureURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/663/products/apa-termos-margaritas1-d5066b2e761ded976016364746193894-640-0.jpg"},
    {id: "9", title: "Termo 4", price: "2002", pictureURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/663/products/apa-termos-margaritas1-d5066b2e761ded976016364746193894-640-0.jpg"},
    {id: "10", title: "Termo 5", price: "2000", pictureURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/663/products/apa-termos-margaritas1-d5066b2e761ded976016364746193894-640-0.jpg"},
    {id: "11", title: "Yerba Mate 1", price: "2000", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2ZkIeXb_g6lJY4P32oyUUUnZWYtmzrcuQ&usqp=CAU"},
    {id: "12", title: "Yerba Mate 1", price: "2002", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2ZkIeXb_g6lJY4P32oyUUUnZWYtmzrcuQ&usqp=CAU"},
    {id: "13", title: "Yerba Mate 1", price: "2000", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2ZkIeXb_g6lJY4P32oyUUUnZWYtmzrcuQ&usqp=CAU"},
    {id: "14", title: "Yerba Mate 1", price: "2002", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2ZkIeXb_g6lJY4P32oyUUUnZWYtmzrcuQ&usqp=CAU"},
    {id: "15", title: "Yerba Mate 1", price: "2000", pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3p2ZkIeXb_g6lJY4P32oyUUUnZWYtmzrcuQ&usqp=CAU"},
     
     
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