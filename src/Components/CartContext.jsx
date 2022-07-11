//@ts-check
import { createContext, useState} from 'react';

export const myContext = createContext();

export default function CartContext() {

  const [cart, setCart] = useState([]);
  const [vaciarCarrito, setvaciarCarrito] = useState(true)

    function addItem(item, quantity) {
      setvaciarCarrito(false)
      if(isInCart(item.id)){
          let producto = cart; 
          let buscarProducto = producto.findIndex(element=> element.id === item.id); 
          producto[buscarProducto].quantity = Number(producto[buscarProducto].quantity) + Number(quantity);  
          setCart(producto);   
        }
      }
      function removeItem(itemId) {
        setCart(cart.filter((el) => el.id !== itemId ) )
      }
      function clear() {
        setCart([])
        setvaciarCarrito(true)
      }
      const isInCart = (id) => {
        return cart.find((el) => el.id === id);
      };
    
      return (
        <>
          <myContext.Provider value={{addItem, removeItem, clear, setCart, setvaciarCarrito}}>{children}</myContext.Provider>
        </>
      );
  }