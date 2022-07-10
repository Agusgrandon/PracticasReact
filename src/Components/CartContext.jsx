import { createContext, useState, useEffect } from 'react';

export const MyCartContext = createContext();

export default function CartContext() {
    function addItem() {
       
      }
      function removeItem() {
       
      }
      function clear() {
        
      }
      const isInCart = (id) => {
       
      };
    
      return (
        <>
          <MyCartContext.Provider value={{ }}>{children}</MyCartContext.Provider>
        </>
      );
  }