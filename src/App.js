//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import CartContext from "./Components/CartContext";
import {myContext} from "./Components/CartContext";
import { useContext } from "react";





function App() {

  const {addItem, removeItem, clear, setCart, setvaciarCarrito} = useContext(myContext);

  return (
    <>
    <BrowserRouter>
    <header>
    <NavBar/>
    </header>
    <Routes>
    <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
    </Routes>
    <div><Footer/></div>
    </BrowserRouter>
    </>
  );
}

export default App;
