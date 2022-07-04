//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';




function App() {

  let initial = 1
  let stock = 5

  function onAdd(valor) {
    alert("¡Agregado al carrito!")
  }
  return (
    <div className="App">
       <header className="App-header">
       <NavBar/>
       <CartWidget/>
       </header>
       <main>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <ItemListContainer greeting= "Las últimas novedades"/>
       <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
       </main>
    </div>
  );
}

export default App;
