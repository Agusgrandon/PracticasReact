//@ts-check
import React, {useEffect, useState} from "react";
import Item from "./Item";



export default function ItemList({productlist}) {
    
 return(
    <div className="col-xs-6 col-sm-10 col-md-12 col-lg-12 d-flex flex-wrap justify-content-around">
        {
            productlist.map((item) =>{
                return(
            <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL}/> 
            );
        })
        }
    </div>
 )

  }