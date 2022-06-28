//@ts-check
import './App.css';
import Titulo from './Components/Titulo';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';




function App() {

  let initial = 1
  let stock = 5

  function onAdd(valor) {
    alert("usted agrego" + valor + "producto al carrito")
  }
  return (
    <div className="App">
       <header className="App-header">
       <Titulo></Titulo>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhnKXvVnsrmtTfSWr6b30lxWBO4Da4VQjRA&usqp=CAU" className="icono" alt="" />
       <NavBar/>
       <CartWidget/>
       </header>
       <main>
       <ItemListContainer greeting= "Las últimas novedades"/>
       <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
       </main>
    </div>
  );
}

export default App;
