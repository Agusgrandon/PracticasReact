//@ts-check
import './App.css';
import Titulo from './Components/Titulo';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';


function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Titulo></Titulo>
       <NavBar/>
       <CartWidget/>
       </header>
       <main>
       <ItemListContainer msg= "Las últimas novedades"/>
       <ItemCount/>
       </main>
    </div>
  );
}

export default App;
