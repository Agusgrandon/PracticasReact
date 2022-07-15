//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Cart from './Components/Cart';






function App() {



  return (
    <>
    <BrowserRouter>
    <header>
    <NavBar/>
    </header>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:idCategory" element={<ItemListContainer/>} />
    <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    </Routes>
    <div><Footer/></div>
    </BrowserRouter>
    </>
  );
}

export default App;
