//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';





function App() {

  return (
    <>
    <BrowserRouter>
    <header>
    <NavBar/>
    </header>
    <Routes>
    <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/category/:id" element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
    <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
    </Routes>
    <div><Footer/></div>
    </BrowserRouter>
    </>
  );
}

export default App;
