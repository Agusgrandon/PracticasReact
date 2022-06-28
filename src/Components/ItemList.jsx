//@ts-check
import React, {useEffect, useState} from "react";
import Item from "./Item";



export default function ItemList({productlist}) {
 return(
    <div>
        {
            productlist.map((item) =>{
            <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL}/>
            })
        }
    </div>
 )

  }