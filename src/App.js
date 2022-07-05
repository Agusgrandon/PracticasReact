//@ts-check
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';





function App() {

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
       <ItemListContainer greeting= "Todos nuestros productos"/>
       </main>
    </div>
  );
}

export default App;
