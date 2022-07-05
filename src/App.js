//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';





function App() {

  return (
    <>
    <BrowserRouter>
    <div><NavBar/></div>
    <Routes>
    <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/category/:id" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
