//@ts-check
import { createContext, useState } from 'react';

export const MyContext = createContext();

export default function CartContext({ children }) {

  const [carrito, setCarrrito] = useState([]);
  const [cantItems, setCantItems] = useState(0);
  const [total, setTotal] = useState(0)
  const [carritoVacio, setCarritoVacio] = useState(true)
  const [menu, setMenu]  = useState(false);


  function addItem(item, quantity) {
    setCarritoVacio(false)
    if(isInCart(item.id)){
      let productoCarrito = carrito; 
      let indexProducto = productoCarrito.findIndex(element=> element.id === item.id);
      productoCarrito[indexProducto].quantity = Number(productoCarrito[indexProducto].quantity) + Number(quantity);
      setCarrrito(productoCarrito);
      setCantItems(productoCarrito.reduce((acc, element)=> acc + element.quantity, 0));
      setTotal(productoCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
    }else{
      const productosCarrito = [...carrito, {...item, quantity:quantity }];
      setCarrrito(productosCarrito)
      setCantItems(productosCarrito.reduce((acc, element)=> acc + element.quantity, 0));
      setTotal(productosCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
    }
  }

  function removeItem(itemId) {
    const eliminarProducto = carrito.filter((el) => el.id !== itemId );
    eliminarProducto ===[] && setCarritoVacio(true);
    setCarrrito(eliminarProducto);
    setCantItems(eliminarProducto.reduce((acc, element)=> acc + element.quantity, 0));
    setTotal(eliminarProducto.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );

  }

  function clear() {
    const eliminarProducto=[];
    setCarrrito(eliminarProducto);
    setCantItems(0);
    setCarritoVacio(true)
    setTotal(0);
  }

  const isInCart = (id) => {
    return carrito.find((el) => el.id === id);
  }
  const value = {
    menu : [menu, setMenu] 
  }

  return (
    <>
    <MyContext.Provider value={{ cantItems, carrito, addItem, removeItem, clear, carritoVacio, total}}>
        {children}
    </MyContext.Provider>
    </>
  );
}